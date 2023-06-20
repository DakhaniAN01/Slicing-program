slice ():

Slice function is used to extract string from a given string and returns as new string without modification in main string
for example to select "Amazon" from string "Amazon Web Services" and return the string , indexing is used. 
a = Name.slice(0,Name.indexOf("W")-1);
In this case a will select all letters starting from INDEX 0 to the INDEX of Letter W
Name.indexOf("W")-1 indicates one element before letter W is removed (i.e. Blank Space in this case)