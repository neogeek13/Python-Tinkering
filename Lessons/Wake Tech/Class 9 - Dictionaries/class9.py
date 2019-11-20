#! Python3.5

#syntax - definition
my_dictionary = {}

#key-value pairs
days_in_month = {'Jan':31, 'Feb':28, 'Mar':30}
print(days_in_month['Jan'])

#easier to read:
days_in_month = {'Jan':31,
                 'Feb':28,
                 'Mar':30}

#dictionaries are unordered lists
print(days_in_month)
#results in the following output:
#{'Feb': 28, 'Mar': 30, 'Jan': 31}

#printing keys only
print(days_in_month.keys())
#results in the following output:
#dict_keys(['Mar', 'Jan', 'Feb'])

#printing values only
print(days_in_month.values())
#results in the following output:
#dict_values([30, 31, 28])

#printing items (list of key-value tuples)
print(days_in_month.items())
#results in the following output:
#dict_items([('Mar', 30), ('Feb', 28), ('Jan', 31)])

#test if something is in the dictionary
print('Jan' in days_in_month)
#True

#assigning additional values
days_in_month['Apr'] = 30
print(days_in_month)

#create 2nd dictionary
days_in_month2 = {'May':31,
                 'Jun':30,
                 'Jul':31}
#joining two dictionaries:
days_in_month.update(days_in_month2)
print(days_in_month.keys())
print(days_in_month2.keys())

#removing a dictionary key:
del days_in_month['Apr']
print(days_in_month.keys())

#get
print(days_in_month.get('Jan','Jan not present'))
print(days_in_month.get('Aug','Aug not present'))

