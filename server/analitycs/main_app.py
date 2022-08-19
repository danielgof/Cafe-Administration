import json
import db
import analytics
from flask import Flask, jsonify
from flask_cors import CORS


Database = db.Database
Analitycs = analytics.Analitycs

app = Flask(__name__)
CORS(app)


@app.route('/', methods=['GET', 'POST'])
def index():
    return "this works"


@app.route("/test", methods=['GET', 'POST'])
def test():
    data = [{    "dob": "Sun, 07 Feb 1999 00:00:00 GMT", "id": 1, "lastname": "123dz@gmail.com", "name": "Green", "phonenumber": "Danzel"}, {"dob": "Wed, 07 Feb 1996 00:00:00 GMT", "id": 2, "lastname": "jr@gmail.com", "name": "Book", "phonenumber": "Jared"}]
    return jsonify(data)


@app.route("/clients", methods = ['GET','POST'])
def get_clients():
    con = Database.connect()
    DBClients = Database.select(con)
    return jsonify(DBClients)


@app.route("/clients/avgage", methods = ['GET','POST'])
def avgAge():
    con = Database.connect()
    DBClients = Database.select(con)
    # return jsonify(DBClients)
    # print(jsonify(DBClients)[0])
    return Analitycs.avgAge(json.dumps(DBClients))



if __name__ == '__main__':
    app.run(port = 3444, debug = True)