rate = eval(input("What is your hourly rate?"))
hours = eval(input("How many hours did you work this week?"))

if hours <= 40:
    pay = int(rate) * int(hours)
else:
   pay = (int(rate) * 40) + ((int(hours) - 40) * (int(rate) * 1.5))
print("Your pay for this week is " + str(pay))


