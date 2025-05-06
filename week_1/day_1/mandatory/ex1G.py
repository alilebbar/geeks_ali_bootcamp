mois=[{"moisN":"12","moisV":"l'hiver"},{"moisN":"1","moisV":"l'hiver"},{"moisN":"2","moisV":"l'hiver"},{"moisN":"3","moisV":"printemps"},{"moisN":"4","moisV":"printemps"},{"moisN":"5","moisV":"printemps"},{"moisN":"6","moisV":"l'été"},{"moisN":"7","moisV":"l'été"},{"moisN":"8","moisV":"l'été"},{"moisN":"9","moisV":"l'automne"},{"moisN":"10","moisV":"l'automne"},{"moisN":"11","moisV":"l'automne"}]
moisEntrer=str(input("entrer le mois :"))

for m in mois:
    if m["moisN"] == moisEntrer:
        print(m["moisV"])
        break
else:
    print("Mois non reconnu.")
