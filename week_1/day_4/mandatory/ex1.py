class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} se promène tranquillement'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'
    
class Siamese(Cat):
    def __init__(self,name,age,couleur):
        super().__init__(name,age)
        self.couleur=couleur

    def afficheCat(self):
        print(F"le chat s'appelle {self.name} et elle a {self.age} ans sa couleur dominante est {self.couleur}")


all_cats=[Bengal('kiki',2), Chartreux("mimi",4), Siamese("Lolo",4,"noire")]
sara_pets = Pets(all_cats)
sara_pets.walk()
