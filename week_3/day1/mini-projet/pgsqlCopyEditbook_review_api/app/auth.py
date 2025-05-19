from fastapi import HTTPException
from .models import User
from .dependencies import get_connection
from datetime import datetime, timedelta
from jose import JWTError, jwt
from dotenv import load_dotenv
import os
from fastapi.security import OAuth2PasswordRequestForm
from passlib.context import CryptContext
from .crud import get_user_by_username
from fastapi import Depends, APIRouter
router = APIRouter()
@router.post("/register")
def register_user(user: User):
    try:
        conn = get_connection()
        curs = conn.cursor()
        hashed_password = pwd_context.hash(user.password)
        curs.execute("INSERT INTO users (username, password) VALUES (%s, %s)", (user.username, hashed_password,))
        conn.commit()
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        curs.close()
        conn.close()


load_dotenv("C:/Users/pc/Desktop/Geeks_ali_bootcamp/week_3/day1/mini-projet/pgsqlCopyEditbook_review_api/app/var.env")
SECRET_KEY = os.environ.get("SECRET_KEY")
ALGORITHM = os.environ.get("ALGORITHM")
def create_access_token(data: dict, expires_delta: timedelta = None):
    
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta 
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
@router.post("/login")
def login(form_data: OAuth2PasswordRequestForm = Depends()):
    try:
        conn = get_connection()
        user = get_user_by_username(conn, form_data.username)
        if not user or not pwd_context.verify(form_data.password, user["password"]):
            raise HTTPException(status_code=401, detail="Identifiants invalides")

        access_token = create_access_token(data={"sub": user["username"]})
        return {"access_token": access_token, "token_type": "bearer"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        conn.close()


'''@router.post("/login")
def login_user(user: User):
    try:
        conn = get_connection()
        curs = conn.cursor()
        curs.execute("SELECT * FROM users WHERE username = %s AND password = %s", (user.username, user.password))
        result = curs.fetchone()
        if result:
            return {"message": "Login successful"}
        else:
            raise HTTPException(status_code=401, detail="Invalid credentials")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        curs.close()
        conn.close()'''