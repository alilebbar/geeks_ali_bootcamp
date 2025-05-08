import random
def throw_dice():
    return random.randint(1,6)
def throw_until_doubles():
    count=0
    a=1
    b=2
    while a!=b:
        a=throw_dice()
        b=throw_dice()
        count+=1
    return count

def main():
    resultDe = []
    for i in range(99):
       resultDe.append(throw_until_doubles())
    total = sum(resultDe)
    moyenne= round(total/100,2)
    print("Total throws: ",total)
    print("Average throws to reach doubles: ",moyenne)

main()