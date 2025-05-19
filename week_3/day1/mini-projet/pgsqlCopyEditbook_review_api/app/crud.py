from fastapi import APIRouter, HTTPException
from psycopg2.extras import RealDictCursor
from .database import get_connection
from .models import Book, BookReview, User
router = APIRouter()

@router.get("/books")
def get_books():
    try:
        conn = get_connection()
        curs = conn.cursor(cursor_factory=RealDictCursor)
        curs.execute("SELECT id,title,description FROM book")
        rows = curs.fetchall()
        for row in rows:
            print(f"book: {row['title']}, description: {row['description']}")
        curs.close()
        conn.close()
        return rows
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/reviews/{book_id}")
def get_reviews(book_id: int):
    try:
        conn = get_connection()
        curs = conn.cursor(cursor_factory=RealDictCursor)
        curs.execute("SELECT id,review FROM book_review WHERE book_id = %s", (book_id,))
        rows = curs.fetchall()
        for row in rows:
            print(f"review: {row['review']}")
        curs.close()
        conn.close()
        return rows
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

def get_user_by_username(conn, username: str):
    curs = conn.cursor()
    curs.execute("SELECT id, username, password FROM users WHERE username = %s", (username,))
    result = curs.fetchone()
    curs.close()
    if result:
        return {"id": result[0], "username": result[1], "password": result[2]}
    return None