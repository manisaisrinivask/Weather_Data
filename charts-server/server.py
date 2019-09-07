from flask import Flask
from flask_cors import CORS
from flask_restful import Resource, Api
from flask_jsonpify import jsonify
import psycopg2
import postgresDb 

app = Flask(__name__)
api = Api(app)

CORS(app)

@app.route("/")
def hello():
    return jsonify({'text':'Working'})

class DeathRates(Resource):
    def __init__(self):
        self.records = postgresDb.connect()
    
    def get(self):
        try:
            years, race, sex, avg_life_expectancy = ([] for i in range(4))
            for record in self.records:
                years.append(record[0])
                race.append(record[1])
                sex.append(record[2])
                avg_life_expectancy.append(record[3])
            return jsonify({'year': years, 'race': race, 'sex': sex, 'avg_life_expectancy': avg_life_expectancy})
        
        except (Exception, psycopg2.Error) as error :
            return jsonify({'error': error})

api.add_resource(DeathRates, '/deathrates')


if __name__ == '__main__':
   app.run(port=5002)
   