def square(num):
    '''This calculates the square of the number passed in'''
    result = num * num
    return result
    #or replace prior two lines with: return num * num

for i in range(1,11):
    print(square(i))

print('--------------------')

def square2(num=1):
    '''This calculates the square of the number passed in'''
    return num * num

print(square2())

print('--------------------')

def promptUsr(prompt, tries=2):
    '''Prompt the user 'tries' times'''
    answer=input(prompt)

    while (answer !='yes' and answer != 'no' and tries > 1):
        tries = tries -1
        print('Try again...')
        answer=input(prompt)

promptUsr('Enter yes or no: ')
print('--------------------')
promptUsr('Enter yes or no: ',4)
print('--------------------')
promptUsr(prompt="hello: ", tries=5)
print('--------------------')
promptUsr(prompt="Yo. ")
