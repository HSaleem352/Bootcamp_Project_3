from flask import Flask, render_template, jsonify
import pandas as pd
import os

# Python SQL toolkit and Object Relational Mapper
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine,text
import pandas as pd

engine = create_engine('postgresql+psycopg2://breast_cancer_dataset_user:UnSNEeECgY7ky2i5KAPC2WtQn9XrRpvc@dpg-cnbvjf779t8c73epbb3g-a.oregon-postgres.render.com/breast_cancer_dataset')

app = Flask(__name__)


@app.route('/')
def main():
    return render_template("index.html")

@app.route('/Fozia')
def fozia_page():
    return render_template("FY.html")


# a function to display the data from the sql server in json
@app.route('/api/v1/FYinit_data',methods=['GET'])
def FY_get_data():
    # Read Dataframe using SQL
    with engine.connect() as connection:
        df = pd.read_sql('FYinit_data',connection)

    # Convert DataFrame to JSON
    json_data = df.to_json(orient='records')

    return  jsonify(json_data)



@app.route('/obesity_age_effect')
def obesity_age_effect():
    with engine.connect() as connection:
        mild = pd.read_sql("SELECT der_age_trunc FROM obesity_age_effect Where severity_of_covid_19_v2 = 'Mild'", connection)
        moderate = pd.read_sql("SELECT der_age_trunc FROM obesity_age_effect Where severity_of_covid_19_v2 = 'Moderate'", connection)
        severe = pd.read_sql("SELECT der_age_trunc FROM obesity_age_effect Where severity_of_covid_19_v2 = 'Severe'", connection)
       
    combine1 = mild.join(moderate, lsuffix='_caller', rsuffix='_other')
    combine2 = combine1.join(severe, lsuffix='_caller', rsuffix='_other')
    combine2.rename(columns={"der_age_trunc_caller": "mild", "der_age_trunc_other": "moderate", "der_age_trunc":"Severe"}, inplace = True)

   
    age_obesity = combine2.fillna(0)
    cleaned_data_json = age_obesity.to_json(orient='records')

    return cleaned_data_json



@app.route('/FYcancer_status_percentage')
def cancer_percentage():
    with engine.connect() as connection:
        # Query data for cancer percentage
        query = text("""
            SELECT
                COUNT(*) FILTER (WHERE der_cancer_status_v4 = 'Active and stable' OR der_cancer_status_v4 = 'Active and responding') / COUNT(*)::float * 100 AS cancer_percentage,
                COUNT(*) FILTER (WHERE der_cancer_status_v4 = 'Remission or no evidence of disease, >5 years' OR der_cancer_status_v4 = 'Remission or no evidence of disease, <5 years') / COUNT(*)::float * 100 AS no_cancer_percentage
            FROM obesity_age_effect
        """)
        result = connection.execute(query)

        # Convert the result to a DataFrame
        cancer_percentage_df = pd.DataFrame(result.fetchall(), columns=["cancer_percentage", "no_cancer_percentage"])

    # Convert the DataFrame to JSON
    cancer_percentage_json = cancer_percentage_df.to_json(orient='records')

    return cancer_percentage_json

@app.route('/obesity_distribution')
def obesity_distribution():
    with engine.connect() as connection:
        # Query data for obesity distribution
        query = text("""
            SELECT
                der_obesity,
                COUNT(*) AS count
            FROM obesity_age_effect
            GROUP BY der_obesity
        """)
        result = connection.execute(query)

        # Convert the result to a DataFrame
        obesity_distribution_df = pd.DataFrame(result.fetchall(), columns=["der_obesity", "count"])

    # Convert the DataFrame to JSON
    obesity_distribution_json = obesity_distribution_df.to_json(orient='records')

    return obesity_distribution_json



@app.route('/covid_severity_distribution')
def covid_severity_distribution():
    with engine.connect() as connection:
        # Query data for COVID-19 severity distribution by obesity status
        query = """
            SELECT
                der_obesity,
                severity_of_covid_19_v2,
                COUNT(*) AS count
            FROM obesity_age_effect
            GROUP BY der_obesity, severity_of_covid_19_v2
        """
        result = connection.execute(query)

        # Convert the result to a DataFrame
        covid_severity_distribution_df = pd.DataFrame(result.fetchall(), columns=["der_obesity", "severity_of_covid_19_v2", "count"])

    # Convert the DataFrame to JSON
    covid_severity_distribution_json = covid_severity_distribution_df.to_json(orient='records')

    return covid_severity_distribution_json



@app.route('/age_distribution_by_covid_severity')
def age_distribution_by_covid_severity():
    with engine.connect() as connection:
        query = "SELECT der_age_trunc, severity_of_covid_19_v2 FROM obesity_age_effect WHERE der_cancer_status_v4 IS NOT NULL"
        data = pd.read_sql(query, connection)

    # Clean the data if needed and filter out null values
    data = data.dropna()

    # Convert the data to JSON
    age_distribution_data = data.to_json(orient='records')

    return age_distribution_data

if __name__ == '__main__':
    app.run(debug=True)



  