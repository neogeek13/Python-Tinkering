#! Python3.5

from tkinter import *
from time import *

# in order to tell Python that this class should inherit from another class,
# we put the base class name, 'Frame', inside parentheses.
class MyFrame(Frame):    

    # starts the definition for the class constructor, __init__
    def __init__(self):
        # this line calls the constructor of the base class 'Frame'
        Frame.__init__(self)

        # creating a new Canvas object with custom options
        self.myCanvas = Canvas(width=300, height=200, bg="blue")
        # grid (rows/columns) used by Frame's layout manager to position widgets
        self.myCanvas.grid()

        # create a rectangle (rectangle is used for a square too)
        self.myCanvas.create_rectangle(10,10,100,100, outline = "red", fill = "white", width = 5)

        # create an oval (oval is used for a circle too)
        self.myCanvas.create_oval(80,110,230,200, outline = "red", fill = "white", width = 5)

        # create a line - first two #s are X,Y coords of start of line; second to are enf point of line
        self.myCanvas.create_line(1,50,295,200, arrow = "both")

        # create text
        self.myCanvas.create_text(50,40, text = "HOWDY!", fill = "green", font =("Arial",12), anchor = "center", justify = "center")

        # This immediately updates the canvas with objects so far
        self.myCanvas.update()
        #pause for 1 second
        sleep(1)

        self.myCanvas.create_rectangle(20, 120, 160, 160)



## create an instance of the inherited class (MyFrame) called 'frame02'
frame01=MyFrame()
## call the .mainloop() method of the Frame/MyFrame class to draw a frame
frame01.mainloop()


