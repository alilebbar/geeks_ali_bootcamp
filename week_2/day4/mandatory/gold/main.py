from getpass import getpass
from psycopg2 import connect, sql
from psycopg2.extras import RealDictCursor
import os


def get_db_connection():
    conn = connect(
        dbname='mini_projet',
        user='postgres',
        password='admin',
        host='localhost',
        port='5433'
    )
    return conn


users = {}
logged_in = None


def login():
   global logged_in
    
   try: 
    username = input("Enter your username: ")
    password = getpass("Enter your password: ")
    conn = get_db_connection()
    cur=conn.cursor(cursor_factory=RealDictCursor)
    cur.execute("SELECT user_name,password FROM user_profil WHERE user_name = %s and password = %s", (username,password,))
    result = cur.fetchone()
    print(result)
    if result is None:
         print("❌ User not found.")
    elif  result['password'] == password:
            logged_in = username
            print(f"✅ Welcome, {logged_in}!")
    else:
            print("❌ Incorrect password.")

   except Exception as e:
        print(f"❌ Error: {e}")
   finally:
        cur.close()
        conn.close()

def signup():
    try:
        conn = get_db_connection()
        cur = conn.cursor()

        while True:
            username = input("Choose a username: ")

            cur.execute("SELECT 1 FROM user_profil WHERE user_name = %s", (username,))
            if cur.fetchone():
                print("❌ Username already exists. Try another one.")
            else:
                break

        password = getpass("Choose a password: ")

        cur.execute(
            "INSERT INTO user_profil (user_name, password) VALUES (%s, %s)",
            (username, password)
        )
        conn.commit()

        print(f"✅ User {username} registered successfully.")

    except Exception as e:
        print(f"❌ Error during signup: {e}")

    finally:
        if conn:
            cur.close()
            conn.close()

def delete_account():
    global logged_in
    if logged_in is None:
        print("⚠️ Please log in first.")
        return
    try:
        conn = get_db_connection()
        cur = conn.cursor()
        cur.execute("DELETE FROM user_profil WHERE user_name = %s", (logged_in,))
        conn.commit()

        print(f"✅ User {logged_in} deleted successfully.")
        logged_in = None
    except Exception as e:
        print(f"❌ Error during account deletion: {e}")
    finally:
            cur.close()
            conn.close()

def show_users():
    if logged_in:
      try:
         print("📋 User List:")
         conn= get_db_connection()
         cur=conn.cursor(cursor_factory=RealDictCursor)
         cur.execute("SELECT user_name FROM user_profil")
         rows = cur.fetchall()
         for row in rows:
            print(row['user_name'])
      except Exception as e:
         print(f"❌ Error: {e}")
      finally:
         cur.close()
         conn.close()   
    else:
        print("⚠️ You must be logged in to view users.")

def main():
    while True:
        print("\n------ Menu ------")
        print("1 - Login")
        print("2 - Signup")
        print("3 - Delete Account")
        print("4 - Show Users")
        print("5 - Exit")

        try:
            choice = int(input("Enter your choice: "))
        except ValueError:
            print("❌ Invalid input.")
            continue

        if choice == 1:
            login()
        elif choice == 2:
            signup()
        elif choice == 3:
            delete_account()
        elif choice == 4:
            show_users()
        elif choice == 5:
            print("👋 Goodbye!")
            break
        else:
            print("❌ Invalid option.")

main()
