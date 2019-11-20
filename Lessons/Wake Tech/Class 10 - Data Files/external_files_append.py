#! Python3.5

#to append, change the write 'w' reference to an 'a':
out_file = open('myappendata.txt', 'a')
#open a new file for append access ('a')
out_file = open('F:\Programming\Python-Tinkering\Lessons\Wake Tech\Class 10 - Data Files\myappendata.txt', 'a')

#r+ and w+ allow you to read AND write files but have some downsides around
#behavior if the file doesn't already exist or does exist

out_file.write('Hello')
out_file.write('\nGoodbye')

#flush forces prior write/writelines commands to be committed immediately:
out_file.flush()

#we have to close to save
out_file.close()


in_file = open('F:\Programming\Python-Tinkering\Lessons\Wake Tech\Class 10 - Data Files\myappendata.txt', 'r')
first = in_file.read()
print(first)
