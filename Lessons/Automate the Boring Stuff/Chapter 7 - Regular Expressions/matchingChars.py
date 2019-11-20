import re

# ()?  ()*  ()+ characters in reg expressions

print('\n=====()?==============')
#means the 'wo' characters within the ()? are optional for the match 
batRegex = re.compile(r'Bat(wo)?man')

mo5 = batRegex.search('The Adventures of Batman')
print(mo5.group())

mo6 = batRegex.search('The Adventures of Batwoman')
print(mo6.group())

print('\n=====()?==============')
# ()? the area code to make it optional
phoneNumRegex = re.compile(r'((\(\d\d\d\)))? (\d\d\d-\d\d\d\d)')

mo7=phoneNumRegex.search('My number is  555-4242.')
print(mo7.group())

print('\n=====()*==============')
#means the 'wo' characters within the ()* will be matched zero or more times
batRegex = re.compile(r'Bat(wo)*man')

mo8 = batRegex.search('The Adventures of Batman')
print(mo8.group())

mo9 = batRegex.search('The Adventures of Batwoman')
print(mo9.group())

mo10 = batRegex.search('The Adventures of Batwowowowowoman')
print(mo10.group())


print('\n======()+=============')
#means the 'wo' characters within the ()+ will be matched one or more times
#at least one instance is required
batRegex = re.compile(r'Bat(wo)+man')

mo8 = batRegex.search('The Adventures of Batman')
if mo8 == None:
    print('None') #AttributeError: 'NoneType' object has no attribute 'group'

mo9 = batRegex.search('The Adventures of Batwoman')
print(mo9.group())

mo10 = batRegex.search('The Adventures of Batwowowowowoman')
print(mo10.group())

