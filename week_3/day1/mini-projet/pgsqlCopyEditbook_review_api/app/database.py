from .dependencies import get_connection
import psycopg2
def create_tables():
    conn=get_connection()
    curs = conn.cursor()
    curs.execute("""
        CREATE table IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) NOT NULL UNIQUE,
        password BYTEA NOT NULL,
        is_admin BOOLEAN DEFAULT FALSE
     );
        CREATE table if NOT EXISTS book (
        id SERIAL PRIMARY KEY,
        title VARCHAR(100) NOT NULL,
        DESCRIPTION TEXT,
        user_id INT NOT NULL,         
        FOREIGN KEY (user_id) REFERENCES users(id) 
       );
        CREATE table IF NOT EXISTS book_review (
         id SERIAL PRIMARY KEY,
         book_id INT NOT NULL,
         user_id INT NOT NULL,
         review TEXT,
         FOREIGN KEY (book_id) REFERENCES book(id) ON DELETE CASCADE ON UPDATE CASCADE,
         FOREIGN KEY (user_id) REFERENCES users(id) on DELETE CASCADE ON UPDATE CASCADE
);         
    """)
    conn.commit()
    curs.close()
    conn.close()
