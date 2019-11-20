#! Python3.5
#Student Grade dictionary

student_grades = {}
entryname = '0'
queryname = '0'

#Ask the user to enter names and grades
while entryname != '':
    entryname = input('Please specify a student (press Enter to quit): ')
    if entryname != '':
        entrygrade = input('Please specify the student\'s grade: ')
        print()
        student_grades[entryname] = entrygrade

#print(student_grades)

#Now allow the user to query for a student's grade
while queryname != '':
    print()
    queryname = input('Which student\'s grade would you like to see? (press Enter to quit): ')
    if queryname in student_grades:
        print(queryname + ' received an ' + student_grades.get(queryname))
    elif queryname == '':
        print()
        print('Thanks for using the grade dictionary.')        
    else:
        print('Sorry. ' + queryname + ' has no grade recorded.')
