birthdays={}
birthdays["ali"]="1994/10/01"
birthdays["sara"]="1995/10/01"
birthdays["ahmed"]="1996/10/01"
birthdays["mohamed"]="1997/10/01"
birthdays["sami"]="1998/10/01"
print("Bienvenue ! Tu peux consulter les dates d’anniversaire de certaines personnes !")
prenom=input("saisi un prenom : ")
if prenom in birthdays:
    print(F"l'anniversaire de {prenom} est {birthdays[prenom]} ")
else:
    print("le prenom que vous avez entrer est introuvable !")