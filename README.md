# PSL ReactJS Code Challenge 

This code challenge was originally supposed to be posted as a fork of [this project in Stackblitz](https://stackblitz.com/edit/psl-react-test?file=index.tsx), but for different reasons I was unable to make it work just right. So I decided to deliver the app through here.  
So, this is the original requirement:
```
## Welcome to PSL ReactJS Challenge
The API https://randomuser.me/api/ returns a random and single user, everytime you call it.

## The challenge
* CAll https://randomuser.me/api/ and create a list of users with their full name, their picture and their e-mail.
* The design must match https://firstwordpharma.com/ feel free to copy the css for buttons and list from there.
* Reuse the code as much as you can.
* Feel free to use Axios or any other library Services, and Components, and the ReactHooks, and Typescript are welcome
* Documentation and Testing is at your discretion.
  ...
```
The app uses axios to retrieve data from the Random User API.
## Running the app

```
npm start
```
## Running tests
Some basic tests will run with the command:
```
npm run test
```
Example of test:
```
describe("Users", () => {
  it("should render component <Users>", async () => {
    render(<Users />);
    expect(screen.getByText(/stories/i)).toBeInTheDocument();
  });
});
```
The tests helped to detect multiple errors and finally they passed OK
```
 PASS  src/__tests__/Footer.test.js
 PASS  src/__tests__/Users.test.js
 PASS  src/__tests__/Header.test.js

Test Suites: 3 passed, 3 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        5.714 s
Ran all test suites related to changed files.
```
# What I´d improve

 - Having more time, the styling could be still improved and we could have paginated the results of the api.

## Conclusion

My deepest thanks to the PSL team for this opportunity. It has been so  much fun to do so far and it really was a very valuable exercise.

