names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']
index=0
nameEntrer=input("entrer le nom : ")
for name in names:
    if name == nameEntrer:
        print(index)
        break
    index+=1

else :
    print("nom non trouvé !")