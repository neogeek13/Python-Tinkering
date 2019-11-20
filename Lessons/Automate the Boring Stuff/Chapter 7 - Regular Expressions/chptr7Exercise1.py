#! python3.5

import re


def ensure_strong(password_attempt):
    if len(password_attempt) >= 8:
        strong1 = re.compile(r'\d+')
        if strong1.search(password_attempt):
            print('Password has at least 1 number.')
            strong1 = re.compile(r'[A-Z]+')
            if strong1.search(password_attempt):
                print('Password has at least 1 upper case letter.')
                strong1 = re.compile(r'[a-z]+')
                if strong1.search(password_attempt):
                    print('Password has at least 1 lower case letter. This is a valid password.')
                else:
                    print('Passwords must contain at least 1 lower case letter.')
            else:
                print('Passwords must contain at least 1 upper case letter. You entered ' + password_attempt)
        else:
            print('Passwords must contain at least 1 number. You entered ' + password_attempt')
    else:
        print('Passwords must be at least 8 characters long. You entered ' + password_attempt')


g_password = input('Please enter a password: ')
ensure_strong(g_password)
#print(g_password)
