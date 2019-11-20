number = 1
while number <= 5:
    print(number)
    number += 1  # same as:  number = number +1
print("goodbye!")


number = 1
answer = 'y'
while answer == 'y':
    print(number)
    number += 2
    answer = input("Do you want the next number? ")
