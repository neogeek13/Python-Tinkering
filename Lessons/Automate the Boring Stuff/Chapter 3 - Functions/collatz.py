def collatz(l_number):
    try:
        while int(l_number) != 1:
            if int(l_number) % 2 == 0:
                print (str(l_number) + ' / 2', end=' = ')
                print (str(int(l_number) // 2))
                l_number = (int(l_number) // 2) 
            else:
                print ('3 * ' + str(int(l_number)) + ' + 1', end=' = ')
                print (str(int(3 * int(l_number) + 1)))
                l_number = 3 * int(l_number) + 1
    except ValueError:
        print ('Please enter a numeric value.')
    
print ('Please enter an integer...')
g_Number = input()
collatz(g_Number)
