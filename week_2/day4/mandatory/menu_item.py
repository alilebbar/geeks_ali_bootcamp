import psycopg2
import os
from dotenv import load_dotenv

class MenuItem:
    def __init__(self, name, price=0):
        self.name = name
        self.price = price

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

    def save(self):
        try:
            connection = self.get_connection()
            cursor = connection.cursor()
            query = "INSERT INTO Menu_Items (item_name, item_price) VALUES (%s, %s)"
            cursor.execute(query, (self.name, self.price))
            connection.commit()
            print(f"{self.name} ajouté avec succès.")
        except Exception as e:
            print("Erreur lors de l'ajout :", e)
        finally:
            cursor.close()
            connection.close()

    def delete(self):
        try:
            connection = self.get_connection()
            cursor = connection.cursor()
            query = "DELETE FROM Menu_Items WHERE item_name = %s"
            cursor.execute(query, (self.name,))
            connection.commit()
            print(f"{self.name} supprimé avec succès.")
        except Exception as e:
            print("Erreur lors de la suppression :", e)
        finally:
            cursor.close()
            connection.close()

    def update(self, new_name, new_price):
        try:
            connection = self.get_connection()
            cursor = connection.cursor()
            query = "UPDATE Menu_Items SET item_name = %s, item_price = %s WHERE item_name = %s"
            cursor.execute(query, (new_name, new_price, self.name))
            connection.commit()
            print(f"{self.name} mis à jour en {new_name}, {new_price}")
            self.name = new_name
            self.price = new_price
        except Exception as e:
            print("Erreur lors de la mise à jour :", e)
        finally:
            cursor.close()
            connection.close()
