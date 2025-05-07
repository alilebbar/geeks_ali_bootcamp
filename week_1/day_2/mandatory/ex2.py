def cinema(**kwarg):
    c=0
    for a,b in kwarg.items():
        if b<12 and b>3:
            print(F"{a} va payer 10$")
            c+=10
        elif b>=12:
            print(F"{a} va payer 15$")
            c+=15
        else:
            print(F"{a} va entrer gratuitement")

    print("le totale que la famile va payer est : ",c)


#family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
family={}
mombreDeFamile= int(input("entrer le nombre de mombre de famile :  "))
for i in range(mombreDeFamile):
    nom=input("entrer le nom : ")
    age=int(input("entrer l'age : "))
    family[nom]=age


cinema(**family)