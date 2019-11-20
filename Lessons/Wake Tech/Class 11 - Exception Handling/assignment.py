try:
    counter = 1
    while (counter >= 1):
        number = 2.0 ** counter
        counter = counter + 0.0001
except OverflowError:
    print(number, ' is as high as we got')
    print('OverflowError - do something here')
except KeyboardInterrupt:
    print(number, ' is as high as we got')
    print('The user has hit Ctrl-C')
finally:
    print('Thank you for playing!')
