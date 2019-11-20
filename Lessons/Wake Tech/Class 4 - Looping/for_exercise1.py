num = eval(input("Please enter how many numbers you wish to average "))

#for count in range(num):
for count in range(num,0,-1):
    value = eval(input("Please enter a number to average "))
    accumulate = 0
    accumulate = accumulate + value
    print("count=" + str(count))

average = accumulate/num
print("The average is " + str(average))
