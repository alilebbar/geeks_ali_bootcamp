import math
class Circle:
    def __init__(self,radius=1.0):
        self.raduis=radius

    def perimetre(self):
        perim=round(2*(math.pi)*self.raduis,2)
        print(perim)

    def aire(self):
        air=round((math.pi)*(self.raduis**2),2)
        print(air)

    def afficher(self):
        print(F"Un cercle est une figure plane dont tous les points sont à égale distance du centre.")

circle = Circle()
circle.aire()
circle.perimetre()
circle.afficher()