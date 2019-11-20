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
        self.master.geometry('300x200')
#Add a frame title
        self.master.title('My GUI')
        # grid (rows/columns) used by Frame's layout manager to position widgets
        self.grid()

#make a label-prompt object
        self.prompt = Label(self,text='What\'s your name?')
#pady/padx specifies pixels for separation
        self.prompt.grid(row=0, column=0, pady=10)

#make a entry object
        self.input = Entry(self)
#pady/padx specifies pixels for separation
        self.input.grid(row=0, column=1, pady=10, padx = 5)

#make a button object
        self.button_submit = Button(self, text='Submit',
            command = self.submit_click)
#pady/padx specifies pixels for separation
        self.button_submit.grid(row=0, column=2, pady=10, padx = 5)
#make a StringVar object - StringVar is a data type that allows the value
#of the string contained in the Label control to be changed at runtime
        self.my_text = StringVar()


#make a label-message object
        self.message = Label(self, textvariable = self.my_text)
#columnspan specifies the number of columns to use
#pady/padx specifies pixels for separation
        self.message.grid(columnspan=2, pady=10)

    def submit_click(self):
        output_message = 'Hi ' + self.input.get()
        self.my_text.set(output_message)
        

## create an instance of the inherited class (MyFrame) called 'frame02'
frame01=MyFrame()
## call the .mainloop() method of the Frame/MyFrame class to draw a frame
frame01.mainloop()
