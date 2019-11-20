#! Python3.5

odds={1:'one', 3:'three', 5:'five'}
evens={2:'two', 4:'four', 6:'six'}
odds.clear()
print(odds)
del evens[2]
print(evens)

del evens
print(evens)

#output of last print statement
#Traceback (most recent call last):
#  File "F:/Programming/Python-Tinkering/Lessons/Wake Tech/Class 9 - Dictionaries/del_vs_clear.py", line 11, in <module>
#    print(evens)
#NameError: name 'evens' is not defined
