paragraphe = "Programming is the process of creating a set of instructions that tell a computer how to perform a task. It can be done using various programming languages, such as Python, Java, or C++. Good programming involves writing code that is not only functional but also readable, efficient, and maintainable. As technology advances, programming continues to play a vital role in shaping our digital world."
print("nombre de carractaires :")
print(len(paragraphe))
nombreDePhrase=0
for c in paragraphe:
    if(c=="."):
        nombreDePhrase+=1
print("nombre de phrases :")
print(nombreDePhrase)

nombreDeMots=0
for c in paragraphe:
    if(c==" "):
        nombreDeMots+=1
print("nombre de mots :")
print(nombreDeMots)

mots=paragraphe.replace(".", "").replace(",", "").lower()
mots=mots.split()
listmots=set(mots)
nombreDeMotUnique=len(listmots)
print("nombre de mots unique :")
print(nombreDeMotUnique)

paragrapheSansEspaces = paragraphe.replace(" ", "")
nombreDeCaractaire = len(paragrapheSansEspaces)
print("nombre de carractaires sans espace :")
print(nombreDeCaractaire)

print("nombre moyen de mots dans phrase :")
print(nombreDeMots/nombreDePhrase)

print("nombre de mots non unique :")
print(nombreDeMots-nombreDeMotUnique)

