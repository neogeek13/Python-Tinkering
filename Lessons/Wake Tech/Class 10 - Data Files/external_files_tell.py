#! Python3.5

#create the file we'll need in next step with 'w'
#If the file doesn't already exist, the r+ will fail
#out_file = open('F:\Programming\Python-Tinkering\Lessons\Wake Tech\Class 10 - Data Files\mydata.txt', 'w')
#open an existing file for read/write access ('r+')
#using w+ will create a file if it doesn't exist (will overwrite one that does)
out_file = open('F:\Programming\Python-Tinkering\Lessons\Wake Tech\Class 10 - Data Files\mydata.txt', 'w+')

#r+ and w+ allow you to read AND write files but have some downsides around
#behavior if the file doesn't already exist or does exist

out_file.write('First line')
out_file.write('\nSecond line')

#flush forces prior write/writelines commands to be committed immediately:
out_file.flush()


in_file = open('F:\Programming\Python-Tinkering\Lessons\Wake Tech\Class 10 - Data Files\mydata.txt', 'r')
first = in_file.read(2)
print(first)
print('Tell location :', in_file.tell())

second = in_file.readline()
print(second)
print('Tell location :', in_file.tell())

#seek moves you to the specified byte position in the file
in_file.seek(0)
print('Tell location :', in_file.tell())

#Finally we need to close the file with close:
out_file.close()
