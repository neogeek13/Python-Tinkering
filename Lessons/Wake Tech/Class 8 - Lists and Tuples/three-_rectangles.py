#! Python3.5

from tkinter import *
from time import *

class MyFrame(Frame):    
    def __init__(self):
        Frame.__init__(self)
        self.myCanvas = Canvas(width=200, height=250)
        self.myCanvas.grid()

        self.myCanvas.create_rectangle(75,25,125,75, outline = "red", fill = "red", width = 5)
        self.myCanvas.create_rectangle(75,100,125,150, outline = "yellow", fill = "yellow", width = 5)
        self.myCanvas.create_rectangle(75,175,125,225, outline = "blue", fill = "blue", width = 5)
        self.myCanvas.update()

        #find_enclosed for entire canvas coords
        print(self.myCanvas.find_enclosed(0,0,200,300))

        #find_enclosed for first box only coords
        print(self.myCanvas.find_enclosed(70,20,130,80))

        #find_enclosed for nothing by using EXACT first box coords
        print(self.myCanvas.find_enclosed(75,25,125,75))


frame01=MyFrame()
frame01.mainloop()
