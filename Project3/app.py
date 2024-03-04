from flask import Flask, render_template, jsonify
import pandas as pd
import os

# Python SQL toolkit and Object Relational Mapper
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine
import pandas as pd

engine = create_engine('postgresql+psycopg2://breast_cancer_dataset_user:UnSNEeECgY7ky2i5KAPC2WtQn9XrRpvc@dpg-cnbvjf779t8c73epbb3g-a.oregon-postgres.render.com/breast_cancer_dataset')

app = Flask(__name__)


@app.route('/')
def main():
    return render_template("index.html")

@app.route('/Fozia')
def fozia_page():
    return render_template("FY.html")

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
    
    
    # # Call the function to collect and clean the data if not already done
    # # cleaned_data_link = "https://drive.google.com/file/d/1XlddGFnRFavw58PFowIIgLVWrRco-Ffu/view?usp=drive_link"

    # # Reading the data from Google Drive
    # file_link = 'https://drive.google.com/u/0/uc?id=1IBWDyHq2TJHcvYXWJ8Kh38j_L_ZlJbkr&export=download'
    # data_df = pd.read_csv(file_link)
    
    # # Cleaning and filtering the data 
    # data_df["der_days_fu"] = pd.to_numeric(data_df["der_days_fu"], errors="coerce")
    # data_df["der_days_fu"] = pd.to_numeric(data_df["der_age_trunc"], errors="coerce")

    # # Selecting only the columns needed
    # selected_columns = ["der_age_trunc", "der_obesity", "der_race_v2", "der_cancer_status_v4", "severity_of_covid_19_v2"]
    # cleaned_data = data_df[selected_columns]

    # # Dropping rows with empty values 
    # cleaned_data = cleaned_data.dropna()
    
    # cleaned_data = collect_and_clean_data()
    # Convert the cleaned data to JSON
    cleaned_data_json = age_obesity.to_json(orient='records')

    return cleaned_data_json

if __name__ == '__main__':
    app.run(debug=True)