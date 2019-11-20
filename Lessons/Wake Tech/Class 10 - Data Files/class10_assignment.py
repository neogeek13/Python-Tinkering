#! Python3.5
#Student Grade dictionary

import shelve

#use shelve.open 'c' - read/write) and assign file to a variable
grade_db_file = shelve.open('F:\Programming\Python-Tinkering\Lessons\Wake Tech\Class 10 - Data Files\grades.txt', 'c')

entryname = '0'
queryname = '0'

#Ask the user to enter names and grades
while entryname != '':
    entryname = input('Please specify a student (press Enter to quit): ')
    if entryname != '':
        entrygrade = input('Please specify the student\'s grade: ')
        print()
        grade_db_file[entryname] = entrygrade

#Now allow the user to query for a student's grade
while queryname != '':
    print()
    queryname = input('Which student\'s grade would you like to see? (press Enter to quit): ')
    if queryname in grade_db_file.keys():
        #apparently .get() or just file[index name] do the same thing here
        print(queryname + ' received the following grad: ' + grade_db_file.get(queryname))
        #print(queryname + ' received the following grade: ' + grade_db_file[queryname])
    elif queryname == '':
        print()
        print('Thanks for using the grade dictionary.')        
    else:
        print('Sorry. ' + queryname + ' has no grade recorded.')

grade_db_file.close()
