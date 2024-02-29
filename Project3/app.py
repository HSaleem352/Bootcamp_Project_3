from flask import Flask, render_template
import pandas as pd
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, text, inspect, func
from flask import Flask, jsonify, render_template

engine = create_engine('postgresql://breast_cancer_dataset_user:UnSNEeECgY7ky2i5KAPC2WtQn9XrRpvc@dpg-cnbvjf779t8c73epbb3g-a.oregon-postgres.render.com/breast_cancer_dataset')

app = Flask(__name__)

@app.route('/')
def main():
    return render_template("index.html")

@app.route('/api/Smoker&BC_VS_Non-Smoker&BC', methods=['GET'])
def get_data1():
    # Read CSV file using pandas
    df1 = pd.read_csv("https://drive.google.com/uc?id=1WHdLRb3-9xl91szvWtSQpV1gWl12hotK&export=download")
   
    # Convert DataFrame to JSON
    json_data = df1.to_json(orient='records')

    return json_data

@app.route('/api/Smoker_NonSmoker_Covid_DF', methods=['GET'])
def get_data2():
    # Read CSV file using pandas
    df2 = pd.read_csv('https://drive.google.com/uc?id=1uZaOgO0ly8vnpRrjx8L8D-D0bit453Hh&export=download')
    
    # Convert DataFrame to JSON
    json_data = df2.to_json(orient='records')

    return json_data

@app.route('/api/MildCov_BC_Smoker_NonSmoker_DF', methods=['GET'])
def get_data3():
    # Read CSV file using pandas
    df2 = pd.read_csv('https://drive.google.com/uc?id=1eGS51t_iA2thfhZPX4dwlNeHRSldqSrL&export=download')
    
    # Convert DataFrame to JSON
    json_data = df2.to_json(orient='records')

    return json_data

@app.route('/api/ModerateCov_BC_Smoker_NonSmoker_DF', methods=['GET'])
def get_data4():
    # Read CSV file using pandas
    df2 = pd.read_csv('https://drive.google.com/uc?id=1ByrRT6n_V9kNpAordMIipHB6k4pWC4xo&export=download')
    
    # Convert DataFrame to JSON
    json_data = df2.to_json(orient='records')

    return json_data

@app.route('/api/SevereCov_BC_Smoker_NonSmoker_DF', methods=['GET'])
def get_data5():
    # Read CSV file using pandas
    df2 = pd.read_csv('https://drive.google.com/uc?id=1Cn75SkCm_0x3Z7VKsifnpeavcJZDalJL&export=download')
    
    # Convert DataFrame to JSON
    json_data = df2.to_json(orient='records')

    return json_data

#################################################################################################################
#################################################################################################################

@app.route('/api/HS/residence_counts')
def HS_residenceCounts():

    with engine.connect() as connection:
        residence_counts = pd.read_sql('residence_counts',connection)
    
    return (residence_counts.to_json(orient='records'))


if __name__ == '__main__':
    app.run(debug=True)