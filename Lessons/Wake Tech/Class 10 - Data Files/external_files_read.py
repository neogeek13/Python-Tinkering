#! Python3.5

#to read, change the open 'w' reference to a 'r':
in_file = open('mytext.txt', 'r')
#or use full path as desired
in_file = open('F:\Programming\Python-Tinkering\Lessons\Wake Tech\Class 10 - Data Files\mytext.txt', 'r')

#for reading, use - read, readline, or readlines:
#read 1 byte of date:
first = in_file.read(1)
#read the whole file - since read keeps a pointer, it will skip the 1st byte:
second = in_file.read()
print('first\t' + first)
print('second \t' + second)
#second contains the remainder of the file:
#elloworld!Hello
#world!SaturdaySundaySaturdaySunday

#we have to close to reset the read pointer
in_file.close()
#reopen the file for read access ('r')
in_file = open('F:\Programming\Python-Tinkering\Lessons\Wake Tech\Class 10 - Data Files\mytext.txt', 'r')

#readline
third = in_file.readline(1)
#read the whole line - since read keeps a pointer, it will skip the 1st byte:
fourth = in_file.readline()
print('\n' + 'third\t' + third)
print('fourth\t' + fourth)
#fourth only contains the remainder of the first line
#elloworld!Hello

#we have to close to reset the read pointer
in_file.close()
#reopen the file
in_file = open('F:\Programming\Python-Tinkering\Lessons\Wake Tech\Class 10 - Data Files\mytext.txt', 'r')

#readlines
#syntax = fileObject.readlines(sizehint)
# If the optional sizehint argument is present, instead of reading up to EOF,
#whole lines totalling approximately sizehint bytes
#(possibly after rounding up to an internal buffer size) are read.
fifth = in_file.readlines(1)
#read the whole line:
sixth = in_file.readlines()
print('\nfifth\t', fifth)
print('sixth\t', sixth)

#readlines() will actually include newline entries in the list output,
#unlike readline or read
#fifth ['1st line: Helloworld!Hello\n']
#sixth ['2nd line: world!\n', '3rd line: SaturdaySunday\n', '3rd line: SaturdaySunday\n', '4th line']


#we have to close to reset the read pointer
in_file.close()
