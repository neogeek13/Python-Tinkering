num = 0
how_many = 0
all_num = 0
average = 0

while num != '-1':
    num = eval(input("Please provide a number. Enter '-1' to stop. "))
    if num == -1:
        break
    how_many = how_many + 1
    all_num = num + all_num
if how_many != 0:
    average = all_num / how_many

print("The sum of all the numbers is " + str(all_num))
print("The average of all the numbers is " + str(average))
