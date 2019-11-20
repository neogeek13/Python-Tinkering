#! python3.5

import re

g_strip_regex = re.compile(r'[^(^\s)(\s$)]')
#g_strip_regex = re.compile(r'\S+')

arg_to_strip = ''
arg_strip_regex = re.compile(arg_to_strip)
                                #(r"("+arg_to_strip+")")
                                #(r'^'arg_to_strip'')


def stripper(l_strip_input,strip_arg):
    print(l_strip_input)
    #mo_stripped = g_strip_regex.findall(l_strip_input)
    #mo_stripped = mo_stripped.group()
    mo_stripped = ''
    for groups in g_strip_regex.findall(l_strip_input):
        #print(groups)
        #for ListItem in mo_stripped:
        mo_stripped = mo_stripped + groups
        #mo_stripped.append(groups)
        #print(mo_stripped)
    print(mo_stripped)
    if len(strip_arg) != 0:
        for groups in arg_strip_regex.findall(mo_stripped):
            mo_stripped = mo_stripped + groups
            print(mo_stripped)
    return mo_stripped


to_be_stripped = input('Please enter something with leading and/or trailing white space to be stripped: ')
arg_to_strip = input('Add something to be stripped: ')
g_stripped = stripper(to_be_stripped, arg_to_strip)
print('_' + str(g_stripped) + '_')