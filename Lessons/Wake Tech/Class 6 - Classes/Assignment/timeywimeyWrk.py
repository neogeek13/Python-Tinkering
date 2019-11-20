from TimeCls import TimeCls

myTime1 = TimeCls()
i=1
while i in range(0,245):
    myTime1.tick()
    print('myTime1 '+ str(myTime1.print_time()))
    i+= 1