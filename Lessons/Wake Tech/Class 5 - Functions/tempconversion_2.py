def convert_to_fahrenheit(cels):
    '''This function converts a Celsius temp to a Fah temp'''
    fahr = 9.0/5.0 * cels + 32
    return fahr

'''my solution didn't pass a value into the function
from the main calling program, though it works correctly'''

'''function named, convert_to_fahrenheit
that takes a Celsius temperature
and returns the corresponding Fahrenheit temperature.'''

print('Celsius' + '\t' + 'Fahrenheit')
for cels in range(0, 110, 10):
    print(cels, '\t', convert_to_fahrenheit(cels))


