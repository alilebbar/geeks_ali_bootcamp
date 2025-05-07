class Farm:
    def __init__(self,farm_name):
        self.name=farm_name
        self.animals={}

    def add_animal(self,animal_type,count=1):
        if animal_type in self.animals:
            self.animals[animal_type]+=count
        else:
            self.animals[animal_type]=count    
    
    def get_info(self):
        print(self.name)
        for key,v in self.animals.items():
            print(F"{key} : {v}")
        print("E-I-E-I-0!")

    def get_animal_types(self):
        type_animeaux=[]
        for key,v in self.animals.items():
            type_animeaux.append(key)
        type_animeaux=sorted(type_animeaux)
        return type_animeaux
    
    def get_short_info(self):
     types = self.get_animal_types()
     animaux_formattés = []

     for animal in types:
        count = self.animals[animal]
        if count > 1:
            animaux_formattés.append(animal + 's')
        else:
            animaux_formattés.append(animal)

     if len(animaux_formattés) > 1:
        animaux_str = ', '.join(animaux_formattés[:-1]) + ' and ' + animaux_formattés[-1]
     else:
        animaux_str = animaux_formattés[0]

     print (f"{self.name}'s farm has {animaux_str}.")


ferme=Farm("la ferme de ali")
ferme.add_animal("moutton",40)
ferme.add_animal("vache",20)
ferme.add_animal("lapin",50)
ferme.add_animal("poulet",400)
ferme.add_animal("moutton")
ferme.get_info()
ferme.get_short_info()