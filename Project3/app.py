from flask import Flask, render_template
import pandas as pd


app = Flask(__name__)

# CSV files
# csv1 = 'Smoker&BC_VS_Non-Smoker&BC.csv'
csv2 = 'Smoker_NonSmoker_Covid_DF.csv'
csv3 = 'MildCov_BC_Smoker_NonSmoker_DF.csv'
csv4 = 'ModerateCov_BC_Smoker_NonSmoker_DF.csv'
csv5 = 'SevereCov_BC_Smoker_NonSmoker_DF.csv'

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
    df2 = pd.read_csv(csv2)
    
    # Convert DataFrame to JSON
    json_data = df2.to_json(orient='records')

    return json_data

@app.route('/api/MildCov_BC_Smoker_NonSmoker_DF', methods=['GET'])
def get_data3():
    # Read CSV file using pandas
    df2 = pd.read_csv(csv3)
    
    # Convert DataFrame to JSON
    json_data = df2.to_json(orient='records')

    return json_data

@app.route('/api/ModerateCov_BC_Smoker_NonSmoker_DF', methods=['GET'])
def get_data4():
    # Read CSV file using pandas
    df2 = pd.read_csv(csv4)
    
    # Convert DataFrame to JSON
    json_data = df2.to_json(orient='records')

    return json_data

@app.route('/api/SevereCov_BC_Smoker_NonSmoker_DF', methods=['GET'])
def get_data5():
    # Read CSV file using pandas
    df2 = pd.read_csv(csv5)
    
    # Convert DataFrame to JSON
    json_data = df2.to_json(orient='records')

    return json_data

if __name__ == '__main__':
    app.run(debug=True)