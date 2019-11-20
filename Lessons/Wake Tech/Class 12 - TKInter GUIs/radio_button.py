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
        self.master.geometry('400x200')
#Add a frame title
        self.master.title('Checkbox Sampler')
        # grid (rows/columns) used by Frame's layout manager to position widgets
        self.grid()





#make a label-prompt object
        self.sampletxt = Label(self,text='Some Sample Text')
#pady/padx specifies pixels for separation
        self.sampletxt.grid(row=0, column=0, pady=10)


#make two IntVar objects - IntVar is a data type that allows the value
#of the checkbox state - 0 (unchecked) or 1 (checked)
        self.bold_on = IntVar()
        self.underline_on = IntVar()
#make a StringVar object to hold the selected value
        self.point_size = StringVar()
        self.point_size.set('10')
        
#make a StringVar object to hold the selected value
        self.font_family = StringVar()
        self.font_family.set('Courier')



#make a checkbox object
        self.check_bold = Checkbutton(self, text = 'Bold',
            variable=self.bold_on, command = self.set_font)
        self.check_bold.grid(row=1, column=0)
        
#make a checkbox object
        self.check_underline = Checkbutton(self, text = 'Underline',
            variable=self.underline_on, command = self.set_font)
        self.check_underline.grid(row=1, column=1)



#make a radiobutton object
        self.ten_point = Radiobutton(self, text = '8 point',
            variable=self.point_size, value = '8', command = self.set_font)
        self.ten_point.grid(row=2, column=0)
        
#make a radiobutton object
        self.ten_point = Radiobutton(self, text = '10 point',
            variable=self.point_size, value = '10', command = self.set_font)
        self.ten_point.grid(row=2, column=1)

#make a radiobutton object
        self.twelve_point = Radiobutton(self, text = '12 point',
            variable=self.point_size, value = '12', command = self.set_font)
        self.twelve_point.grid(row=2, column=2)



#make a radiobutton object
        self.courier_font = Radiobutton(self, text = 'Courier',
            variable=self.font_family, value = 'courier', command = self.set_font)
        self.courier_font.grid(row=3, column=0)

#make a radiobutton object
        self.times_font = Radiobutton(self, text = 'Times',
            variable=self.font_family, value = 'times', command = self.set_font)
        self.times_font.grid(row=3, column=1)


    def set_font(self):
        new_font = "Courier 10"
        if self.point_size.get() == '8':
            if self.font_family.get() == 'times':
                new_font = 'Times 8'            
            else:
                new_font = "Courier 8"  
        if self.point_size.get() == '10':
            if self.font_family.get() == 'times':
                new_font = 'Times 10'
            else:
                new_font = "Courier 10"                
        if self.point_size.get() == '12':
            if self.font_family.get() == 'times':
                new_font = 'Times 12'            
            else:
                new_font = "Courier 12"                
        if self.bold_on.get() == 1:
            new_font = new_font + " bold"
        if self.underline_on.get() == 1:
            new_font = new_font + " underline"

        self.sampletxt.config(font=new_font)



## create an instance of the inherited class (MyFrame) called 'frame02'
frame01=MyFrame()
## call the .mainloop() method of the Frame/MyFrame class to draw a frame
frame01.mainloop()
