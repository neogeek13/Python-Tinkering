#! Python3.5

import pyperclip, re

numregex = re.compile(r'^\d{1,3}(,\d{3})*$')


text = pyperclip.paste()

combVar = []
print(text)


for groups in numregex.findall(text):
    print('groups[1] ' + str(groups[1]))
    print('groups[2] ' + str(groups[2]))
    #numregex = ''.join([groups[1], groups[2]])
    #combVar.append(groups[0])
    combVar.append(text)



print( combVar)


'''
42
1,234
6,368,745
'''

