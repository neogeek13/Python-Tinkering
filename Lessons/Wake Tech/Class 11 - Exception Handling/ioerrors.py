try:
    infile = open('myfile.txt','r')
    infile.write('hello')
    infile.close()

except IOError as ioe:
    print(ioe.filename)
    print(ioe.strerror)
    print(ioe.__cause__)
    dir(IOError )

#>>> dir(IOError )
#['__cause__', '__class__', '__context__', '__delattr__', '__dict__',
#'__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__',
#'__gt__', '__hash__', '__init__', '__le__', '__lt__', '__ne__', '__new__',
#'__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__setstate__',
#'__sizeof__', '__str__', '__subclasshook__', '__suppress_context__',
#'__traceback__', 'args', 'characters_written', 'errno', 'filename',
#'filename2', 'strerror', 'winerror', 'with_traceback']    
