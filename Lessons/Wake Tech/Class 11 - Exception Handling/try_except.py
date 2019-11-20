try:
    age = eval(input('Please enter your age: '))
    ten_years = age + 10
    print ('In 10 years, you\'ll be OLD! No, just kidding! You\'ll be ', ten_years)
#More compact version
#except (NameError, SyntaxError):
#    print('You must enter a number for your age, Sillyhead!')

except NameError:
    print('You must enter a number for your age, Sillyhead!')
#except SyntaxError:
#    print('You must enter a number for your age, Sillyhead!')

# Also an option - but referenceing the Exception class takes ALL exceptions
#regardless (ZeroDivisionError, KeyError, SystemError, etc)
#and forces same error handling on all of them
#The 'except' blocks are run in the order of appearance
except Exception:
   print ('Something ELSE happpened. Oops!')

print ('Have a nice decade!')
