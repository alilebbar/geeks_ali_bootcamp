class BankAccount:
    def __init__(self, username, password, balance, authenticated=False):
        self.balance = balance
        self.username = username
        self.password = password
        self.authenticated = authenticated

    def deposit(self, montant):
        try:
            if not self.authenticated:
                raise ValueError("L'utilisateur n'est pas authentifié")
            if montant <= 0:
                raise ValueError("Le montant est invalide")
            self.balance += montant
            print(f"✅ Nouveau solde : {self.balance}")
        except ValueError as e:
            print("Erreur :", e)

    def withdraw(self, montant):
        try:
            if not self.authenticated:
                raise ValueError("L'utilisateur n'est pas authentifié")
            if montant <= 0:
                raise ValueError("Le montant est invalide")
            if montant > self.balance:
                raise ValueError("Fonds insuffisants")
            self.balance -= montant
            print(f"✅ Nouveau solde : {self.balance}")
        except ValueError as e:
            print("Erreur :", e)

    def authenticate(self, nom_utilisateur, mot_pass):
        if self.username == nom_utilisateur and self.password == mot_pass:
            self.authenticated = True
            return True
        return False


class MinimumBalanceAccount(BankAccount):
    def __init__(self, username, password, balance, minimum_balance=0):
        super().__init__(username, password, balance)
        self.minimum_balance = minimum_balance

    def withdraw(self, montant):
        try:
            if not self.authenticated:
                raise ValueError("L'utilisateur n'est pas authentifié")
            if montant <= 0:
                raise ValueError("Montant invalide")
            if self.balance - montant < self.minimum_balance:
                raise ValueError("Solde inférieur au minimum autorisé")
            self.balance -= montant
            print(f"✅ Nouveau solde : {self.balance}")
        except ValueError as e:
            print("Erreur :", e)


class ATM:
    def __init__(self, account_list, try_limit=2):
        if not isinstance(account_list, list) or not all(isinstance(a, BankAccount) for a in account_list):
            raise Exception("Liste de comptes invalide")
        self.account_list = account_list
        self.try_limit = try_limit if isinstance(try_limit, int) and try_limit > 0 else 2
        self.current_tries = 0
        self.show_main_menu()

    def show_main_menu(self):
        while True:
            print("\n=== Menu Principal ===")
            print("1 - Se connecter")
            print("2 - Quitter")
            choix = input("Entrez le numéro de votre choix : ")

            if choix == "1":
                username = input("Nom d'utilisateur : ")
                password = input("Mot de passe : ")
                self.login(username, password)
            elif choix == "2":
                print("Merci d'avoir utilisé l'ATM.")
                break
            else:
                print("Choix invalide. Réessayez.")

    def login(self, nom_utilisateur, mot_pass):
        for account in self.account_list:
            if account.authenticate(nom_utilisateur, mot_pass):
                print("✅ Connexion réussie !")
                self.show_account_menu(account)
                return
        self.current_tries += 1
        print("❌ Nom d'utilisateur ou mot de passe incorrect.")
        if self.current_tries >= self.try_limit:
            print("❌ Nombre maximum d'essais atteint. Fermeture de l'ATM.")
            exit()

    def show_account_menu(self, account):
        while True:
            print("\n=== Menu Compte ===")
            print("1 - Déposer")
            print("2 - Retirer")
            print("3 - Quitter")
            choix = input("Entrez votre choix : ")

            if choix == "1":
                try:
                    montant = int(input("Montant à déposer : "))
                    account.deposit(montant)
                except ValueError:
                    print("Veuillez entrer un nombre valide.")
            elif choix == "2":
                try:
                    montant = int(input("Montant à retirer : "))
                    account.withdraw(montant)
                except ValueError:
                    print("Veuillez entrer un nombre valide.")
            elif choix == "3":
                print("Déconnexion.")
                break
            else:
                print("Choix invalide.")


# Créer des comptes
compte1 = BankAccount("ali", "1234", 1000)
compte2 = MinimumBalanceAccount("sarah", "abcd", 500, minimum_balance=200)

# Lancer l'ATM
liste_comptes = [compte1, compte2]
atm = ATM(liste_comptes)
