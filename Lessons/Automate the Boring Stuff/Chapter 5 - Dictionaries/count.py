# This uses set default to populate a dictionary with the letters 
# and counts of those letters as taken from the string variable 'message'

import pprint

message = 'It was a bright cold day in April, and the clocks were striking thirteen'
count_dict = {}

for c_var in message:
    count_dict.setdefault(c_var, 0)
    count_dict[c_var] = count_dict[c_var] + 1


#print(count_dict)
pprint.pprint(count_dict)

pprint.pprint(count_dict.items())
#output:
# dict_items([(',', 1), ('c', 3), ('n', 4), ('s', 3), ('b', 1), ('e', 5), ('k', 2),
# ('l', 3), ('I', 1), ('A', 1), ('i', 6), ('a', 4), ('g', 2), ('h', 3), (' ', 13),
# ('y', 1), ('o', 2), ('t', 6), ('w', 2), ('d', 3), ('r', 5), ('p', 1)])

