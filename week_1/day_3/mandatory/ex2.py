class Dog:
    def __init__(self,name,height):
        self.name=name
        self.height=height

    def affichage(self):
        print(F"le nom de chien est {self.name} et sa taille est {self.height} cm")
    
    def bark(self):
        print( F"{self.name} aboie !")

    def jump(self):
        print(F"{self.name} saute à {self.height*2} cm de hauteur !")
    

david_dog=Dog("boubi",25)
sarah_dog=Dog("rex",15)

david_dog.affichage()
david_dog.bark()
david_dog.jump()
print("-------------------")
sarah_dog.affichage()
sarah_dog.bark()
sarah_dog.jump()

if david_dog.height>sarah_dog.height:
    print("le chien le plus grand est ",david_dog.name)
else:
    print("le chien le plus grand est ",sarah_dog.name)