from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/run', methods=['POST'])
def run_code():
    data = request.json
    code = data.get("code", "")
    stdin = data.get("input", "")

    response = requests.post("https://api.jdoodle.com/v1/execute", json={
        "script": code,
        "language": "cpp17",
        "versionIndex": "1",
        "stdin": stdin,
        "clientId": "39fd05745402d3d38052136886583b0f",
        "clientSecret": "530d297770a35a171dcaac51b1bb4d8bf968df2cd699731c6b615d16376effe4"
    })

    return jsonify(response.json())

if __name__ == "__main__":
    app.run(debug=True)
