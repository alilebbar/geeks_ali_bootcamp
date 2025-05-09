class Dog:
    def __init__(self,name, age, weight):
        self.name=name
        self.age=age
        self.weight=weight

    def bark(self):
        return F"{self.name} aboie"
    def run_speed(self):
        return self.weight/self.age*10
    def fight(self, other_dog):
        myDog= self.run_speed()*self.weight
        dog=other_dog.run_speed()*other_dog.weight
        if myDog>dog:
            return F"{self.name} est le gagnant"
        else: 
            return F"{other_dog.name} est le gagnant"


dog1=Dog("Boubi",2,30)
dog2=Dog("Rex",5,20)
dog3=Dog("Riki",4,25)
print(dog1.bark())
print(dog2.run_speed())
print(dog2.fight(dog3))