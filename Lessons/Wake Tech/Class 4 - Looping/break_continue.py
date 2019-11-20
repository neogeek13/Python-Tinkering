for number in range(1,11):
    if number == 4:
        break #This causes a count from 1-3
    print(number)
print("Thanks!")

print("========================================")

for number in range(1,11):
    if number == 4:
        continue #This causes a count from 1-3, 5-10, skipping 4
    print(number)
print("Thanks!")


print("========================================")

for number in range(1,11):
    if number == 4:
        continue
    print(number)
else:
    print("Exited normally")

print("========================================")

#most other languages don't give you an 'else' clause within for loops

phrase = input("Enter a phrase: ")
letter = input("Enter a letter: ")
length = len(phrase)

for index in range(0, length):
    if phrase [index] == letter:
        break
else:
    print("Your letter wasn't found")
