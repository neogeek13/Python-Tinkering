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
        self.master.title('Checkbox Sampler')
        # grid (rows/columns) used by Frame's layout manager to position widgets
        self.grid()
#make a label-prompt object
        self.sampletxt = Label(self,text='Some Sample Text')
#pady/padx specifies pixels for separation
        self.sampletxt.grid(row=0, column=0, pady=10)

#make two IntVar object - IntVar is a data type that allows the value
#of the checkbox state - 0 (unchecked) or 1 (checked)
        self.bold_on = IntVar()
        self.underline_on = IntVar()

#make a checkbox object
        self.check_bold = Checkbutton(self, text = 'Bold',
            variable=self.bold_on, command = self.set_font)
        self.check_bold.grid(row=1, column=0)
        
#make a checkbox object
        self.check_underline = Checkbutton(self, text = 'Underline',
            variable=self.underline_on, command = self.set_font)
        self.check_underline.grid(row=1, column=1)



    def set_font(self):
        new_font = "Courier 10"
        if self.bold_on.get() == 1:
            new_font = new_font + " bold"
        if self.underline_on.get() == 1:
            new_font = new_font + " underline"
        self.sampletxt.config(font=new_font)



## create an instance of the inherited class (MyFrame) called 'frame02'
frame01=MyFrame()
## call the .mainloop() method of the Frame/MyFrame class to draw a frame
frame01.mainloop()
