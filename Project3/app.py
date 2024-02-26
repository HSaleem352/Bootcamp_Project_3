# import csv
# import pandas as pd
# from flask import Flask, jsonify, render_template
# from flask_cors import CORS
# from pymongo import MongoClient
# from flask_pymongo import PyMongo




# app = Flask(__name__)

# # Configure MongoDB connection
# app.config['MONGO_URI'] = 'mongodb://localhost:27017/cancer1'
# mongo = PyMongo(app)

# # Load CSV data into MongoDB (Run this only once to import data)
# def import_csv_to_mongo():
#     with open('output.csv', 'r') as csvfile:
#         csvreader = csv.DictReader(csvfile)
#         mongo.db.cancer1.insert_many(csvreader)

# # Uncomment the line below and run once to import CSV data to MongoDB
# # import_csv_to_mongo()

# @app.route('/api/data', methods=['GET'])
# def get_data():
#     # Fetch data from MongoDB
#     data_from_mongo = list(mongo.db.cancer1.find({}, {'_id': 0}))

#     # Convert data to JSON
#     json_data = jsonify(data_from_mongo)

#     return json_data


# @app.route('/')
# def main():
#     return render_template("index.html")

# if __name__ == '__main__':
#     app.run(debug=True)



# # Reading the file
# Smoker_NonSmoker_BC_DF = pd.read_csv('output.csv')

# # Verify that the file is read correctly
# print(Smoker_NonSmoker_BC_DF.head())  # This will print the first few rows of the DataFrame to the console

# # Flask app
# app = Flask(__name__)
# # ...
# CORS(app)  # Enable CORS for all routes
# # ...
# CORS(app, resources={r"/about": {"origins": "*"}})



# # @app.route('/about', methods=['GET'])
# # def get_data():
# #     app.logger.debug('Request received at /about')
# #     return jsonify(Smoker_NonSmoker_BC_DF.to_dict(orient='records'))
# # from flask import jsonify

# @app.route('/about', methods=['GET'])
# def get_data():
#     try:
#         response_data = Smoker_NonSmoker_BC_DF.to_dict(orient='records')
#         return jsonify(response_data)
#     except Exception as e:
#         app.logger.error(f"Error in /about endpoint: {e}")
#         return jsonify({'error': 'Internal Server Error'}), 500


# if __name__ == '__main__':
#     app.run(debug=True)


from flask import Flask, jsonify, render_template
import pandas as pd
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
# Replace 'your_file.csv' with the actual path to your CSV file
csv_file_path = 'output.csv'

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