#! Python3.5

#Class 7 - Lists and Tuples


child1 = ['Pat', 5, 6.5]
child2 = ['Koe', 11, 8.5]
family = [child1, child2]
print(family[0][1])  # Prints 1st element of the 0th element(list) of family

#family[0][1] =
#[0=child1 = 0th element of family list]
#[1=5 = 1st element of the aformentioned child1 list or the 2nd entry]


my_list = []
#append
my_list.append(10)
my_list.append('ten')
print(my_list)

#extend
my_list.extend([10])
print(my_list)
my_list.extend([20,'twenty'])
print(my_list)

#concatenate
my_list = my_list + [30, 'thirty']
print(my_list)

#insert
my_list.insert(3,'hi there')
print(my_list)

#remove
my_list.remove(20)
print(my_list)


my_nums = [16,8,15,42,23,4]
#max grabs the highest number or string (but not a combination)
print(max(my_nums))

my_words = ['hi','woot','Batman','Wonder Woman','holiday']
print(max(my_words))

#sort
print(my_nums)
my_nums.sort()
print(my_nums)

#reverse
my_nums.reverse()
print(my_nums)

#tuple structure - days of week make a good tuple since they don't change
days_of_week = ('Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat')
print(days_of_week)


