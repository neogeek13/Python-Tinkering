try:
    user_num = eval(input('Please enter a number: '))
    result = 10 / user_num
except (NameError, SyntaxError):
    print('The value you entered was not a number')
except ZeroDivisionError:
    print('You cannot divide by zero')
else:
    print('The result of dividing 10 by your number is ', result)
