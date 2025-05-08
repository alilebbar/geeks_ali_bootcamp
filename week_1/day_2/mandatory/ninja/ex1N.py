chaine="Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"
listE=chaine.replace(" ","")
print(listE)
chaineList=listE.split(",")
print(chaineList)
print(F"il y a {len(chaineList)} constructeurs")
chaineListDecro=sorted(chaineList,reverse=True)
print(chaineListDecro)
conteur_o=0
conteur_n_i=0
for items in chaineListDecro:
        if "o" in items:
                conteur_o+=1
        if "i" not in items:
                conteur_n_i+=1


print("les constructeurs ont la lettre o dans leur nom est : ",conteur_o)
print("constructeurs n'ont pas la lettre i dans leur nom est : ",conteur_n_i)

carsList=["Honda", "Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]
carsListUnic=set(carsList)
print(",".join(carsListUnic))
print("le nombre de constructeur unique est : ",(len(carsList)-len(carsListUnic)))

constructeur = sorted(carsList)
constructeurI=[]
for i in constructeur:
        constructeurI.append(i[::-1])

print(constructeurI)
