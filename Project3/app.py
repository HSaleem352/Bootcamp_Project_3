from flask import Flask, render_template
import pandas as pd


app = Flask(__name__)

@app.route('/')
def main():
    return render_template("index.html")

@app.route('/api/Smoker&BC_VS_Non-Smoker&BC', methods=['GET'])
def get_data1():
    # Read CSV file using pandas
    df = pd.read_csv("https://drive.google.com/uc?id=1WHdLRb3-9xl91szvWtSQpV1gWl12hotK&export=download")
   
    # Convert DataFrame to JSON
    json_data = df.to_json(orient='records')

    return json_data

@app.route('/api/Smoker_NonSmoker_Covid_DF', methods=['GET'])
def get_data2():
    # Read CSV file using pandas
    df = pd.read_csv('https://drive.google.com/uc?id=1uZaOgO0ly8vnpRrjx8L8D-D0bit453Hh&export=download')
    
    # Convert DataFrame to JSON
    json_data = df.to_json(orient='records')

    return json_data

@app.route('/api/MildCov_BC_Smoker_NonSmoker_DF', methods=['GET'])
def get_data3():
    # Read CSV file using pandas
    df = pd.read_csv('https://drive.google.com/uc?id=1eGS51t_iA2thfhZPX4dwlNeHRSldqSrL&export=download')
    
    # Convert DataFrame to JSON
    json_data = df.to_json(orient='records')

    return json_data

@app.route('/api/ModerateCov_BC_Smoker_NonSmoker_DF', methods=['GET'])
def get_data4():
    # Read CSV file using pandas
    df = pd.read_csv('https://drive.google.com/uc?id=1ByrRT6n_V9kNpAordMIipHB6k4pWC4xo&export=download')
    
    # Convert DataFrame to JSON
    json_data = df.to_json(orient='records')

    return json_data

@app.route('/api/SevereCov_BC_Smoker_NonSmoker_DF', methods=['GET'])
def get_data5():
    # Read CSV file using pandas
    df = pd.read_csv('https://drive.google.com/uc?id=1Cn75SkCm_0x3Z7VKsifnpeavcJZDalJL&export=download')
    
    # Convert DataFrame to JSON
    json_data = df.to_json(orient='records')

    return json_data

@app.route('/api/A_St_BC_Smoker_NonSmoker_DF', methods=['GET'])
def get_data6():
    # Read CSV file using pandas
    df = pd.read_csv('https://drive.google.com/uc?id=1NB6wbM0zmmW7RxFI8vBI3wOgGVqOloXU&export=download')
    
    # Convert DataFrame to JSON
    json_data = df.to_json(orient='records')

    return json_data

@app.route('/api/A_Prog_BC_Smoker_NonSmoker_DF', methods=['GET'])
def get_data7():
    # Read CSV file using pandas
    df = pd.read_csv('https://drive.google.com/uc?id=1X4ue-G51Q7_v9zU_9uY7zYd99A8v7M6h&export=download')
    
    # Convert DataFrame to JSON
    json_data = df.to_json(orient='records')

    return json_data

    
####   Hamza Below
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
