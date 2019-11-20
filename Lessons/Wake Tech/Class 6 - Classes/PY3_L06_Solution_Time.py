# Introduction to Python Programming
# Lesson 06 Assignment
# Sample Solution

class Time:
    """ Blueprint for a Time object"""
    def __init__(self):
        self.__hour = 0
        self.__minute = 0
        self.__second = 0

    def tick(self):
        self.__second = self.__second + 1
        if (self.__second == 60):
            self.__second = 0
            self.__minute = self.__minute + 1
            if (self.__minute == 60):
                self.__minute = 0
                self.__hour = self.__hour + 1
                if (self.__hour == 24):
                    self.__hour = 0

    def set_time(self, hour, minute, second):
        self.set_hour(hour)
        self.set_minute(minute)
        self.set_second(second)

    def print_time(self):
        print (self.__hour, ":", self.__minute, ":", self.__second)

    def set_hour(self, hour):
        if (hour >= 0 and hour <= 23):
            self.__hour = hour
        else:
            self.__hour = 0
        
    def set_minute(self, minute):
        if (minute >= 0 and minute <= 59):
            self.__minute = minute
        else:
            self.__minute = 0

    def set_second(self, second):
        if (second >= 0 and second <= 59):
            self.__second = second
        else:
            self.__second = 0

    def get_hour(self):
        return self.__hour

    def get_minute(self):
        return self.__minute

    def get_second(self):
        return self.__second

