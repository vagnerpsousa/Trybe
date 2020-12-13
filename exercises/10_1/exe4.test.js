const myFizzBuzz = require('./exe4');

describe('myFizzBuzz', () => {
    test('Number divisible by 3 and 5. Check if the return is as expected', () => {
        expect(myFizzBuzz(15)).toEqual('fizzbuzz')
    });
    test('Number divisible by 3. Check if the return is as expected', () => {
        expect(myFizzBuzz(9)).toEqual('fizz');
    });
    test('Number divisible by 5. Check if the return is as expected', () => {
        expect(myFizzBuzz(25)).toEqual('buzz');
    });
    test('Number that is not divisible by 3 or 5. Check if the return is as expected', () => {
        expect(myFizzBuzz(13)).toEqual(13);
    });
    test('Return waiting when the parameter is not a number', () => {
        expect(myFizzBuzz('a')).toEqual(false);
    })
});