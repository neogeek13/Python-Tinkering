#! Python3.5
#Dictionary Ordering app

def inputWord():
    global value
    value = input('Please enter a word (or -999 to quit): ')
    return value

words = {}
inputWord()

while (value != '-999'):
    if value in words:
        words [value] = words [value] + 1
    else:
        words [value] = 1
    inputWord()

#old, unsorted way
#for current_key in words.keys():
#print(current_key, '\t', words [current_key])

#new, sorted (by key/word) way
#my_keys = list(words.keys())
#my_keys.sort()
#for current_key in my_keys:
#    print(current_key, '\t', words [current_key])

#new, sorted (by value) way
temp_list=[]
#select a key in the dictionary
for current_key in words.keys():
    #determine the number of words in the sorted list
    list_length = len(temp_list)

    #start looking at position 0
    placeholder = 0

    #As long as there are still utems in the list
    while placeholder < list_length:

        #get the word in sort list
        list_key = temp_list[placeholder]

        #Determine if this words has been entered
        #more times than the current word
        if words[list_key]>words[current_key]:
            break

        #It wasn't so let's look at the next word
        #in the sorted list
        placeholder = placeholder + 1

    #We found the location in the sorted list for
    #this word, insert it
    temp_list.insert(placeholder, current_key)

for current_key in temp_list:
    print(current_key, '\t', words [current_key])
