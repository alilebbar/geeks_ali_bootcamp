sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
index=0
for sandwich in sandwich_orders:
    if(sandwich=="Pastrami sandwich"):
        sandwich_orders.pop(index)
    index+=1

print(sandwich_orders)

finished_sandwiches=[]
for sandwich in sandwich_orders:
    finished_sandwiches.append(sandwich)

for sandwich in finished_sandwiches:
    print("I made your " + sandwich)