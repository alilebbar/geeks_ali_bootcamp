import random
def jouer(nombre):
    n=random.randint(1,100)
    if(n==nombre):
        print("vous avez gagner !")
    else:
        print(F"vous avez perdut! car votre nombre est {nombre} et le nombre rechercher est {n}")

nombre=input("entrer un nombre entre 1 et 100 : ")
jouer(nombre)