try:
   outfile = open('data.txt', 'r')
   outfile.write("hello")
   print ("Complete")
   outfile.close()
except IOError:
   print ("Error with the file")
