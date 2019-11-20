#! Python3.5

#variable initialization
numberEntries = []
num_average = 0

#prompt the user and store their response in the list
while True:
    print('Enter a number to average... (Or enter -999 to stop.)')
    manualNumEntry = input()
    if manualNumEntry == '-999':
        break
    numberEntries = numberEntries + [manualNumEntry]   #list concatenation

#tell the user the average of the inputs
print('Using the input numbers: ', end='')
for i in range (len(numberEntries)):
    print(str(numberEntries[i]) + ' ', end='')
    num_average = num_average + int(numberEntries[i])/len(numberEntries)
print('\nThe average is: ' + str(num_average))
