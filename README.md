# Lab 8 - Starter

## Completed by Triston Babers

<img width="506" alt="image" src="https://user-images.githubusercontent.com/81139313/203257525-faa8f30c-e353-4193-8721-7abb3a69e855.png">

### Check Your Understanding
1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.
- Answer: Within a Github action that runs whenever code is pushed  
I chose this option because automated tests should be run as quickly and as often as possible, in order to allow bug fixing and code review to happen as soon after the code has been written as possible. This makes it easier for developers to not have to worry about manually running tests which may slow them down, and will give them a goal to work towards by showing a log for each new push to GitHub; thus they know there is still work to do while there are validation errors.

2) Would you use an end to end test to check if a function is returning the correct output?  
- **No**, because end to end testing entails testing each and every part of the software, and testing a specific function could be done more easily via a unit test script that only runs the function and compares its output.

3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
- No because this is too complicated for a unit test, and would require End-to-End Testing as there are two systems that need to be connected together for the feature to work and be fully tested.

4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
- Yes, because no message needs to be sent for the validity test to run. So you can run this sort of test in a vacuum and make sure it works correctly in isolation without actually sending any messages.
