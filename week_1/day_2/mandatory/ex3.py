# 1. Création du dictionnaire avec toutes les informations
brand = {
    "name": "zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": "blue",
        "Spain": "red",
        "US": ["pink", "green"]
    }
}

# 2. Changer le nombre de magasins à 2
brand["number_stores"] = 2
print(brand)

# 3. Utiliser 'type_of_clothes' pour imprimer une phrase sur les clients de Zara
print(F"Les clients de Zara sont les {brand['type_of_clothes'][0]}, les {brand['type_of_clothes'][1]}, les {brand['type_of_clothes'][2]} et {brand['type_of_clothes'][3]}")

# 4. Ajouter une clé 'country_creation' avec la valeur 'Spain'
brand["country_creation"] = "Spain"
print(brand)

# 5. Vérifier si 'international_competitors' est une clé et ajouter 'Desigual'
print(brand["international_competitors"])
brand["international_competitors"].append("Desigual")
print(brand["international_competitors"])

# 6. Supprimer la clé 'creation_date'
del brand['creation_date']
print(brand)

# 7. Afficher le dernier concurrent international
print(brand["international_competitors"][len(brand["international_competitors"]) - 1])

# 8. Afficher les couleurs principales aux US
print(brand["major_color"]["US"][0], brand["major_color"]["US"][1])

# 9. Afficher le nombre de paires clé-valeur dans le dictionnaire
longeurDeDic = len(list(brand))
print(longeurDeDic)

# 10. Afficher les clés du dictionnaire
for x, y in brand.items():
    print(x)

# 11. Créer un autre dictionnaire avec des infos supplémentaires
more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000
}

# 12. Ajouter les infos du deuxième dictionnaire dans le premier
brand.update(more_on_zara)

# 13. Afficher la nouvelle valeur de 'number_stores'
print(brand)
print(brand["number_stores"])
# ce que j'ai remarqué : après la mise à jour, la valeur de number_stores a été écrasée par la nouvelle valeur 10000
