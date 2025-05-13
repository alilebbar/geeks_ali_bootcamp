
import os
def display_board(M):
    os.system('cls')
    print("  TIC TAC TOE")
    print("*****************")
    print(f"* {M[0][0]}  |  {M[0][1]}  |  {M[0][2]} *")
    print("*----|-----|----*")
    print(f"* {M[1][0]}  |  {M[1][1]}  |  {M[1][2]} *")
    print("*----|-----|----*")
    print(f"* {M[2][0]}  |  {M[2][1]}  |  {M[2][2]} *")
    print("*****************")

def player_input(player,M):
    x=int(input("Entrer la ligne : "))
    y=int(input("Entrer la colone : "))
    if M[x][y] == "_":
        M[x][y] = player
    else:
        print("Cette case est déjà prise. Réessaie.")
        player_input(player,M)

def check_win(player, M):
    # Vérifie les lignes
    for row in M:
        if all(cell == player for cell in row):
            return True

    # Vérifie les colonnes
    for col in range(3):
        if all(M[row][col] == player for row in range(3)):
            return True

    # Vérifie la diagonale principale
    if all(M[i][i] == player for i in range(3)):
        return True

    # Vérifie la diagonale secondaire
    if all(M[i][2 - i] == player for i in range(3)):
        return True

    return False



def play():
    M = []
    for i in range(3):
        l = []
        for j in range(3):
            l.append("_")
        M.append(l)

    current_player = "X"
    tour = 0

    while tour < 9:
        display_board(M)
        player_input(current_player, M)

        if check_win(current_player, M):
            display_board(M)
            print(f"🏆 Le joueur {current_player} a gagné !")
            return

        # Changement de joueur
        current_player = "O" if current_player == "X" else "X"
        tour += 1

    display_board(M)
    print("🤝 Match nul !")

play()