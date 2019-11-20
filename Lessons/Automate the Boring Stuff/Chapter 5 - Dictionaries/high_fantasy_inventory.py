#player's inventory
inventory = {'rope': 1, 'torch': 6, 'gold coin': 42, 'dagger': 1, 'arrow': 12}
#dragon's loot
dragonsloot = ['gold coin', 'dagger', 'gold coin', 'gold coin', 'ruby']



def displayInventory():
    for k, v in inventory.items():
        print(str(v) + ' ' + k)
    return inventory

def addToInventory(base_inventory, addedItems):
    #code to return a dictionary that combines inventory with dragon loot
    loot_len = (len(dragonsloot))
    #print(loot_len)
    for i in range(0,int(loot_len)):
        #print(dragonsloot[i])
        #print(inventory.setdefault(dragonsloot[i],0))
        loot_increment = inventory.setdefault(dragonsloot[i],0) + 1
        #print(loot_increment)
        inventory[dragonsloot[i]] = loot_increment



print('Inventory')
displayInventory()
total = 0
for v in inventory.values():
    total = int(total) + v
print('Total number of items: '+ str(total))

print("=======================")

print('Inventory with dragon\'s loot')
addToInventory(inventory,dragonsloot)
displayInventory()
total = 0
for v in inventory.values():
    total = int(total) + v
print('Total number of items: '+ str(total))
