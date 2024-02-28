from flask import Flask, render_template,jsonify
import pandas as pd


app = Flask(__name__)

@app.route('/')
def main():
    return render_template("index.html")

@app.route('/obesity_age_effect')
def get_data_content():
    file_link ='https://drive.google.com/u/0/uc?id=1IBWDyHq2TJHcvYXWJ8Kh38j_L_ZlJbkr&export=download'

    # reading the data from google drive 
    data_df = pd.read_csv(file_link)
    
    # cleaning and filtering the data 
    data_df["der_days_fu"]=pd.to_numeric(data_df["der_days_fu"],errors="coerce")
    data_df["der_days_fu"]=pd.to_numeric(data_df["der_age_trunc"],errors="coerce")

    # selecting only the columns needed
    selected_columns=["der_age_trunc","der_obesity","der_race_v2","der_cancer_status_v4","severity_of_covid_19_v2"]
    cleaned_data = data_df[selected_columns]

    # dropping rows with empty values 
    cleaned_data = cleaned_data.dropna()

    # covering dataframe to json 
    cleaned_data_json = cleaned_data.to_json(orient = 'records')
    return jsonify(cleaned_data_json)

if __name__ == '__main__':
    app.run(debug=True)
