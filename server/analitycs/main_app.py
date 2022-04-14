import db
from flask import Flask, jsonify


Database = db.Database

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    return "this works"


@app.route("/clients", methods = ['GET','POST'])
def get_clients():
    con = Database.connect()
    DBComments = Database.select(con)
    return jsonify({"clients": DBComments})



if __name__ == '__main__':
    app.run(port = 3444, debug = True)