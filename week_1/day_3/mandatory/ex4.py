class Zoo:
    def __init__(self,zoo_name):
        self.zoo_name=zoo_name
        self.animals=[]
        self.group={}
    
    def add_animal(self,new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)
    
    def get_animals(self):
        print("voici les animeaux de notre zoo :")
        for item in self.animals:
           print(item)

    def sell_animal(self,animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
    
    def sort_animals(self):
       self.animals.sort()
       group={}
       for item in self.animals:
          if item[0] in group:
             group[item[0]].append(item)
          else:
             group[item[0]] = [item]
       self.group=group
    
    def get_groups(self):
       for key, animals in self.group.items():
             print(f"{key}: {animals}")

             

zooAli=Zoo("zooAli")
anim=["Baboon","Zebra","Lion","Giraffe","Cougar","Bear","Cat"]
for item in anim:
   zooAli.add_animal(item)
zooAli.sort_animals()
zooAli.get_animals()
zooAli.get_groups()