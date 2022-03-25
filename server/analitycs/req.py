import requests

class Request:

    def get_data():
        result = requests.get('http://localhost:8080/api/v1/client')
        return result.json()

# result = requests.get('http://localhost:8080/api/v1/client')

# res = Request.get_data()
# print(res)