from flask import Flask
from db import Database

app = Flask(__name__)



@app.route("/index", methods = ['GET', 'POST'])
def index():
    return "hello world!"

@app.route("/data", methods = ['GET'])
def get_data():
    
    Database.print_data()


app.run(debug=True)