# Spellchecker Coding Challenge (JavaScript)
For this challenge, I built a test-driven JavaScript program which checks the spelling of words in a given string, highlighting any words that are spelt incorrectly. It does this by checking if the words contained in the input are included in a dictionary which is declared as an instance variable. This dictionary is kept small for the purpose of this short challenge, though could be increased in size without breaking the logic of the program.

## Task
Create a spellchecker for a company that makes a word processor.
You will be given a string of a word or several words, and will return a string of these words, highlighting any words that are spelt incorrectly (e.g., ~testt~).

## Input/Output Table
See below for example input and output of the program:

__Input__                |   __Output__
-------------------------|--------------------------------------------
"words"                  |  "words"
"wrds"                   |  "~wrds~"
"wOrDs"                  |  "wOrDs"
"One twwo three"         |  "One ~twwo~ three"
"One    Two"             |  "One Two"
"Test. One, two, three." | "Test. One, two, three."
''                       |  Error: "No input has been supplied"
Incorrect data type      |  Error: "Input must be a string"
