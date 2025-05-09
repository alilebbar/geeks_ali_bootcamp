import math
import turtle 

class Cercle :
    def __init__(self,rayon=None,diametre=None):
        if rayon:
            self.rayon=rayon
        else:
            self.rayon=diametre/2
    
    def air(self):
        a=round(math.pi*(self.rayon**2),3)
        return a

    def __str__(self):
        return f"le rayon de cercle {self.rayon}, sont diametre {self.rayon*2} et le air est {self.air()}"
    
    def __add__(self, other):
        return (self.rayon + other.rayon)

    def  __gt__(self, other):
        return self.rayon > other.rayon

    
    def __eq__(self, other):
        return self.rayon == other.rayon
    

list_cercle = [Cercle(2), Cercle(4), Cercle(3), Cercle(5), Cercle(6)]
listTri = sorted(list_cercle)
for i in listTri:
    turtle.circle(i.rayon*10)

cercle = Cercle(2)
cercle2 = Cercle(3)
print(cercle.air())
print(cercle.__add__(cercle2))
print(cercle.__gt__(cercle2))
print(cercle.__eq__(cercle2)) 
    
