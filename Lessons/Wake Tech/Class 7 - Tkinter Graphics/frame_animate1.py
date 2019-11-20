from tkinter import *
from time import *

class MyFrame(Frame):    

    def __init__(self):
        Frame.__init__(self)
        background = "blue"
        self.myCanvas = Canvas(width=300, height=200, bg=background)
        self.myCanvas.grid()
        my_rect_id = self.myCanvas.create_rectangle(10, 10, 50, 50)
        self.myCanvas.update()
        
        for count in range(10):
            increment = 10*count
            self.myCanvas.coords(my_rect_id, 10 + increment,
                10 + increment, 50 + increment, 50 + increment)
            self.myCanvas.update()
            sleep(1)
            self.myCanvas.create_rectangle(10 + increment,
                10 + increment, 50 + increment, 50 + increment, outline=background)

frame01=MyFrame()
frame01.mainloop()


