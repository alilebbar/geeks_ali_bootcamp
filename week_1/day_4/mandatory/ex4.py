class Person:
    def __init__(self, name, age, last_name=""):
        self.name = name
        self.age = age
        self.last_name = last_name
  
    def is18(self):
        return self.age >= 18
    
class Family:
    def __init__(self,last_name, members=[]):
        self.last_name = last_name
        self.members = members
    
    def born(self,first_name, age):
        newMember= Person(first_name,age,"lebbar")
        self.members.append(newMember)
    
    def check_majority(self,first_name):
        for i in self.members:
            if i.name == first_name:
                if i.age>=18:
                    print("You are over 18, your parents Jane and John accept that you will go out with your friends")
                else:
                    print("Sorry, you are not allowed to go out with your friends.")
    
    def family_presentation(self):
                 print(F"la famille {self.last_name} est composée de :")
                 for i in self.members:
                     print(F"{i.name} {i.last_name} a {i.age} ans")

p1=Person("Jane", 45)
p2=Person("John", 50)
p3=Person("Jules", 20) 
fam=Family("Lebbar")
fam.born("Jules",20)    
fam.born("Lola",15)
fam.born("Lili",10)
fam.born("Lili",10)
fam.check_majority("Jules")
fam.family_presentation()




