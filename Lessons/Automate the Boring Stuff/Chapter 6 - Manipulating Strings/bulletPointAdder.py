#! python3.5
#bulletPointAdder.py - adds bullets to the start of each line
#of text in the virtual clipboard in memory

import pyperclip
text = pyperclip.paste()

#print(text)
#TODO = separate lines and add '* '
lines = text.split('\n')
for i in range(len(lines)): #loop through all indexes in the 'lines' list
    if lines[i].startswith('* '):
        continue
    else:
        lines[i] = '* ' + lines[i] #add a star to each string in the 'lines' list

text = '\n'.join(lines)

print(text)

pyperclip.copy(text)



