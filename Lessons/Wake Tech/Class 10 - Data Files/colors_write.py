#! Python3.5
#to use a specific directory vs. current working directory, give a path:
outfile = open('F:\Programming\Python-Tinkering\Lessons\Wake Tech\Class 10 - Data Files\colorfile.txt', 'w')

colors = ['blue', 'white']
outfile.write('colors')
outfile.writelines(colors)

#Finally we need to close the file with close:
outfile.close()
