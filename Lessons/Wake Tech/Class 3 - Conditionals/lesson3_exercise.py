#could enhance by making the category a variable but these are not
#values that will likely change often/ever so no point, really
wind_speed = eval(input("What is the wind speed?"))

if wind_speed >= 74 and wind_speed <=95:
    print("That is a category 1 storm.")
elif wind_speed >= 96 and wind_speed <=110:
    print("That is a category 2 storm.")
elif wind_speed >= 111 and wind_speed <=130:
    print("That is a category 3 storm.")
elif wind_speed >= 131 and wind_speed <=155:
    print("That is a category 4 storm.")
elif wind_speed >=156:
    print("That is a category 5 storm. RUN!")
elif wind_speed < 74:
    print("That's not a storm! What are you complaining about?")
else:
    #This program currently fails if the user doesn't enter digits:
    #    wind_speed = eval(input("What is the wind speed?"))
    #  File "<string>", line 1, in <module>
    #NameError: name 'fsds' is not defined
    print("Please enter a number")



#Simpler way is to take advantage of the fact that prior steps will remove
#lower numbers:

#if speed < 74:
#    print ("This is not a hurricane")
#elif speed <= 95:
#    print ("Category 1")

#thus, no need to do the 'between' # and # evaluations 
