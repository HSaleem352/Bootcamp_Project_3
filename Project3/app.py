from flask import Flask, render_template, jsonify
import pandas as pd
import os

# Python SQL toolkit and Object Relational Mapper
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine
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


#################################################################################################################################################
#################################################################################################################################################
#################################################################################################################################################
#################################################################################################################################################
#################################################################################################################################################
#################################################################################################################################################
#################################################################################################################################################
    

#################################################################################################################################################
#################################################################################################################################################
#################################################################################################################################################
#################################################################################################################################################
#################################################################################################################################################
#################################################################################################################################################
#################################################################################################################################################





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

@app.route('/hamza')
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
###############################################################################################################

@app.route('/api/v1/AFR_timing_df', methods=['GET'])
def AFR_timing_df():

    # Read CSV file using pandas
    df = pd.read_csv('https://drive.google.com/uc?id=1FE-JYKjod8YGo71-E37W3UpDq8nL3UyU&export=download')
    
    # Convert DataFrame to JSON
    json_data = df.to_json(orient='records')

    return json_data

@app.route("/api/v1/afr_treatment_type_df", methods=["GET"])
def afr_treatment_type_df():

    # Read CSV file using pandas
    df = pd.read_csv("https://drive.google.com/uc?id=1uDqbe24GtHw7ctzsdma_r4-wGPVUFevh&export=download")

    # Convert DataFrame to JSON
    json_data = df.to_json(orient="records")

    return json_data

@app.route('/afr_treatment_timing_page')
def afr_page():
    return render_template("alejandra.html")


#################################################################################################################
##                                                  Shan                                                       ##
#################################################################################################################
@app.route('/shan')
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

@app.route('/api/v1/covid_severity_count_by_race', methods=['GET'])
def get_data2_shan():
    # Read Dataframe using SQL
    with engine.connect() as connection:
        df = pd.read_sql('covid_severity_count_by_race',connection)

    # Convert DataFrame to JSON
    json_data = df.to_json(orient='records')

    return json_data


@app.route('/api/v1/race_and_severity_plot', methods=['GET'])
def get_data3_shan():
    # Read Dataframe using SQL
    with engine.connect() as connection:
        df = pd.read_sql('race_and_severity_plot',connection)
   
    # Convert DataFrame to JSON
    json_data = df.to_json(orient='records')

    return json_data

@app.route('/api/v1/cancer_status_sum', methods=['GET'])
def get_data4_shan():
    # Read Dataframe using SQL
    with engine.connect() as connection:
        df = pd.read_sql('cancer_status_sum',connection)
   
    # Convert DataFrame to JSON
    json_data = df.to_json(orient='records')

    return json_data






#################################################################################################################
##                                                  Dean                                                       ##
#################################################################################################################

@app.route('/dean_q')
def dean_q():
    return render_template("dean_q.html")


@app.route('/api/v1/age_status_severity', methods=['GET'])
def age_v_cancer_covid_data():
    # Read Dataframe using SQL
    with engine.connect() as connection:
        df = pd.read_sql('age_status_severity',connection)

    # Convert DataFrame to JSON
    json_data = df.to_json(orient='records')

    return json_data



#################################################################################################################
##                                                  Fozia                                                      ##
#################################################################################################################

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
    cleaned_data_json = age_obesity.to_json(orient='records')

    return cleaned_data_json



#################################################################################################################
##                                                  Debug                                                      ##
#################################################################################################################
if __name__ == '__main__':
    app.run(debug=True)


    
#####################################################################################################################
#####################################################################################################################
#####################################################################################################################
#####################################################################################################################
#####################################################################################################################


# @app.route('/api/v1/cancer_status_sum', methods=['GET'])
# def get_data2_shan():
#     # Read Dataframe using SQL
#     with engine.connect() as connection:
#         df = pd.read_sql('cancer_status_sum',connection)
   
#     # Convert DataFrame to JSON
#     json_data = df.to_json(orient='records')

#     return json_data


# @app.route('/api/v1/race_and_severity_plot', methods=['GET'])
# def get_data3_shan():
#     # Read Dataframe using SQL
#     with engine.connect() as connection:
#         df = pd.read_sql('race_and_severity_plot',connection)
   
#     # Convert DataFrame to JSON
#     json_data = df.to_json(orient='records')

#     return json_data


# @app.route('/api/v1/covid_severity_count_by_race', methods=['GET'])
# def get_data4_shan():
#     # Read Dataframe using SQL
#     with engine.connect() as connection:
#         df = pd.read_sql('covid_severity_count_by_race',connection)

#     # Convert DataFrame to JSON
#     json_data = df.to_json(orient='records')

#     return json_data


# @app.route('/api/v1/race_counts_percentage', methods=['GET'])
# def get_data5_shan():
#     # Read Dataframe using SQL
#     with engine.connect() as connection:
#         df = pd.read_sql('race_counts_percentage',connection)

#     # Convert DataFrame to JSON
#     json_data = df.to_json(orient='records')

#     return json_data


# @app.route('/api/v1/race_counts', methods=['GET'])
# def get_data6_shan():
#     # Read Dataframe using SQL
#     with engine.connect() as connection:
#         df = pd.read_sql('race_counts',connection)

#     # Convert DataFrame to JSON
#     json_data = df.to_json(orient='records')

#     return json_data


# #################################################################################################################
# ##                                                  Dean                                                       ##
# #################################################################################################################

# @app.route('/dean_q')
# def dean_q():
#     return render_template("dean_q.html")


# @app.route('/api/v1/age_status_severity', methods=['GET'])
# def age_v_cancer_covid_data():
#     # Read Dataframe using SQL
#     with engine.connect() as connection:
#         df = pd.read_sql('age_status_severity',connection)

#     # Convert DataFrame to JSON
#     json_data = df.to_json(orient='records')

#     return json_data

# #################################################################################################################
# ##                                                  Debug                                                      ##
# #################################################################################################################


# if __name__ == '__main__':
#     app.run(debug=True)