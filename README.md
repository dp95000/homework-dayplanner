# homework-dayplanner
Homework Assignment #5 - jQuery Day Planner

# Description

The following project is for a daily work planner.  This application allows a user to enter dailys tasks for the hours of 9am - 5pm (Standard working hours).  The user types a task into the input boxes and then clicks the save icon to the right of each block to save their tasks.  This enteres the vaule into local storage to be retreived later.  

This application uses a function gethours(); to get the current hour in military format and enter that value into a variable (Labeled h).  The value of H is then compared to a second variable, the value of which is obtained by pulling the value of a data attribute on each time block.  The two variables are compared together and color classes are applied to each time block based on whether H is greater than, less than, or equal to the data attribute variable.

Ex: If the data variable is for hour 10 (10am) and H is greater than that, then the class for past (color gray) is applied.  If the data variable is for hour 11 (10am) and H is less than that, then the class for future (color green) is applied.  And ff the data variable is for hour 12 (12pm) and H is equal to that, then the class for present (color red) is applied.

If the calendar app is viewed outside of normal business hours.  All blocks will have the past class applied.