from game import Game
def get_user_menu_choice():
    choix = input("Veuillez choisir une option :\n1. Jouer une nouvelle partie\n2. Afficher les scores\n3. Quitter\n> ").strip()
    if choix in ["1", "2", "3"]:
        return choix
    raise ValueError("Choix invalide")

def print_results(results):
    for key,value in results.items():
        print(f"{key} : {value}")

def main():
    results = {"win": 0, "loss": 0, "draw": 0}
    
    while True:
        choixUtilisateur = get_user_menu_choice()
        
        if choixUtilisateur == "1":
            game = Game()
            resultat = game.play()
            results[resultat] += 1

        elif choixUtilisateur == "2":
            print_results(results)

        elif choixUtilisateur.lower() in ["3", "q", "x"]:
            print_results(results)
            break

        else:
            print("Choix invalide. Veuillez réessayer.")


main()