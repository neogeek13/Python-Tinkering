from tkinter import *

# in order to tell Python that this class should inherit from another class,
# we put the base class name, 'Frame', inside parentheses.
class MyFrame(Frame):    

    # starts the definition for the class constructor, __init__
    def __init__(self):
        # this line calls the constructor of the base class 'Frame'
        Frame.__init__(self)

#make the frame bigger -keyword master to access the master class being
#inherited from - in this case Frame
        self.master.geometry('200x200')
#Add a frame title
        self.master.title('My GUI')
        # grid (rows/columns) used by Frame's layout manager to position widgets
        self.grid()

#create a control variable 'my_control_var_text'
        self.my_control_var_text = StringVar()
#set the value of the  control variable 'my_control_var_text' using .set() method
        self.my_control_var_text.set('Hello World!')
# creating a new message object with custom options, including textvariable for control variable
        self.message = Label(self, textvariable = self.my_control_var_text)
#calling on the grid( ) method twice - once for the Frame, once for the Label.
#you need this call to grid( ) to get components added to and drawn on the Frame
        # grid (rows/columns) used by Frame's layout manager to position widgets
        self.message.grid()

        self.buton_click_here = Button(self, text='Click Me',
            command = self.click_here_click)
        self.buton_click_here.grid()


    def click_here_click(self):
#update the control variable 'my_control_var_text' with .set() method to update text real time
        self.my_control_var_text.set('Mischief managed!')
        print('You can click a button!')


## create an instance of the inherited class (MyFrame) called 'frame02'
frame01=MyFrame()
## call the .mainloop() method of the Frame/MyFrame class to draw a frame
frame01.mainloop()
