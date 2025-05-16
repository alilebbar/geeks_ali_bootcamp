from menu_item import MenuItem
from menu_manager import MenuManager
from menu_editor import show_user_menu


choix=int(show_user_menu())
i=0
while i!=1: 
 match choix:
    case 1:
        name=input("entrez le nom de l'element que vous voulez afficher : ")
        item.get_by_name(name)
        choix=int(show_user_menu())
    case 2:
        name=input("entrez le nom de l'element que vous voulez ajouter : ")
        price=int(input("entrez le prix de l'element que vous voulez ajouter : "))
        new_item=MenuItem(name,price)
        new_item.save()
        choix=int(show_user_menu())
    case 3:
        name=input("entrez le nom de l'element que vous voulez supprimer : ")
        item=MenuItem(name)
        item.delete()
        choix=int(show_user_menu())
    case 4:
        name=input("entrez le nom de l'element que vous voulez mettre à jour : ")
        new_name=input("entrez le nouveau nom de l'element que vous voulez mettre à jour : ")
        new_price=int(input("entrez le nouveau prix de l'element que vous voulez mettre à jour : "))
        item=MenuItem(name)
        item.update(new_name,new_price)
        choix=int(show_user_menu())
    case 5:
        item=MenuManager()
        item.get_all()
        choix=int(show_user_menu())
    case 6:
        print("au revoir")
        i=1
    case _:
        print("choix invalide")
        choix=int(show_user_menu())

