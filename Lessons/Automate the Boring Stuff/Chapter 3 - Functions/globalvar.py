def myFunc():
    global myVar
    myVar = 42

myVar = 16
print(myVar)
myFunc()
print(myVar)