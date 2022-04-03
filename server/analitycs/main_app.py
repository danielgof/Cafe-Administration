from flask import Flask, jsonify
from req import Request
from collections import OrderedDict

app = Flask(__name__)



@app.route("/clients", methods = ['GET','POST'])
def client_info():
    result = Request.get_data()
    new_dict = {item['name']:item for item in result}
    df = dict(OrderedDict([("clients", new_dict)]))
    return jsonify(df)



if __name__ == '__main__':
    app.run(debug=True)