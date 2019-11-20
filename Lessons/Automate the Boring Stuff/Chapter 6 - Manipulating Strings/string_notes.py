#quotes - single or double
spam1 = "That is Alice."
spam2 = 'That is Alice.'
print(spam1)
print(spam2)

#escape characters:
#\'
spam1 = 'That is Alice\'s cat.'
print(spam1)
#\"
spam1 = "She said, \"Hello.\" first."
print(spam1)
#\t = tab
spam1 = 'That is Alice. \t This is Bob.'
print(spam1)
#\n = new line
spam1 = 'That is Alice. \nThis is Bob.'
print(spam1)
#\\
spam1 = 'That is Alice\\Bob.'
print(spam1)

#raw strings - ignores escape characters
spam1 = r'That is Alice. \t This is Bob.'
print(spam1)
print('\n')

#multiline strings with triple quotes - note the ' in 'Eve's' doesn't need \'
print('''Dear Alice.

Eve's cat has been arrested for posession of catnip.

Sincerely,
Boo''')

#multiline comments don't get colored red though they don't show:
"""multiline comments
blah blah
"""

#indexing and slicing
spam2 = 'That is Alice.'
print(spam2[0])
print(spam2[5])
print(spam2[-1])
print(spam2[0:5])
print(spam2[:5])
print(spam2[6:])

#in and not in string operators
print('Hello' in 'Hello world')
print('Hello' in 'Hello')
print('HELLO' in 'Hello world')
print('' in 'spam')
print('cats' not in 'cats and dogs')

#String Methods
#_________________________________________
spam = "Hello, Alice"
#upper()
spam = spam.upper()
print(spam)
#OR
print(spam.upper())

#lower()
print(spam.lower())

#isupper() - returns True if at least 1 letter is upper case
print(spam.isupper())

#islower() - returns True if at least 1 letter is lower case
print(spam.islower())

#chaining
print(spam.upper())
print(spam.upper().lower())
print(spam.upper().lower().isupper())
#note that this would fail because the last piece out = Bool NOT the value
#print(spam.upper().lower().isupper().upper())
#AttributeError: 'bool' object has no attribute 'upper'

#isX():
spammy = 'Howdy'
spammy2 = '1357'
#isalpha()
print(spammy.isalpha())
#isalnum()
print(spammy.isalnum())
print(spammy2.isalnum())
#isdecimal()
print(spammy2.isdecimal())
#isspace()
print(spammy2.isspace())
#istitle()
print(spammy.isalpha())

smarm = 'Hello world!'
#startswith() - useful alternative to == for partial string check
print(smarm.startswith('Hel'))

#endswith()
print(smarm.endswith('ld!'))


#join()
listing = ['cat', 'rat', 'bat']
print(listing[0],listing[1],listing[2])
print(', '.join(listing))

#split()
print(smarm.split('o'))


#Justifying text
#rjust
print('Hello'.rjust(10))
print('Hello'.rjust(10, '_'))

#ljust
print('Hello'.ljust(10))
print('Hello'.ljust(10, '_'))

#center
print('Hello'.center(10))
print('Hello'.center(10, '_'))


whitepace = '     Howdy    '
altstuff =  '_ss    Special Strip   ss_'
#Removing whitespace
#strip()
print(whitepace.strip())
print(altstuff.strip('s_'))

#rstrip()
print(whitepace.rstrip())

#lstrip()
print(whitepace.lstrip())


#copying and pasting with pyperclip Module
import pyperclip
pyperclip.copy('Hooplah!')
newvar = pyperclip.paste()
print(newvar)
