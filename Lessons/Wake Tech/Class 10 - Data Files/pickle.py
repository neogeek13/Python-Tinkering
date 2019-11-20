#! Python3.5
#pickle and shelve notes

import pickle

#dumps stores into a string (dump 's' for string)
letters=['a', 'b', 'c']
pickled_letters = pickle.dumps(letters)

print(pickled_letters)
#returns:
#b'\x80\x03]q\x00(X\x01\x00\x00\x00aq\x01X\x01\x00\x00\x00bq\x02X\x01\x00\x00\x00cq\x03e.'


#use open(file, 'wb' - write bytes) and assign file to a variable
out_file = open('F:\Programming\Python-Tinkering\Lessons\Wake Tech\Class 10 - Data Files\pickle.txt', 'wb')

#dump stores into a file
pickled_letters_dmp = pickle.dump(letters, out_file)

print(pickled_letters_dmp)

#in_file = open('F:\Programming\Python-Tinkering\Lessons\Wake Tech\Class 10 - Data Files\pickle.txt', 'r+')


#unpickle with load/loads
unpickled_letters = pickle.loads(pickled_letters)
print(unpickled_letters)


#We need to close the file with close:
out_file.close()



#use open(file, 'rb' - read bytes) and assign file to a variable
in_file = open('F:\Programming\Python-Tinkering\Lessons\Wake Tech\Class 10 - Data Files\pickle.txt', 'rb')

#unpickle with load/loads
unpickled_letters_file = pickle.load(in_file)
print(unpickled_letters_file)



