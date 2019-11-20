import re

haRegex = re.compile(r'(Ha){3}')
mo1 = haRegex.search('HaHaHa')
print(mo1.group())

haRegex = re.compile(r'(Ha){3,5}')
mo2 = haRegex.search('HaHaHaHa')
print(mo2.group())

#override 'greedy' 

haRegex = re.compile(r'(Ha){3,5}?')
mo3 = haRegex.search('HaHaHaHa')
print('non-greedy prints shortest possible match:')
print(mo3.group())
