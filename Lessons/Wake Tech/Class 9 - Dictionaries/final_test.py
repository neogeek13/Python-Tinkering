#! Python3.5
#Student Grade dictionary

scores = {}
entryname = '0'
queryname = '0'

#Ask the user to enter names and grades
while entryname != '':
    entryname = input('Please specify a student (press Enter to quit): ')
    if entryname != '':
        entrygrade = input('Please specify the student\'s grade: ')
        print()
        scores[entryname] = entrygrade

#print(student_grades)

#Now allow the user to query for a student's grade
print()
queryname = 'Sam'
if queryname in scores:



    print(scores.get('Sam'))

    
else:
    print('Sorry. ' + queryname + ' has no grade recorded.')
