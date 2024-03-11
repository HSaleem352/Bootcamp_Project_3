from flask import Flask, render_template, jsonify
import pandas as pd
import os

# Python SQL toolkit and Object Relational Mapper
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine,text
import pandas as pd
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, text, inspect, func
from flask import Flask, jsonify, render_template

engine = create_engine('postgresql+psycopg2://breast_cancer_dataset_user:UnSNEeECgY7ky2i5KAPC2WtQn9XrRpvc@dpg-cnbvjf779t8c73epbb3g-a.oregon-postgres.render.com/breast_cancer_dataset')

app = Flask(__name__)

#################################################################################################################
##                                            Home Page                                                        ##
#################################################################################################################

@app.route('/')
def main():
    return render_template("index.html")

#################################################################################################################
##                                            Our Team Page                                                    ##
#################################################################################################################

@app.route('/OurTeam')
def ourteam():
    return render_template("ourteam.html")

#################################################################################################################
##                                            References Page                                                  ##
#################################################################################################################

@app.route('/Limitations_References')
def Limitations_References():
    return render_template("limitations_references.html")

#################################################################################################################
##                                                Mina                                                         ##
#################################################################################################################

@app.route('/smoking_effect')
def mina_q1():
    return render_template("smoking.html")

@app.route('/smoking_race_effect')
def mina_q2():
    return render_template("smoking_race.html")


@app.route('/api/v1/Smoker&BC_VS_Non-Smoker&BC', methods=['GET'])
def get_data_MB1():
    # Read Dataframe using SQL
    with engine.connect() as connection:
        df = pd.read_sql('Smoker&BC_VS_Non-Smoker&BC',connection)
   
    # Convert DataFrame to JSON
    json_data = df.to_json(orient='records')

    return json_data

@app.route('/api/v1/Smoker_NonSmoker_Covid_DF', methods=['GET'])
def get_data_MB2():
    # Read Dataframe using SQL
    with engine.connect() as connection:
        df = pd.read_sql('Smoker_NonSmoker_Covid_DF',connection)
    
    # Convert DataFrame to JSON
    json_data = df.to_json(orient='records')

    return json_data

@app.route('/api/v1/MildCov_BC_Smoker_NonSmoker_DF', methods=['GET'])
def gget_data_MB3():
    # Read Dataframe using SQL
    with engine.connect() as connection:
        df = pd.read_sql('MildCov_BC_Smoker_NonSmoker_DF',connection)
    
    # Convert DataFrame to JSON
    json_data = df.to_json(orient='records')

    return json_data

@app.route('/api/v1/ModerateCov_BC_Smoker_NonSmoker_DF', methods=['GET'])
def get_data_MB4():
    # Read Dataframe using SQL
    with engine.connect() as connection:
        df = pd.read_sql('ModerateCov_BC_Smoker_NonSmoker_DF',connection)

    # Convert DataFrame to JSON
    json_data = df.to_json(orient='records')

    return json_data


@app.route('/api/v1/SevereCov_BC_Smoker_NonSmoker_DF', methods=['GET'])
def get_data_MB5():
    # Read Dataframe using SQL
    with engine.connect() as connection:
        df = pd.read_sql('SevereCov_BC_Smoker_NonSmoker_DF',connection)
    
    # Convert DataFrame to JSON
    json_data = df.to_json(orient='records')

    return json_data


@app.route('/api/v1/A_Res_BC_Smoker_NonSmoker_DF', methods=['GET'])
def get_data_MB6():
    # Read Dataframe using SQL
    with engine.connect() as connection:
        df = pd.read_sql('A_Res_BC_Smoker_NonSmoker_DF',connection)
    
    # Convert DataFrame to JSON
    json_data = df.to_json(orient='records')

    return json_data

@app.route('/api/v1/A_St_BC_Smoker_NonSmoker_DF', methods=['GET'])
def get_data_MB7():
    # Read Dataframe using SQL
    with engine.connect() as connection:
        df = pd.read_sql('A_St_BC_Smoker_NonSmoker_DF',connection)
    
    # Convert DataFrame to JSON
    json_data = df.to_json(orient='records')

    return json_data

@app.route('/api/v1/A_Prog_BC_Smoker_NonSmoker_DF', methods=['GET'])
def get_data_MB8():
    # Read Dataframe using SQL
    with engine.connect() as connection:
        df = pd.read_sql('A_Prog_BC_Smoker_NonSmoker_DF',connection)
    
    # Convert DataFrame to JSON
    json_data = df.to_json(orient='records')

    return json_data
 

#################################################################################################################
##                                                Hamza                                                        ##
#################################################################################################################

@app.route('/residence_type_effects')
def hamza_page():
    return render_template("hamza.html")


@app.route('/api/v1/residence_counts', methods=['GET'])
def HS_residenceCounts():

    # Read Dataframe using SQL
    with engine.connect() as connection:
        df = pd.read_sql('residence_counts',connection)
    
    # Convert DataFrame to JSON
    json_data = df.to_json(orient='records')

    return json_data


@app.route('/api/v1/severity_residence_HS', methods=['GET'])
def severity_residence_HS():

    # Read Dataframe using SQL
    with engine.connect() as connection:
        df = pd.read_sql('severity_residence_HS',connection)

    # Convert DataFrame to JSON
    json_data = df.to_json(orient='records')

    return json_data


