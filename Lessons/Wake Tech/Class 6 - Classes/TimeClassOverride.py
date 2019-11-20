class Time:
   """ Blueprint for a Time object"""
   def __init__(self):
      self.__hour = 0
      self.__minute = 0
      self.__second = 0

   def set_time(self, hour, minute, second):
      self.__hour = hour
      self.__minute = minute
      self.__second = second

   def print_time(self):
      print (self.__hour, ":", self.__minute, ":", self.__second)

   def set_second(self, second):
      self.__second = second

   def get_second(self):
      return self.__second