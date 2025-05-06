import random
nombreEntrer=input("entrer un nombre de 1 a 9 (entrer ex pour sortire):")
nombreAliatoire=random.randint(1,9)

while nombreEntrer!="ex":
     if(nombreAliatoire!=int(nombreEntrer)):
      print("tantez ta chance pour la prochaine fois : ")
      nombreEntrer=input("entrer un nombre de 1 a 9 :")
     else:
      print("vous avez gagner !")
      nombreEntrer=input("entrer un nombre de 1 a 9 :")
      nombreAliatoire=random.randint(1,9)

     


   
    