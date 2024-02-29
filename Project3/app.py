from flask import Flask, render_template
import pandas as pd
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, text, inspect, func
from flask import Flask, jsonify, render_template

engine = create_engine('postgresql+psycopg2://breast_cancer_dataset_user:UnSNEeECgY7ky2i5KAPC2WtQn9XrRpvc@dpg-cnbvjf779t8c73epbb3g-a.oregon-postgres.render.com/breast_cancer_dataset')

app = Flask(__name__)

@app.route('/')
def main():
    return render_template("index.html")

@app.route('/mina_q1')
def mina_q1():
    return render_template("mina_q1.html")

@app.route('/mina_q2')
def mina_q2():
    return render_template("mina_q2.html")

@app.route('/dean_q')
def dean_q():
    return render_template("dean_q.html")

@app.route('/api/v1/Smoker&BC_VS_Non-Smoker&BC', methods=['GET'])
def get_data_MB1():
    # Read CSV file using pandas
    df = pd.read_csv("https://drive.google.com/uc?id=1WHdLRb3-9xl91szvWtSQpV1gWl12hotK&export=download")
   
    # Convert DataFrame to JSON
    json_data = df.to_json(orient='records')

    return json_data

@app.route('/api/v1/Smoker_NonSmoker_Covid_DF', methods=['GET'])
def get_data_MB2():
    # Read CSV file using pandas
    df = pd.read_csv('https://drive.google.com/uc?id=1uZaOgO0ly8vnpRrjx8L8D-D0bit453Hh&export=download')
    
    # Convert DataFrame to JSON
    json_data = df.to_json(orient='records')

    return json_data

@app.route('/api/v1/MildCov_BC_Smoker_NonSmoker_DF', methods=['GET'])
def gget_data_MB3():
    # Read CSV file using pandas
    df = pd.read_csv('https://drive.google.com/uc?id=1eGS51t_iA2thfhZPX4dwlNeHRSldqSrL&export=download')
    
    # Convert DataFrame to JSON
    json_data = df.to_json(orient='records')

    return json_data

@app.route('/api/v1/ModerateCov_BC_Smoker_NonSmoker_DF', methods=['GET'])
def get_data_MB4():
    # Read CSV file using pandas
    df = pd.read_csv('https://drive.google.com/uc?id=1ByrRT6n_V9kNpAordMIipHB6k4pWC4xo&export=download')
    
    # Convert DataFrame to JSON
    json_data = df.to_json(orient='records')

    return json_data

@app.route('/api/v1/SevereCov_BC_Smoker_NonSmoker_DF', methods=['GET'])
def get_data_MB5():
    # Read CSV file using pandas
    df = pd.read_csv('https://drive.google.com/uc?id=1Cn75SkCm_0x3Z7VKsifnpeavcJZDalJL&export=download')
    
    # Convert DataFrame to JSON
    json_data = df.to_json(orient='records')

    return json_data


@app.route('/api/v1/A_Res_BC_Smoker_NonSmoker_DF', methods=['GET'])
def get_data_MB6():
    # Read CSV file using pandas
    df = pd.read_csv('https://drive.google.com/uc?id=1AtBbKKS8v7dsbIwX1B_VZbUXhnOHbFwt&export=download')
    
    # Convert DataFrame to JSON
    json_data = df.to_json(orient='records')

    return json_data

@app.route('/api/v1/A_St_BC_Smoker_NonSmoker_DF', methods=['GET'])
def get_data_MB7():
    # Read CSV file using pandas
    df = pd.read_csv('https://drive.google.com/uc?id=1NB6wbM0zmmW7RxFI8vBI3wOgGVqOloXU&export=download')
    
    # Convert DataFrame to JSON
    json_data = df.to_json(orient='records')

    return json_data

@app.route('/api/v1/A_Prog_BC_Smoker_NonSmoker_DF', methods=['GET'])
def get_data_MB8():
    # Read CSV file using pandas
    df = pd.read_csv('https://drive.google.com/uc?id=1X4ue-G51Q7_v9zU_9uY7zYd99A8v7M6h&export=download')
    
    # Convert DataFrame to JSON
    json_data = df.to_json(orient='records')

    return json_data
 

#################################################################################################################
#################################################################################################################

@app.route('/api/HS/residence_counts')
def HS_residenceCounts():

    with engine.connect() as connection:
        residence_counts = pd.read_sql('residence_counts',connection)
    
    return (residence_counts.to_json(orient='records'))

## Alejandra

@app.route('/api/v1/AFR_timing_df', methods=['GET'])
def afr_timing_df():

    # Read CSV file using pandas
    df = pd.read_csv('https://drive.google.com/uc?id=1Yt49jL6G8ZMfX3SY_wiEpPmtMVui0BIp&export=download')
    
    # Convert DataFrame to JSON
    json_data = df.to_json(orient='records')

    return json_data

@app.route("/api/v1/treatment_type_df", methods=["GET"])
def afr_treatment_type_df():

    # Read CSV file using pandas
    df1 = pd.read_csv("https://drive.google.com/uc?id=1HZYF4bIOI3e-XYANDO0bYHsRfiq1-hd0&export=download")

    # Convert DataFrame to JSON
    json_data = df1.to_json(orient="recods")

    return json_data

## DEAN
@app.route('/api/v1/age_status_severity', methods=['GET'])
def age_v_cancer_covid_data():
    df = pd.read_csv("https://drive.google.com/u/0/uc?id=1-I42sBzZYTQNqXXqlX9HkMXjoYP0zCNc&export=download")
    # Convert DataFrame to JSON
    json_data = df.to_json(orient='records')

    return json_data

if __name__ == '__main__':
    app.run(debug=True)

