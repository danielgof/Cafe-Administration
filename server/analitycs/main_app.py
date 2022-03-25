from flask import Flask, jsonify
from req import Request


app = Flask(__name__)



@app.route("/clients", methods = ['GET','POST'])
def client_info():
    result = Request.get_data()
    return jsonify(result)


if __name__ == '__main__':
    app.run(debug=True)