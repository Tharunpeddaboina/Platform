from flask import Flask, jsonify, request
from flask_cors import CORS  # Import the CORS module
from pymongo import MongoClient
from bson import ObjectId

app = Flask(__name__)

# Enable CORS for all routes
CORS(app)

# MongoDB connection setup
client = MongoClient('mongodb://localhost:27017/')
db = client['recipes']
collection = db['data']

def convert_objectid_to_str(data):
    """Convert ObjectId fields in a dictionary to strings."""
    if isinstance(data, list):
        return [convert_objectid_to_str(item) for item in data]
    elif isinstance(data, dict):
        return {k: (str(v) if isinstance(v, ObjectId) else convert_objectid_to_str(v)) for k, v in data.items()}
    return data

@app.route('/search', methods=['GET'])
def search():
    query = request.args.get('query')
    if not query:
        return jsonify({'error': 'No query provided'}), 400
    
    print(f"Searching for: {query}")

    results = collection.find({"title": {"$regex": query, "$options": "i"}}).limit(15)
    results_list = [recipe for recipe in results]

    # Convert ObjectId to string
    results_list = convert_objectid_to_str(results_list)

    print(f"Results found: {results_list}")

    return jsonify(results_list), 200

if __name__ == '__main__':
    app.run(debug=True)
