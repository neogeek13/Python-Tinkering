#! python3.5
#prints a neat list within a list as a right justified table

tableData = [['apples','oranges','cherries','banana'],
             ['Alice','Carol','Mike','Jenny'],
             ['cats','bats','rats','ducks']]


def printTable():
    #find longest entry to use as basis for rjust
    interval = 0
    for j in range(len(tableData[0])):
        for i in range(len(tableData)):
            if len(tableData[i][j]) > interval:
                interval = int(interval) + 2

    #concatenate and spit out the reformatted table
    entry = ''
    for j in range(len(tableData[0])):
        for i in range(len(tableData)):
            new_add = tableData[i][j].rjust(interval)
            entry = entry + ' ' + new_add
        entry = entry +  '\n'
    print(entry)


printTable()
