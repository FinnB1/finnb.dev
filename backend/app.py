from flask import Flask, request
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)

@app.route("/login", methods=['POST'])
@cross_origin()
def login():
    if request.get_json()['password'] == 'test':
        return 'OK', 200
    else:
        print(request.get_json()['password'])
        return 'Unauthorised', 401