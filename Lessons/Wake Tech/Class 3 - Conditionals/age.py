age = 10
if age != 10:
    print("ten")
print("how's that?")

name = "me"
if name == "me":
    print("the same")

letter = "C"
if letter > "a":
    print("less than D")
else:
    print("NOPE")

if letter > "B":
    print("greater than B")

print("How old are you?")
v_age = input()
if int(v_age) >=18:
    print("Congratulations!")
    print("You are old enough to vote")
else:
    print("Sorry")
    print("You are NOT old enough to vote")

year = eval(input("Enter year:"))
if year == 1:
    print("Freshman")
elif year == 2:
    print("Sophomore")
elif year == 3:
    print("Junior")
elif year == 4:
    print("Senior")
else:
    print("That's not one of the valid values")
print("Done")
