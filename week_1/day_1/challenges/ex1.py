nombre = int(input("entrer un nombre :"))
long = int(input("entrer une longeur : "))
listprint=[]
for a in range(long):
    listprint.append((a+1)*nombre)

print(listprint)