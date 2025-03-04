from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow frontend to access backend

@app.route('/api/data', methods=['GET'])
def get_data():
    return jsonify({}), 200  # Send an empty JSON instead of 204

if __name__ == '__main__':
    app.run(debug=True, port=5000)
