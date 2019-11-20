def commaAnd(l_typed_spam):
    fullList = (l_typed_spam[0])
    for i in range (len(l_typed_spam) - 2):
            fullList = fullList + ', ' + l_typed_spam[i+1]
            #print(fullList)  #for debugging
    fullList = str(fullList) + ', and ' + str(l_typed_spam[-1])
    print(fullList)


listEntries = []
while True:
    print('Give me an entry to add to the list... (Or enter nothing to stop.)')
    manualListEntry = input()
    if manualListEntry == '':
        break
    listEntries = listEntries + [manualListEntry] #list concatenation

commaAnd(listEntries)

#['booger', 'junk', 'hollyfeld', 'hero', 'knight', 'batman']

#print('Starting with the following preset list...')
#g_typed_spam = ['apples','bananas','tofu','cats']
#print(g_typed_spam)
#input()
#commaAnd(g_typed_spam)

