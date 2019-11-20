try:

    infile = open ("mydata.txt",'a')

    infile.write("hello")

    infile.close()

except IOError as ioe:

    print (ioe.filename)

    print (ioe.strerror)

    print (ioe.errno)

    print (ioe.filename2)

    print (ioe.args)
    print (ioe.with_traceback)
    print( 'test')
