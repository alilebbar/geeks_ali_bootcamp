import random
def get_random_temp(season):
    if season=="hiver":
        temperature=random.randint(-10,16)
    elif season=="printemps":
        temperature=random.randint(5,23)
    elif season=="été":
        temperature=random.randint(20,40)
    elif season=="automne":
        temperature=random.randint(10,25)

    return(temperature)

def main():
    season=input("entrer la season (automne,été,printemps,hiver) : ")
    temperature=get_random_temp(season)
    print(F"Il fait actuellement {temperature} degrés Celsius.")

    if(temperature<0):
        print("Brrr, il fait très froid ! Mets plusieurs couches aujourd’hui.")
    elif(temperature>=0 and temperature<16):
        print("Il fait un peu frais ! N’oublie pas ton manteau.")
    elif(temperature>=16 and temperature<=23):
        print("Température agréable ! Une petite veste devrait suffire.")
    elif(temperature>=24 and temperature<32):
        print("Il fait chaud aujourd’hui ! Pense à bien t’hydrater.")
    else:
        print("Canicule ! Reste à l’ombre et bois beaucoup d’eau.")
  
main()