from tkinter import *
from time import *


class MyFrameTeacher(Frame):    

    # starts the definition for the class constructor, __init__
    def __init__(self):
        # this line calls the constructor of the base class 'Frame'
        Frame.__init__(self)

        self.myCanvasTeacher = Canvas(width=300, height=200, bg="red")
        self.myCanvasTeacher.grid()
        self.myCanvasTeacher.create_text(1, 1, text="Hello World", width=70, fill="blue", anchor="nw",justify="center", font=("Times", 16))
        self.myCanvasTeacher.update()

        sleep(1)

        self.myCanvasTeacher.create_rectangle(20, 20, 60, 60)
        

# create an instance of the inherited class (MyFrame) called 'frame02'
frame02=MyFrameTeacher()
# call the .mainloop() method of the Frame/MyFrame class to draw a frame
frame02.mainloop()
