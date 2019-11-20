#! Python3.5

import shelve

#shelf is like a dictionary except keys must be strings;
#values must be objects that can be pickled

#use shelve.open 'c' - read/write) and assign file to a variable
db_file = shelve.open('F:\Programming\Python-Tinkering\Lessons\Wake Tech\Class 10 - Data Files\shelf.txt', 'c')

db_file ['vowels'] = ['a', 'e', 'i', 'o', 'u']
db_file ['end'] = ['x', 'y', 'z']
db_file.sync()
#print(db_file)
#<shelve.DbfilenameShelf object at 0x02A86090>


#using the keys() method - MUST TRANSFORM TO LIST!!
print(list(db_file.keys()))
#[['x', 'y', 'z'], ['a', 'e', 'i', 'o', 'u']]

# using the values() method - MUST TRANSFORM TO LIST!!
print(list(db_file.values()))
#['end', 'vowels']

#using the in operator 
print('vowels' in db_file.keys())
#True



db_file.close()



