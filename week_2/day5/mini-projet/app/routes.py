from fastapi import APIRouter, HTTPException
from app.bd import get_connection
from psycopg2.extras import RealDictCursor
from app.models import Person, Profile_person
router = APIRouter()

@router.get("/person")
def person():
    try:
        conn=get_connection()
        curs = conn.cursor(cursor_factory=RealDictCursor)
        curs.execute("SELECT * FROM person")
        rows = curs.fetchall()
        for row in rows:
            print(row)
        curs.close()
        conn.close()
        return rows
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
@router.get("/profile")
def profile():
    try:
        conn=get_connection()
        curs = conn.cursor(cursor_factory=RealDictCursor)
        curs.execute("SELECT * FROM profile_person")
        rows = curs.fetchall()
        for row in rows:
            print(row)
        curs.close()
        conn.close()
        return rows
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/person/{person_id}")
def get_person(person_id: int):
    try:
        conn=get_connection()
        curs = conn.cursor(cursor_factory=RealDictCursor)
        curs.execute("SELECT * FROM person WHERE id = %s", (person_id,))
        row = curs.fetchone()
        if row is None:
            raise HTTPException(status_code=404, detail="Person not found")
        curs.close()
        conn.close()
        return row
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
@router.get("/profile/{profile_id}")
def get_profile(profile_id: int):
    try:
        conn=get_connection()
        curs = conn.cursor(cursor_factory=RealDictCursor)
        curs.execute("SELECT * FROM profile_person WHERE id = %s", (profile_id,))
        row = curs.fetchone()
        if row is None:
            raise HTTPException(status_code=404, detail="Profile not found")
        curs.close()
        conn.close()
        return row
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
@router.post("/person")
def create_person(person: Person):
    first_name = person.first_name
    last_name = person.last_name
    try:
        conn=get_connection()
        curs = conn.cursor()
        curs.execute("INSERT INTO person (first_name, last_name) VALUES (%s, %s)", (first_name, last_name))
        conn.commit()
        curs.close()
        conn.close()
        return {"message": "Person created successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
@router.post("/profile")
def create_profile(profile: Profile_person):
    person_id = profile.person_id
    username = profile.username
    try:
        conn=get_connection()
        curs = conn.cursor()
        curs.execute("INSERT INTO profile_person (person_id, username) VALUES (%s, %s)", (person_id, username))
        conn.commit()
        curs.close()
        conn.close()
        return {"message": "Profile created successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
@router.put("/person/{person_id}")
def update_person(person_id: int, person: Person):
    first_name = person.first_name
    last_name = person.last_name
    try:
        conn=get_connection()
        curs = conn.cursor()
        curs.execute("UPDATE person SET first_name = %s, last_name = %s WHERE id = %s", (first_name, last_name, person_id))
        conn.commit()
        curs.close()
        conn.close()
        return {"message": "Person updated successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
@router.put("/profile/{profile_id}")
def update_profile(profile_id: int, profile: Profile_person):
    person_id = profile.person_id
    username = profile.username
    try:
        conn=get_connection()
        curs = conn.cursor()
        curs.execute("UPDATE profile_person SET person_id = %s, username = %s WHERE id = %s", (person_id, username, profile_id))
        conn.commit()
        curs.close()
        conn.close()
        return {"message": "Profile updated successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
@router.delete("/person/{person_id}")
def delete_person(person_id: int):
    try:
        conn=get_connection()
        curs = conn.cursor()
        curs.execute("DELETE FROM person WHERE id = %s", (person_id,))
        conn.commit()
        curs.close()
        conn.close()
        return {"message": "Person deleted successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
@router.delete("/profile/{profile_id}")
def delete_profile(profile_id: int):
    try:
        conn=get_connection()
        curs = conn.cursor()
        curs.execute("DELETE FROM profile_person WHERE id = %s", (profile_id,))
        conn.commit()
        curs.close()
        conn.close()
        return {"message": "Profile deleted successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    