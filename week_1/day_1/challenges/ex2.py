chaine = input(" entrer une chain de caractaire : ")
nouvChaine=""
for c in chaine :
    if c not in nouvChaine:
        nouvChaine+=c

print(nouvChaine)     
