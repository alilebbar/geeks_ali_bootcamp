from pydantic import BaseModel

class Book(BaseModel):
    title: str
    description: str
    user_id: int

class BookReview(BaseModel):
    review: str
    book_id: int
    user_id: int
    

class User(BaseModel):
    username: str
    password: str

    