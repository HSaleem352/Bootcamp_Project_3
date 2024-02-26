import pandas as pd
from flask import Flask, jsonify, render_template

# Flask app
app = Flask(__name__)

@app.route('/')
def main():
    return render_template("index_HS.html")

@app.route('/residence')
def get_data():
    # Reading the file
    dataset_df = pd.read_csv("https://drive.google.com/u/0/uc?id=1IBWDyHq2TJHcvYXWJ8Kh38j_L_ZlJbkr&export=download")

    # Cleaning the dataset
    # Narrow down the dataset to view region and severity of Covid
    residence_df = dataset_df[['der_region_v2', 'urban_rural', 'der_site_type', 'severity_of_covid_19_v2']]

    # Clean the dataset to remove any NAN fields
    nonNaN_residence_df = residence_df.dropna()

    # Remove any non-US and other data
    US_residence_df = nonNaN_residence_df.loc[(nonNaN_residence_df['der_region_v2'] != 'Non-US') | (nonNaN_residence_df['der_region_v2'] != 'Other')]

    # Remove unknown residence 
    US_residence_df_clean = US_residence_df.loc[(US_residence_df['urban_rural'] != 'Unknown') | (US_residence_df['der_region_v2'] != 'Other')]

    #residence_counts = pd.DataFrame(US_residence_df_clean['urban_rural'].value_counts())
    residence_counts = US_residence_df_clean['urban_rural'].value_counts()
    residence_counts = pd.DataFrame(US_residence_df_clean['urban_rural'].value_counts())


    return (residence_counts.to_json())


if __name__ == '__main__':
    app.run(debug=True)