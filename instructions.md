# Project 1: File handling in JavaScript

## Problem description
Once a year a walking club asks all its members to submit the total number of miles they have walked. The club collates this information in a text file. A section of the .txt file, which includes the names of members and the total miles they walked, is shown below.

Nikolai,Bryant,145.6<br>
Susan,Brown,34.2<br>
Teressa,Jones,398.5

The information in the file is then used to select prize winners. Prizes will be awarded for:
- the furthest distance walked
- any members who have walked more than 70% of the furthest distance

A program is required to read the data for each member from the text file. The program should use this data to find then display the furthest distance walked. The names of every member who has walked more than 70% of the furthest distance should be written to an empty text file so that the file can be printed out later

## Program top-level design (pseudocode)
1. Read members’ data from file into array of records (OUT: members(forename,surname,distance))
2. Find the furthest distance walked (IN: members(forename,surname,distance)
OUT: furthest)
3. Display the furthest distance walked (IN: furthest)
4. Write club prize winners to file (IN: members(forename,surname,distance), furthest)

---

## Your Task
Using the problem description and design, implement a solution in HTML, CSS & JavaScript

Your program should:
- be maintainable and modular
- use a function to find and return the furthest distance walked by a member
- use a procedure to display the furthest distance walked
- follow the design and the refinements provided

## You will need
- to copy the files 'members.txt' and 'membersShort.txt' and save them on your computer.