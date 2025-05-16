from fastapi import FastAPI
from app.routes import router

app = FastAPI()

app.include_router(router)
@app.get("/")
def read_root():
    return {"message": "Bienvenue sur mon API"}

# Exécuter avec uvicorn uniquement si ce fichier est lancé directement
if __name__ == "__main__":
     import uvicorn
     uvicorn.run("run:app", host="127.0.0.1", port=8000, reload=True)
    