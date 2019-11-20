#setting
dictionary_name = {'key1': 'value1', 'key2': 'value2'}

#referencing - looks like referencing a list[]
dictionary_name['key2']

#fetching
dictionary_name['key1']
#get() method specifies which key's value to fetch
#and prevents errors from missing data
#by offering a default to return if there's no key existing
dictionary_name.get('KEY','OPTIONAL FALLBACK RETURN VALUE IF NONEXISTANT')
#response to above is: 'FALLBACK VALUE IF NONEXISTANT'
dictionary_name.get('key1','OPTIONAL FALLBACK RETURN VALUE IF NONEXISTANT')
#response to above is: 'value1'

#setdefault() - specifies which key's value to fetch
#and what default to set it to in the dictionary if it doesn't exist already
dictionary_name.setdefault('key2','OTHER FALLBACK VALUE')
#response to above is:  'value2'


#assigning - new or reassigning existing
dictionary_name['key1'] = 'valuex'

#methods = keys, values, items
for v in dictionary_name.keys():
    print (v)
## output:
## key1
## key2 

for v in dictionary_name.values():
    print (v)
## output:
## value1
## value2
    
for v in dictionary_name.items():
    print (v)
## output - tuples() data type:
## ('key1', 'value1')
## ('key2', 'value2')


#changing output format to list:
list(dictionary_name.items())
## [('key1', 'value1'), ('key5', 'value5'), ('key2', 'value2')]

list(dictionary_name.keys())
## ['key1', 'key5', 'key2']



#checking if a KEY exists:
'key1' in dictionary_name.keys()
#OR - leverage implicit expectation of 'keys' with:
'key1' in dictionary_name

#checking if a VALUE exists:
'value1' in dictionary_name.values()

#
