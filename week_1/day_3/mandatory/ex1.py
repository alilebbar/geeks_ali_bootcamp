class Cat:
    def __init__(self,name_cat,age_cat):
        self.name=name_cat
        self.age=age_cat
    
    def afficheCat(self):
        print(F"Votre chat s'appelle {self.name} et elle a comme age {self.age} annee")



def comparerAg(cat1,cat2,cat3):
    cat=cat1
    if(cat2.age>cat1.age and cat2.age>cat3.age):
        cat=cat2
    elif(cat3.age>cat1.age and cat3.age>cat2.age):
        cat=cat3
    return cat



cat1 = Cat("chouchou",10)
cat2 = Cat("nounou",7)
cat3 = Cat("rosa",5)
cat1.afficheCat()
cat2.afficheCat()
cat3.afficheCat()
cat=comparerAg(cat1,cat2,cat3)
print(F"Le chat le plus âgé est {cat.name}, il a {cat.age} ans.")