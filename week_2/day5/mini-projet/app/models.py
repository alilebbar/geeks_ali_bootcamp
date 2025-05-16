from pydantic import BaseModel

class Person(BaseModel):
    first_name: str
    last_name: str
    
class Profile_person(BaseModel):
    person_id: int
    username: str