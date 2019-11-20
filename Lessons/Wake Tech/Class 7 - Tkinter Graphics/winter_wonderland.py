from time import *
from tkinter import *
from random import *


class MyFrame(Frame):
    def __init__(self):
        Frame.__init__(self)

        #Winter Wonderland background
        self.myWonderland = Canvas(width=600, height=300, bg="black")
        self.myWonderland.grid()
        self.myWonderland.create_rectangle(1,200,600,300,fill="white", outline="white")


        #Single tree base X,Y coord from which all other trees will be drawn
        #tree_x = side/side coordinate
        tree_x = [80, 135, 415, 240, 485, 530, 180, 305, 365]
        #tree_y = up/down coordinate
        tree_y = [108, 30, 50, 80, 115, 55, 100, 40, 110]


        #Make a forest
        for count in range(len(tree_x)):
            #print(tree_x[count])
            #print(tree_y[count])
            
            #trunk
            self.myWonderland.create_rectangle(tree_x[count]-8,tree_y[count]+140,tree_x[count]+7,tree_y[count]+175,fill="brown")

            #tree
            #triangle coords in relation to trunk rectangle coords:
            self.myWonderland.create_polygon(tree_x[count]-38,tree_y[count]+140,tree_x[count]+37,tree_y[count]+140,tree_x[count],tree_y[count], fill="green")

            self.myWonderland.update()
            sleep(.1)

        #Let it snow, let it snow, let it snow - use white asterisks :)
        #STILL TO DO
            #stagger generation of snowflakes to 10 pixels apart = 600 wide/10 = 60 snowflakes
            #300 tall/10 = cycle each of the 60 snowflake 'columns' 30 times
            #how to add some randomization to the fall so the snowflakes don't all fall at same rate?
        self.myWonderland.create_text(40,50, text = "*", fill = "white", font =("Arial",16))
        self.myWonderland.create_text(50,60, text = "*", fill = "white", font =("Arial",16))


winterframe = MyFrame()
winterframe.mainloop()
