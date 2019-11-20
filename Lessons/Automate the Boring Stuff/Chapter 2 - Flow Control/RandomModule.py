import random, sys, os, math
# The 'random' module is used in the first exercise

for i in range(5):
    print(random.randint(1, 10))


#The 'sys' module is used in the second exercise

while True:
    print('Type exit to exit')
    response = input()
    if response == 'exit':
        sys.exit()
    print('You typed ' + response + '.')
