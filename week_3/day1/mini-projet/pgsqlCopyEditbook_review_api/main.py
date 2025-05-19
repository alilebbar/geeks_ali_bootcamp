from fastapi import FastAPI
from app.crud import router as crud_router
from app.auth import router as auth_router
from app.database import create_tables
from fastapi import Depends
from app.dependencies import get_current_user

app = FastAPI()

app.include_router(crud_router)
app.include_router(auth_router)


@app.on_event("startup")
def on_startup():
    create_tables()

@app.get("/")
def read_root():
    return {"message": "Bienvenue sur mon API"}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)