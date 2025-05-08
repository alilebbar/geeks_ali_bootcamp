import random
class MyList:
    def __init__(self,li):
        self.li=li

    def inversLi(self):
        self.li.reverse()
        return self.li
    def trieLi(self):
        liTrier=sorted(self.li)
        return liTrier
    def aliatoirLi(self):
        liAliatoire = []
        for i in range(len(self.li)):
            liAliatoire.append(random.randint(1,9))
        return liAliatoire

li=["a","c","l","z","g"]
my=MyList(li)
print(my.li)
print(my.inversLi())
print(my.trieLi())
print(my.aliatoirLi())



    