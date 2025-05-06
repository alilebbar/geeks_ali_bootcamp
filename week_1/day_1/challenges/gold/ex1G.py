from datetime import date

naissance=input("entrer votre date de naissance sous format DD/MM/YYYY : ")
aujourdhui = date.today()
dateAu=str(aujourdhui.strftime("%d/%m/%Y"))
listDate=naissance.split("/")
listDateAu=dateAu.split("/")
print(listDate)
print(listDateAu)
i=''
if listDateAu[0]==listDate[0] and listDateAu[1]==listDate[1]:
    age= int(listDateAu[2])-int(listDate[2])
    nbBouji=age%10
    sp=" "
    trai=(11-nbBouji)//2
    for p in range(nbBouji):
        i=str(i)+'i'
    print("   "+sp+trai*'_'+i+trai*'_'+sp)
    print("   |:H:a:p:p:y:|")    
    print(" __|___________|__")
    print("|^^^^^^^^^^^^^^^^^|")
    print("|:B:i:r:t:h:d:a:y:|")
    print("|                 |")
    print("~~~~~~~~~~~~~~~~~~~")

    if (int(listDate[2]) % 4 == 0 and int(listDate[2])  % 100 != 0) or (int(listDate[2])  % 400 == 0):
        print("   "+sp+trai*'_'+i+trai*'_'+sp)
    print("   |:H:a:p:p:y:|")    
    print(" __|___________|__")
    print("|^^^^^^^^^^^^^^^^^|")
    print("|:B:i:r:t:h:d:a:y:|")
    print("|                 |")
    print("~~~~~~~~~~~~~~~~~~~")
else:
    print("aujourduit n'est pas votre anniversaire")
    