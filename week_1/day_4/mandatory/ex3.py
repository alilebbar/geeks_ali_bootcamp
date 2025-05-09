from ex2 import Dog
import random
class PetDog(Dog):
    def __init__(self, name, age, weight,trained = False):
        super().__init__(name, age, weight)
        self.trained = trained

    def train(self):
        self.trained = True
        self.bark()
    
    def play(self,*args):   
            print(f"{self.name} joue avec {', '.join([dog.name for dog in args])}.")
    def do_a_trick(self):
        tricks = ["fait une roulade", "se met debout sur ses pattes arrière", "te serre la patte", "fait le mort"]
        if self.trained:
            print(f"{self.name} {tricks[random.randint(0,len(tricks))]}.")

dog1 = PetDog("Boubi", 2, 30)
dog2 = PetDog("Rex", 5, 20)
dog3 = PetDog("Riki", 4, 25)
dog1.train()
dog1.play(dog2, dog3)
dog1.do_a_trick()