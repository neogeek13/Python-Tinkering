#! Python3.5

#use open(file, 'r'/'w'/'a') and assign file to a variable
out_file = open('mytext.txt', 'w')

#to use a specific directory vs. current working directory, give a path:
out_file = open('F:\Programming\Python-Tinkering\Lessons\Wake Tech\Class 10 - Data Files\mytext.txt', 'w')

#write writes a single string
out_file.write('1st line: Hello')
out_file.write('world!')
# results in a file with:
#Helloworld!

out_file.write('Hello\n')
out_file.write('2nd line: world!\n')
# results in a file with:
#Hello
#world!

#writeline writes a list of strings
weekends = ['3rd line: Saturday', 'Sunday']
out_file.writelines(weekends)
out_file.writelines(weekends)
# results in a file with:
#SaturdaySundaySaturdaySunday

out_file.write('\n4th line')

#flush forces prior write/writelines commands to be committed immediately:
out_file.flush()

#Finally we need to close the file with close:
out_file.close()
