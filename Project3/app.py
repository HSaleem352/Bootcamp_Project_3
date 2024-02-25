import pandas as pd
from flask import Flask, jsonify, render_template

# Reading the file
Smoker_NonSmoker_BC_DF = pd.read_csv('output.csv')

# Verify that the file is read correctly
print(Smoker_NonSmoker_BC_DF.head())  # This will print the first few rows of the DataFrame to the console

# Flask app
app = Flask(__name__)

@app.route('/')
def main():
    return render_template("index.html")

@app.route('/about')
def get_data():
    return jsonify(Smoker_NonSmoker_BC_DF.to_dict(orient='records'))

if __name__ == '__main__':
    app.run(debug=True)