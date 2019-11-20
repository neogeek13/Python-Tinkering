def convert_to_fahrenheit():
    cels = 0
    print('Celsius' + '\t' + 'Fahrenheit')
    for cels in range(0,110, 10):
        fahr = 9.0/5.0 * cels + 32
        print(str(cels) + '\t' + str(fahr))

convert_to_fahrenheit()

'''my solution didn't pass a value into the function
from the main calling program, though it works correctly'''

'''function named, convert_to_fahrenheit
that takes a Celsius temperature
and returns the corresponding Fahrenheit temperature.'''
