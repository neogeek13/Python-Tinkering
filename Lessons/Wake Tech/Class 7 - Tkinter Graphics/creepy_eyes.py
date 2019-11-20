from tkinter import *
from time import *


class MyFrame(Frame):

    """Lesson 7 Assignment: Creepy Eyes Animation"""

    def __init__(self):

        Frame.__init__(self)

        self.myCanvas = Canvas(width=700,height=200,bg="green")

        self.myCanvas.grid()

 

        #closed eyes

        self.myCanvas.create_line(20,100,280,100,fill="black",width=4)

        self.myCanvas.create_line(420,100,680,100,fill="black",width=4)



        self.myCanvas.update()



        sleep(1)



        #snout

        self.myCanvas.create_arc(150,120,300,300,style="chord",extent=180,width=4)

        self.myCanvas.create_arc(400,120,550,300,style="chord",extent=180,width=4)

        self.myCanvas.create_oval(200,130,250,200, width=4,fill="black")

        self.myCanvas.create_oval(450,130,500,200, width=4,fill="black")



        #left eye

        self.myCanvas.create_line(20,100,280,100,fill="green",width=4)

        self.myCanvas.create_arc(20,95,280,100,style="chord",extent=180,width=4)

        #right eye

        self.myCanvas.create_line(420,100,680,100,fill="green",width=4)

        self.myCanvas.create_arc(420,95,680,100,style="chord",extent=180,width=4)

        self.myCanvas.update()



        #open left eye

        for idc in range(1,16 ):

            sleep(.06)

            self.myCanvas.create_arc(20,95-idc*5,280,100+5*idc,style="chord",extent=180,width=4,fill="white")

            self.myCanvas.create_arc(100,95-idc*5,200,100+5*idc,style="chord",extent=180,width=4,fill="#cc9900")

            self.myCanvas.create_line(150,100,150,100-idc*3,width=8);

            self.myCanvas.update()

            

        #open right eye

        for idc in range(1,16 ):

            sleep(.06)

            self.myCanvas.create_arc(420,95-idc*5,680,100+5*idc,style="chord",extent=180,width=4,fill="white")

            self.myCanvas.create_arc(500,95-idc*5,600,100+5*idc,style="chord",extent=180,width=4,fill="#cc9900")

            self.myCanvas.create_line(550,100,550,100-idc*3,width=8);

            self.myCanvas.update()

 

    



frame02 = MyFrame()

frame02.mainloop()
