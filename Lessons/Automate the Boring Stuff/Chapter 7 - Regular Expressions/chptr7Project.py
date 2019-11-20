#! Python3.5

import re, pyperclip

combVar = ''

phoneNumber = re.compile(r'''(
   (\d{3}|\(\d{3}\))?               #optional area code
   (\s|-|\.)?                       #optional separator
   (\d{3})                          #first 3 digits
   (\s|-|\.)                        #separator
   (\d{4})                          #last 4 digits
   (\s*(ext|x|ext.)\s*(\d{2,5}))?     #optional extension
   )''', re.VERBOSE)

emailAddress = re.compile(r'''(
    ([a-zA-Z0-9_\-\.]+)
    @
    ([a-zA-Z0-9_\-\.]+)
    \.
    ([a-zA-Z]{2,5})
    )''', re.VERBOSE)


text = pyperclip.paste()

combVar = []
for groups in phoneNumber.findall(text):
    #print('groups[1] ' + str(groups[1]))
    #print('groups[2] ' + str(groups[2]))
    #print('groups[3] ' + str(groups[3]))
    #print('groups[4] ' + str(groups[4]))
    #print('groups[5] ' + str(groups[5]))
    phoneNumber = '-'.join([groups[1], groups[3], groups[5]])
    if groups[8]!= '':
        phoneNumber += ' ext' + groups[8]
    combVar.append(phoneNumber)
    #print('group ' + str(groups))


for groups in emailAddress.findall(text):
    combVar.append(groups[0])
    #print('group ' + str(groups))


if len(combVar) > 0:
    #pyperclip.copy('\n'.join(combVar))
    print('\nCopied to clipboard:')
    print('\n'.join(combVar))
else:
    print('There were no email addresses or phone numbers found.')

'''
111-222-3445
name@name.com
(342) 444.3545  me@me34595.org
'''
