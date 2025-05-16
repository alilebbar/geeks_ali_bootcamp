import psycopg2
import requests
import random

conn = psycopg2.connect(
    dbname='countries_db',
    user='postgres',
    password='admin',
    host='localhost',
    port='5433'
)
cursor = conn.cursor()



url = "https://restcountries.com/v3.1/all"
response = requests.get(url)
countries = response.json()
random_countries = random.sample(countries, 10)

for country in random_countries:
    name = country.get('name', {}).get('common', 'Unknown')
    capital = country.get('capital', ['Unknown'])[0]
    flag = country.get('flags', {}).get('png', '')
    subregion = country.get('subregion', 'Unknown')
    population = country.get('population', 0)

    cursor.execute("""
        INSERT INTO countries (name, capital, flag, subregion, population)
        VALUES (%s, %s, %s, %s, %s)
    """, (name, capital, flag, subregion, population))

conn.commit()
cursor.close()
conn.close()

