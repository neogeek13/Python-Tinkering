try:
    infile = open ('data.txt', 'r')
    try:
        value = infile.readline()
        number = int(value)
        print(number)
    finally:
        infile.close()
        print('The data file was closed')
except IOError as io:
    print('Could not open file: ', io.filename)
    print(io)
except ValueError:
    print('Could not convert ', value, ' to a number')
