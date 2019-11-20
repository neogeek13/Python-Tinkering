age = eval(input("How old are you?"))
registered = input("Are you registered to vote? (y/n)")

if age >=18 and registered == "y":
    print("Ready to vote!")
else:
    print("You are not ready to vote.")

answer = input("Please enter a letter")
if answer == "y" or "Y":  #It's interpreting "Y" as Boolean true
    #need to instead specify the variable name and operator AGAIN:
    # if answer == "y" or answer == "Y":
    print("You entered 'y' or 'Y'")
