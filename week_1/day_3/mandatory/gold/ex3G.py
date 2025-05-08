class MenuManager:
    def __init__(self,menu):
        self.menu=menu
        print(self.menu)

    def add_item(self,name, price, spice, gluten):
        self.menu.append({'name': name, 'price': price, 'spice_level': spice, 'gluten': gluten})
        print(self.menu)

    def update_item(self, name, price, spice, gluten):
     found = False
     for item in self.menu:
        if item["name"] == name:
            item.update({'price': price, 'spice_level': spice, 'gluten': gluten})
            found = True
            break
     if found:
        print("Plat mis à jour :", self.menu)
     else:
        print("Plat non trouvé dans le menu.")


    def  remove_item(self,name):
        for i in self.menu:
            if(i["name"]==name):
                self.menu.remove(i)
        print(self.menu)
    



c=[{'name': 'Soupe', 'price': 10, 'spice_level': 'B', 'gluten': False},
   {'name': 'Hamburger ', 'price': 15, 'spice_level': 'A', 'gluten': True,},
   {'name': 'Salade', 'price': 18, 'spice_level': 'A', 'gluten': False},
   {'name': 'French Fries', 'price': 5, 'spice_level': 'c', 'gluten': False},
   {'name': 'Beef bourguignon', 'price': 25, 'spice_level': 'B', 'gluten': True}
   ]


menu1=MenuManager(c)
menu1.add_item(name="Rfissa",price=50,spice="B",gluten=True)
menu1.update_item(name="Rfissa",price=25,spice="B",gluten=True)
menu1.remove_item(name="Rfissa")