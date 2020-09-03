const myRemove = require('./exe2');
const { TestScheduler } = require('jest');

describe ('myRemove', () => {
    const a = [1, 2, 3, 4]
    test('Check myRemove([1, 2, 3, 4], 3) returns the expected array', () => {
        expect(myRemove(a, 3)).toEqual([1, 2, 4]);
    });
    test('called myRemove ([1, 2, 3, 4], 3) does not return the array [1, 2, 3, 4]', () =>{
        expect(myRemove(a, 3)).not.toEqual([1, 2, 3, 4]);
    });
    test('does not change the passed array', () => {
        expect(a).toEqual(a);
    });
    test('chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
        expect(myRemove(a, 5)).toEqual([1, 2, 3, 4]);
    });



})