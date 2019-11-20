while True:
    print('Who are you?')
    name = input()
    if name != 'Tina':
        continue
    print('Hello, Tina. What is the password? (It is a fish.)')
    password = input()
    if password == 'swordfish':
        break
    else:
        print('Start over...')
print('Access granted.')
