from flask import Flask, render_template, jsonify
import pandas as pd
import os

app = Flask(__name__)

@app.route('/')
def main():
    return render_template("index.html")

@app.route('/Fozia')
def fozia_page():
    return render_template("FY.html")

@app.route('/obesity_age_effect')
def obesity_age_effect():
    # Call the function to collect and clean the data if not already done
    # cleaned_data_link = "https://drive.google.com/file/d/1XlddGFnRFavw58PFowIIgLVWrRco-Ffu/view?usp=drive_link"

    # Reading the data from Google Drive
    file_link = 'https://drive.google.com/u/0/uc?id=1IBWDyHq2TJHcvYXWJ8Kh38j_L_ZlJbkr&export=download'
    data_df = pd.read_csv(file_link)
    
    # Cleaning and filtering the data 
    data_df["der_days_fu"] = pd.to_numeric(data_df["der_days_fu"], errors="coerce")
    data_df["der_days_fu"] = pd.to_numeric(data_df["der_age_trunc"], errors="coerce")

    # Selecting only the columns needed
    selected_columns = ["der_age_trunc", "der_obesity", "der_race_v2", "der_cancer_status_v4", "severity_of_covid_19_v2"]
    cleaned_data = data_df[selected_columns]

    # Dropping rows with empty values 
    cleaned_data = cleaned_data.dropna()
    
    # cleaned_data = collect_and_clean_data()
    # Convert the cleaned data to JSON
    cleaned_data_json = cleaned_data.to_json(orient='records')

    return cleaned_data_json

if __name__ == '__main__':
    app.run(debug=True)