def get_full_name(first_name ,last_name,middle_name=None ):
    if middle_name!=None:
        full_name=first_name+" "+middle_name+" "+last_name
        capital=full_name.title()
        return capital
    else:
        full_name=first_name+" "+last_name
        capital=full_name.title()
        return capital
print(get_full_name("ali","Hocker","lebbar"))
print(get_full_name("ali",last_name="lebbar"))
