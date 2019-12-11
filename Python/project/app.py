from flask import Flask
from models import db
from models import Station

app = Flask(__name__)

POSTGRES = {
    'user': 'postgres',
    'pw': '1234',
    'db': 'postgres',
    'host': 'localhost',
    'port': '5432',
}

app.config['DEBUG'] = True
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://%(user)s:\
%(pw)s@%(host)s:%(port)s/%(db)s' % POSTGRES
db.init_app(app)

@app.route("/")
def main():
    station = Station(id=2, lat=1.0, lng=1.0)
    db.session.add(station)
    db.session.commit()
    return 'Hello World !'

if __name__ == '__main__':
    app.run()
