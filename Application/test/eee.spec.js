import {toRomanNumeral } from '../romans'
describe('Roman numerals', () =>{
    test('1 returns roman I', () => {
        expect(toRomanNumeral(1)).toEqual('I');
    });

    test('should return roman "II" when given 2', () => {
        expect(toRomanNumeral(2)).toEqual('II')
    });
});