@app.route('/api/v1/cancer_residence_HS', methods=['GET'])
def cancer_residence():

    # Read Dataframe using SQL
    with engine.connect() as connection:
        df = pd.read_sql('cancer_residence_HS',connection)

    # Convert DataFrame to JSON
    json_data = df.to_json(orient='records')

    return json_data


#################################################################################################################
##                                                Alejandra                                                    ##
#################################################################################################################

@app.route('/api/v1/AFR_timing_df', methods=['GET'])
def AFR_timing_df():

    
    # Read Dataframe using SQL
    with engine.connect() as connection:
        df = pd.read_sql('AFR_timing_df',connection)

    # Convert DataFrame to JSON
    json_data = df.to_json(orient='records')

    return json_data

@app.route("/api/v1/afr_treatment_type_df", methods=["GET"])
def afr_treatment_type_df():

    # Read Dataframe using SQL
    with engine.connect() as connection:
        df = pd.read_sql('afr_treatment_type_df',connection)

    # Convert DataFrame to JSON
    json_data = df.to_json(orient="records")

    return json_data

@app.route('/afr_treatment_timing_page')
def afr_page():
    return render_template("alejandra.html")


#################################################################################################################
##                                                  Shan                                                       ##
#################################################################################################################

@app.route('/race_affect_COVID_breast_cancer')
def shan_page():
    return render_template("shan.html")


@app.route('/api/v1/race_counts', methods=['GET'])
def get_data1_shan():
    # Read Dataframe using SQL
    with engine.connect() as connection:
        df = pd.read_sql('race_counts',connection)

    # Convert DataFrame to JSON
    json_data = df.to_json(orient='records')

    return json_data


@app.route('/api/v1/cancer_status_sum', methods=['GET'])
def get_data2_shan():
    # Read Dataframe using SQL
    with engine.connect() as connection:
        df = pd.read_sql('cancer_status_sum',connection)
   
    # Convert DataFrame to JSON
    json_data = df.to_json(orient='records')

    return json_data

@app.route('/api/v1/covid_severity_count_by_race', methods=['GET'])
def get_data3_shan():
    # Read Dataframe using SQL
    with engine.connect() as connection:
        df = pd.read_sql('covid_severity_count_by_race',connection)

    # Convert DataFrame to JSON
    json_data = df.to_json(orient='records')

    return json_data


#################################################################################################################
##                                                  Dean                                                       ##
#################################################################################################################

@app.route('/severe_outcomes_by_age')
def dean_page():
    return render_template("dean_q.html")


@app.route('/api/v1/age_status_severity', methods=['GET'])
def age_v_cancer_covid_data():
    # Read Dataframe using SQL
    with engine.connect() as connection:
        df = pd.read_sql('age_status_severity',connection)

    # Convert DataFrame to JSON
    json_data = df.to_json(orient='records')

    return json_data


@app.route("/api/v1/outcome_rates", methods=["GET"])
def outcome_rates():

    # Read CSV file using pandas
    
    # Read Dataframe using SQL
    with engine.connect() as connection:
        df = pd.read_sql('outcome_rates',connection)

    # Convert DataFrame to JSON
    json_data = df.to_json(orient="records")

    return json_data


#################################################################################################################
##                                                  Fozia                                                      ##
#################################################################################################################

@app.route('/obesity&age')
def fozia_page():
    return render_template("FY.html")

# A function to display the data from the sql server in json
@app.route('/api/v1/FYinit_data',methods=['GET'])
def FY_get_data():
    # Read Dataframe using SQL
    with engine.connect() as connection:
        df = pd.read_sql('FYinit_data',connection)

    # Convert DataFrame to JSON
    json_data = df.to_json(orient='records')

    return  jsonify(json_data)


@app.route('/obesity_distribution_active_responding')
def obesity_distribution_active_responding():
    # Connect to the database and retrieve data
    with engine.connect() as connection:
        # Adjust the SQL query based on your database schema and structure
        query = "SELECT der_obesity, COUNT(*) as count FROM obesity_age_effect WHERE der_cancer_status_v4 = 'Active and responding' GROUP BY der_obesity"
        result = connection.execute(query)
        data = [{"der_obesity": row[0], "count": row[1]} for row in result]

    # Convert the data to JSON
    json_data = jsonify(data)
   
    return json_data

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


@app.route("/obesity_distribution")
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
        query = text("""
            SELECT
                der_obesity,
                severity_of_covid_19_v2,
                COUNT(*) AS count
            FROM obesity_age_effect
            GROUP BY der_obesity, severity_of_covid_19_v2
        """)
        result = connection.execute(query)

        # Convert the result to a DataFrame
        covid_severity_distribution_df = pd.DataFrame(result.fetchall(), columns=["der_obesity", "severity_of_covid_19_v2", "count"])

    # Convert the DataFrame to JSON
    covid_severity_distribution_json = covid_severity_distribution_df.to_json(orient='records')

    return covid_severity_distribution_json


@app.route('/age_distribution_by_covid_severity')
def age_distribution_by_covid_severity():
    with engine.connect() as connection:
        query = text("""SELECT der_age_trunc, severity_of_covid_19_v2 FROM obesity_age_effect WHERE der_cancer_status_v4 IS NOT NULL""")
        data = pd.read_sql(query, connection)

    # Clean the data if needed and filter out null values
    data = data.dropna()

    # Convert the data to JSON
    age_distribution_data = data.to_json(orient='records')

    return age_distribution_data

#################################################################################################################
##                                                  Debug                                                      ##
#################################################################################################################

if __name__ == '__main__':
    app.run(debug=True)

