import psycopg2
import os
from dotenv import load_dotenv

load_dotenv("C:/Users/pc/Desktop/Geeks_ali_bootcamp/week_2/day5/mini-projet/var.env")

def get_connection():
    return psycopg2.connect(
        dbname=os.environ.get("DB_NAME"),
        user=os.environ.get("DB_USER"),
        password=os.environ.get("DB_PASSWORD"),
        host=os.environ.get("DB_HOST"),
        port=os.environ.get("DB_PORT")
    )
