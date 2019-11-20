import shelve
db_file = shelve.open('letters.txt', 'c')
db_file ['vowels'] = ['a', 'e', 'i', 'o', 'u'] 
db_file ['end'] = ['x', 'y', 'z'] 

print('vowels' in db_file.keys())
#True


db_file.close()
