def calcul(a,b):
    return(a+b,a-b)
c,d=calcul(3,2)
print(c)
print(d)

def addition(a, b, c):
    print("Résultat :", a + b + c)

# Instructions :
# 1. Crée une liste : [5, 10, 15]
# 2. Appelle la fonction `addition()` en utilisant * pour passer la liste
listAdd=[5,10,15]
addition(*listAdd)

def affiche_infos(nom, age, ville):
    print(f"{nom} a {age} ans et habite à {ville}")

# Instructions :
# 1. Crée un dictionnaire {'nom': 'Sarah', 'age': 25, 'ville': 'Paris'}
# 2. Appelle la fonction `affiche_infos()` avec **
dictionnaire = {"nom":"Sara","age": 25,"ville":"Paris","prenom":"bennani","sex":"femme"}
#affiche_infos(**dictionnaire)

    # Instructions : affiche la somme de tous les éléments
# Test :
# somme_variable(1, 2, 3, 4) → 10
# somme_variable(100, 200) → 300

def somme(*nombres):
    print(sum(nombres))

somme(100,200)

def afficheDictionnaire(**info):
    for a,b in info.items():
        print(a,b)

afficheDictionnaire(**dictionnaire)