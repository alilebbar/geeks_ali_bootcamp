
'''DB_NAME=restaurant
DB_USER=postgres
DB_PASSWORD=admin
DB_HOST=localhost
DB_PORT=5433
# This script is used to manage a restaurant menu using a PostgreSQL database.
# It allows you to add, delete, update, and view menu items.
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
# This script is used to manage a restaurant menu using a PostgreSQL database.
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


#
def show_user_menu():
    print("          Menu           ")
    print("presse le numero de chaque element pour choisire : ")
    print("1 - Voir un élément")
    print("2 - Ajouter un élément")
    print("3 - Supprimer un élément")
    print("4 - Mettre à jour un élément")
    print("5 - Afficher le menu du restaurant")
    print("6 - Quitter le menu")

    choix = input("Entrez votre choix : ")
    return choix

from menu_item import MenuItem
from menu_manager import MenuManager
from menu_editor import show_user_menu


choix=int(show_user_menu())
i=0
while i!=1: 
 match choix:
    case 1:
        name=input("entrez le nom de l'element que vous voulez afficher : ")
        item.get_by_name(name)
        choix=int(show_user_menu())
    case 2:
        name=input("entrez le nom de l'element que vous voulez ajouter : ")
        price=int(input("entrez le prix de l'element que vous voulez ajouter : "))
        new_item=MenuItem(name,price)
        new_item.save()
        choix=int(show_user_menu())
    case 3:
        name=input("entrez le nom de l'element que vous voulez supprimer : ")
        item=MenuItem(name)
        item.delete()
        choix=int(show_user_menu())
    case 4:
        name=input("entrez le nom de l'element que vous voulez mettre à jour : ")
        new_name=input("entrez le nouveau nom de l'element que vous voulez mettre à jour : ")
        new_price=int(input("entrez le nouveau prix de l'element que vous voulez mettre à jour : "))
        item=MenuItem(name)
        item.update(new_name,new_price)
        choix=int(show_user_menu())
    case 5:
        item=MenuManager()
        item.get_all()
        choix=int(show_user_menu())
    case 6:
        print("au revoir")
        i=1
    case _:
        print("choix invalide")
        choix=int(show_user_menu())
'''
