def prtValue(myVal):
    '''This prints the value passed in'''
    print('Inside value is:', myVal)
    #Can't concatenate because data type of myVal is variable vs. str
    myVal = 1
    print('Inside value changed to:', myVal)
    #Variable myVal is destroyed now

#prtValue(5)
#prtValue('Number')

name = 'Pat'
print('Outside value is:', name)
prtValue(name)
#This var is a global and is not impacted by the change to the local var
print('Outside value is now:', name)

print('-------------------------------')

def prtGlobal():
    '''This prints the value passed in'''
    #Can't concatenate because data type of myVal is variable vs. str
    global newVal
    newVal = 1

#prtValue(5)
#prtValue('Number')

newVal = 'Pat'
print('First value is:', newVal)
prtGlobal()
#This var is a global and is not impacted by the change to the local var
print('New value is now:', newVal)
