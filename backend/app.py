from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS
import os

app = Flask(__name__, static_folder='frontend/build', static_url_path='/ACM-W')
CORS(app)

# Serve React Frontend for all other routes
@app.route('/ACM-W/<path:path>')
def serve_react(path):
    return send_from_directory('frontend/build', path)

# Serve index.html for React routes
@app.route('/ACM-W/')
@app.route('/ACM-W/<path:path>')
def serve_index(path='index.html'):
    return send_from_directory('frontend/build', 'index.html')

if __name__ == '__main__':
    app.run(debug=True, port=5000)
