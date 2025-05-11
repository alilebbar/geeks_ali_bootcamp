import os
import time
import random
class Cellul :
    def __init__(self,vivante):
        self.vivante=vivante

class Grille : 
    def __init__(self,longeur):
        self.longeur=longeur
        self.grille=self.rempile_grille()

    def rempile_grille(self):
        grille = []
        for i in range(self.longeur):
            ligne = []
            for j in range(self.longeur):
                  cellule_vie = random.choice([True,False])
                  ligne.append(Cellul(cellule_vie))
            grille.append(ligne)
        return grille

    def afficher_grille(self):
        etat=0
        for i in range(self.longeur):
            for j in range(self.longeur):
                if self.grille[i][j].vivante==True:
                    etat=1
                    print(etat, end=" ")    
                else:
                    etat=0
                    print(etat, end=" ")    
            print("")
    
    def voisin_vivant(self, x, y):
     c = 0
     for i in range(x - 1, x + 2):
        for j in range(y - 1, y + 2):
            if (i == x and j == y) or i < 0 or j < 0 or i >= self.longeur or j >= self.longeur:
                continue  # on ignore la cellule elle-même et les cases hors de la grille
            if self.grille[i][j].vivante:
                c += 1
     return c

    def prochaine_generation(self):
        grille = []
        for i in range(self.longeur):
            ligne = []
            for j in range(self.longeur):
                voisins = self.voisin_vivant(i, j)
                vivante = self.grille[i][j].vivante  # État actuel

                if vivante:
                    # Règles pour une cellule vivante
                    if voisins == 2 or voisins == 3:
                        nouvelle_vie = True
                    else:
                        nouvelle_vie = False
                else:
                    # Règle pour une cellule morte
                    if voisins == 3:
                        nouvelle_vie = True
                    else:
                        nouvelle_vie = False

                ligne.append(Cellul(nouvelle_vie))
            grille.append(ligne)
        self.grille = grille

def main():
    limite=int(input("Entrer Nombre de population a tester : "))
    generation=int(input("entrer combient de de generation : "))
    g=Grille(limite)
    g.afficher_grille()
    time.sleep(1)
    os.system("cls")
    for i in range(generation):
      g.prochaine_generation()
      g.afficher_grille()
      time.sleep(1)
      os.system("cls")

main()