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

#################################################################################################################
##                                                Mina                                                         ##
#################################################################################################################

@app.route('/mina_q1')
def mina_q1():
    return render_template("mina_q1.html")

@app.route('/mina_q2')
def mina_q2():
    return render_template("mina_q2.html")

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
    # # Read Dataframe using SQL
    with engine.connect() as connection:
        df = pd.read_sql('A_St_BC_Smoker_NonSmoker_DF',connection)
    
    # Convert DataFrame to JSON
    json_data = df.to_json(orient='records')

    return json_data

@app.route('/api/v1/A_Prog_BC_Smoker_NonSmoker_DF', methods=['GET'])
def get_data_MB8():
    # Read CSV file using pandas
    with engine.connect() as connection:
        df = pd.read_sql('A_Prog_BC_Smoker_NonSmoker_DF',connection)
    
    # Convert DataFrame to JSON
    json_data = df.to_json(orient='records')

    return json_data
 

#################################################################################################################
##                                                Hamza                                                        ##
#################################################################################################################

@app.route('/api/HS/residence_counts', methods=['GET'])
def HS_residenceCounts():

    with engine.connect() as connection:
        residence_counts = pd.read_sql('residence_counts',connection)
    
    return (residence_counts.to_json(orient='records'))


#################################################################################################################
##                                                Alejandra                                                    ##
#################################################################################################################

@app.route('/api/v1/AFR_timing_df', methods=['GET'])
def afr_timing_df():

    # Read CSV file using pandas
    with engine.connect() as connection:
        df = pd.read_sql('AFR_timing_df',connection)
    
    # Convert DataFrame to JSON
    json_data = df.to_json(orient='records')

    return json_data

@app.route("/api/v1/treatment_type_df", methods=["GET"])
def afr_treatment_type_df():

    # Read CSV file using pandas
    with engine.connect() as connection:
        df = pd.read_sql('treatment_type_df',connection)

    # Convert DataFrame to JSON
    json_data = df.to_json(orient="recods")

    return json_data

## Shan


@app.route('/api/v1/percentage_df', methods=['GET'])
def get_data1_shan():
    # Read CSV file using pandas
    df = pd.read_csv('https://drive.google.com/uc?id=1y-JrZNB_rxoE0dK-N_E1WMOQoKI9Wf_o&export=download')
   
    # Convert DataFrame to JSON
    json_data = df.to_json(orient='records')


    return json_data




@app.route('/api/v1/cancer_status_sum', methods=['GET'])
def get_data2_shan():
    # Read CSV file using pandas
    df2 = pd.read_csv('https://drive.google.com/uc?id=124_14GL5gPJIZNyqeLe43VG9Ts49wq_F&export=download')
   
    # Convert DataFrame to JSON
    json_data = df2.to_json(orient='records')


    return json_data




@app.route('/api/v1/race_and_severity_plot', methods=['GET'])
def get_data3_shan():
    # Read CSV file using pandas
    df3 = pd.read_csv('https://drive.google.com/uc?id=1k7imD_Er8sImRHxNVDZpSqu5RNgtHHI4&export=download')
   
   
    # Convert DataFrame to JSON
    json_data = df3.to_json(orient='records')


    return json_data


@app.route('/api/v1/covid_severity_count_by_race', methods=['GET'])
def get_data4_shan():
    # Read CSV file using pandas
    df4 = pd.read_csv('https://drive.google.com/uc?id=1hiH6yxP8IotqlrEJQ0I65bb8u0A5_TSd&export=download')


   
   
    # Convert DataFrame to JSON
    json_data = df4.to_json(orient='records')


    return json_data


@app.route('/api/v1/race_counts_percentage', methods=['GET'])
def get_data5_shan():
    # Read CSV file using pandas
    df5 = pd.read_csv('https://drive.google.com/uc?id=1aTK9PfTcUVMMD7B3dCDwUrXHbvNA88HZ&export=download')


   
    # Convert DataFrame to JSON
    json_data = df5.to_json(orient='records')


    return json_data


@app.route('/api/v1/race_counts', methods=['GET'])
def get_data6_shan():
    # Read CSV file using pandas
    df6 = pd.read_csv('https://drive.google.com/uc?id=10r8M-WxvWEJhDgq_KXekLgFWebGQEzve&export=download')


    # Convert DataFrame to JSON
    json_data = df6.to_json(orient='records')


    return json_data




if __name__ == '__main__':
    app.run(debug=True)

