import re
print('======| or =============')
#matching with | (pipe) which acts like an 'or' and shows FIRST occurrence
heroRegex = re.compile(r'Batman|Tina Fey')

mo1 = heroRegex.search('Batman and Tina Fey')
print(mo1.group())

mo2 = heroRegex.search('Tina Fey and Batman')
print(mo2.group())

#.findall() vs. search() will return ALL occurrences
print('======findall=============')
mo3 = heroRegex.findall('Tina Fey and Batman')
for x in mo3:
    print(x)

# pipe | in () group is an 'or' subset
print('\n=======|============')

batRegex = re.compile(r'Bat(man|mobile|copter|bat)')

mo4 = batRegex.search('The Batmobile lost a wheel')
print(mo4.group())

