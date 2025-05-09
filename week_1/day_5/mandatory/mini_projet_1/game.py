import random
class Game:
    resulta_List=[]
    def __init__(self):
        pass

    def get_user_item(self):
        choix_utilisateur=input("Entrer votre choix rock/paper/scissors : ")
        while(choix_utilisateur!="rock" and choix_utilisateur!="paper" and choix_utilisateur!="scissors"):
            choix_utilisateur=input("Entrer votre choix rock/paper/scissors : ")
            
        return choix_utilisateur
        

    def get_computer_item(self):
        RPS_List=["rock","paper","scissors"]
        return random.choice(RPS_List)
    
    def get_game_result(self, user_item, computer_item):
        resultat=""
        
        if ((user_item=="paper" and computer_item=="rock") or (user_item=="rock" and computer_item=="scissors") or (user_item=="scissors" and computer_item=="paper") ):
            resultat="win"
        elif user_item==computer_item:
            resultat="draw"
        else:
            resultat="loss"
        
        return resultat

        

    def play(self):
        choix_utilisateur = self.get_user_item()
        choix_ordinateur = self.get_computer_item()
        resultat = self.get_game_result(choix_utilisateur,choix_ordinateur)
        if resultat == "win":
            print(F"You selected {choix_utilisateur}. The computer selected {choix_ordinateur}. You Win")
        elif resultat == "draw":
            print(F"You selected {choix_utilisateur}. The computer selected {choix_ordinateur}. You drew!")
        else:
            print(F"You selected {choix_utilisateur}. The computer selected {choix_ordinateur}. You loss")

        return resultat

