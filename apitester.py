import requests

BASE = "http://127.0.0.1:5000/"

response1 = requests.get(BASE + "foresttype/veryLow/veryLow/veryLow/veryLow")
print(response1)
