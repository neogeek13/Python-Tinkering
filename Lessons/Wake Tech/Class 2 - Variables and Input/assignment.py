#Lesson 2 Assignment
#Get a word or phrase and two numbers from the user.
#Use the two numbers to slice the string and print out that slice.

userInput = input("Please enter in a word or phrase.")
slice1 = input("Please enter a single digit")
slice2 = input("Please enter another single digit")

#print(userInput[int(slice1):int(slice2)])

print(userInput[eval(slice1):eval(slice2)])
