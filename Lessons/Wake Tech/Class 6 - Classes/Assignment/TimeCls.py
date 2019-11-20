# Introduction to Python Programming
# Lesson 06 Assignment
# Sample Solution

class TimeCls:
   """ Blueprint for a Time object"""
   def __init__(self):
      self.__hour = 0
      self.__minute = 0
      self.__second = 0

   """ This was mine - this was presented by the teacher in Class 6: Chapter 3
   This difference was the big problem and the need to change this wasn't called out in the assignment like other existing pieces were
         def set_time(self, hour, minute, second):
            self.__hour = hour
            self.__minute = minute
            self.__second = second
   """

    #This is the teacher's
   def set_time(self, hour, minute, second):
      self.set_hour(hour)
      self.set_minute(minute)
      self.set_second(second)

   def print_time(self):
      print (self.__hour, ":", self.__minute, ":", self.__second)

   def set_hour(self, hour):
      if hour <= 11:
         self.__hour = hour + 1
      else:
         self.__hour = 1

   def set_minute(self, minute):
      if minute <= 59:
           self.__second = minute + 1
      else:
           self.__minute = 0

   def set_second(self, second):
      print(second)
      if second <= 59:
         self.__second = second + 1
      else:
         self.__second = 0

   def get_hour(self):
      return self.__hour

   def get_minute(self):
      return self.__minute

   def get_second(self):
      return self.__second

#My tick was a similar nested if but I used <= 59 vs. 60

   def tick(self):
      self.__second = self.__second + 1
      if (self.__second == 60):
          self.__second = 0
          self.__minute = self.__minute + 1
          if (self.__minute == 60):
              self.__minute = 0
              self.__hour = self.__hour + 1
              if (self.__hour == 12):
                  self.__hour = 1