# TBC Coding Challenge (JavaScript)
For this challenge, I built a test-driven JavaScript program which...



## Task
This is for a company that makes a word processor
Spellchecker
Input is a string, output is a string
If string contains incorrectly spelt word(s), this/these should be highlighted
- E.g., ~misspelling~

## Input/Output Table
See below for example input and output of the program:

__Input__               |   __Output__
------------------------|--------------------------------------------
"words"                 |  "words"
"wrds"                  |  "~wrds~"
"wOrDs"                 |  "wOrDs"
"One twwo three"        |  "One ~twwo~ three"
''                      |  Error: "No input has been supplied"
Incorrect data type     |  Error: "Input must be a string"


**Extra (still highlight misspelt words):**
Extra spaces
"One    Two" | "One    Two"
Punctuation
"Test. One, two, three." | "Test. One, two, three."