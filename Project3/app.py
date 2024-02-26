from flask import Flask, render_template
import pandas as pd


app = Flask(__name__)

# Replace 'your_file.csv' with the actual path to your CSV file
csv_file_path = 'Smoker&BC_VS_Non-Smoker&BC.csv'

@app.route('/api/data', methods=['GET'])
def get_data():
    # Read CSV file using pandas
    df = pd.read_csv(csv_file_path)
    
    # Convert DataFrame to JSON
    json_data = df.to_json(orient='records')

    return json_data

@app.route('/')
def main():
    return render_template("index.html")

if __name__ == '__main__':
    app.run(debug=True)