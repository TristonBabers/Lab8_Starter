# Lab 8 - Starter

## Completed by Triston Babers

1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

- Answer: Within a Github action that runs whenever code is pushed  
I chose this option because automated tests should be run as quickly and as often as possible, in order to allow bug fixing and code review to happen as soon after the code has been written as possible. This makes it easier for developers to not have to worry about manually running tests which may slow them down, and will give them a goal to work towards by showing a log for each new push to GitHub; thus they know there is still work to do while there are validation errors.

2) Would you use an end to end test to check if a function is returning the correct output?  
- **No**, because end to end testing entails testing each and every part of the software, and testing a specific function could be done more easily via a unit test script that only runs the function and compares its output.
