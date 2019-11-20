import re

#.compile() method creates a 'Regex object' in the var specified
# 'r' specifies to create a raw string to avoid escape character conflict
# phoneNumRegex is the 'Regex Object' here
#escaping the () so they are used in matchin
phoneNumRegex = re.compile(r'(\(\d\d\d\)) (\d\d\d-\d\d\d\d)')
print(phoneNumRegex)  #re.compile('(\\d\\d\\d)-(\\d\\d\\d-\\d\\d\\d\\d)')

#.search() sets specified var to the returned 'Match object'
#found by a string passed to it
#mo is the 'Match Object' here
mo=phoneNumRegex.search('My number is (415) 555-4242.')

#.group() method of 'Match object' that returns the matched text

print('mo.group(1): ' + mo.group(1))   #mo.group(1): 415

print('mo.group(2): ' + mo.group(2))   #mo.group(2): 555-4242

print('mo.group(0): ' + mo.group(0))   #mo.group(0): 415-555-4242

print('mo.group(): ' + mo.group(0))   #mo.group(): 415-555-4242

#.groups() returns a tuple (note the 's' on .groups()
print('mo.groups(): ' + str(mo.groups()))   #mo.groups(): ('415', '555-4242')

#multiple assignment trick can be used with tuples
areaCode, mainNbr = mo.groups()

print('Area Code: ' + areaCode)

print('Main Number: ' + mainNbr)
