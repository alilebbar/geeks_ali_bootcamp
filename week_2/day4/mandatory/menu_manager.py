import os
from dotenv import load_dotenv
import psycopg2
class MenuManager:
    def __init__(self):

        pass
    def get_connection(self):
        load_dotenv("var.env")
        connection=psycopg2.connect(
        dbname=os.environ.get("DB_NAME"),
        user=os.environ.get("DB_USER"),
        password=os.environ.get("DB_PASSWORD"),
        host=os.environ.get("DB_HOST"),
        port=os.environ.get("DB_PORT")
        )
        return connection
    def get_by_name(self,name):
        try:
             connection = self.get_connection()
             curser = connection.cursor()
             query="SELECT item_name,item_price FROM menu_items WHERE item_name = %s "
             curser.execute(query,(name,))
             result=curser.fetchall()
             for i in result:
              print(f"- {i[0]} | prix est : {i[1]} " )
        except Exception as e:
             print("erreur leur d'affichage", e)  
    
    def get_all(self):

        try:
             connection = self.get_connection()
             curser = connection.cursor()
             query="SELECT item_name,item_price FROM menu_items"
             curser.execute(query)
             result=curser.fetchall()
             print("le menu du restaurant est : ")
             for i in result:
              print(f"- {i[0]} | prix est : {i[1]} " )
        except Exception as e:
             print("erreur leur d'affichage", e)  
