

def plus_long(chaine):
    tupl_chaine = chaine.split()
    la_plus_long = max(tupl_chaine, key=len)
 
    print(la_plus_long)
   
lis_nontrier = ["without","hello","bag","world"]
list_trier=sorted(lis_nontrier)
print(list_trier)
chaine=input("entrer une chaine : ")
plus_long(chaine)