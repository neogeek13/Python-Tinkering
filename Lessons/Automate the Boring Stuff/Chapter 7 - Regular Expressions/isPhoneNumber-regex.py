import re

#.compile() method creates a 'Regex object' in the var specified
# 'r' specifies to create a raw string to avoid escape character conflict
# phoneNumRegex is the 'Regex Object' here
phoneNumRegex = re.compile(r'\d\d\d-\d\d\d-\d\d\d\d')
print(phoneNumRegex)  #re.compile('\\d\\d\\d-\\d\\d\\d-\\d\\d\\d\\d')

#.search() sets specified var to the returned 'Match object'
#found by a string passed to it
#mo is the 'Match Object' here
mo=phoneNumRegex.search('My number is 415-555-4242.')

#.group() method of 'Match object' that returns the matched text
print('Phone number found: ' + mo.group())   #Phone number found: 415-555-424


