import json

# read data from JSON file  
with open('emprego-cientifico.json') as json_file:
    data = json.load(json_file)

print(len(data))