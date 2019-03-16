const enumerators = require('../enumerators');
var assert = require('assert');


describe('Enumerators',() => {
    describe('Integers', () => {
        describe('Compiled'), () => {
            it('return values one through ten', () => {
                const params = { min:BigInt(1), max:BigInt(10) };
                const result  = enumerators.integers(params);
                for(let i = params.min, j = 0; i <= params.max; i++, j++)
                    assert.equal(i.toString(), result[j]);
            });
            it('returns 100000000000000 through 100000000000010', () => {
                const params = { min:BigInt('100000000000000'), max:BigInt('100000000000010') };
                const result = enumerators.integers(params);
                for(let i = params.min, j = 0; i <= params.max; i++, j++)
                    assert.equal(i.toString(), result[j]);
            });
            it('throws error when min greater than max', () => {
                const params = { min:10, max:0}
                try{
                    const result = enumerators.integers(params);
                } catch(error){
                    assert.equal(error.message, 'min must be less than or equal to max');
                }
            });
        });
    describe('Evens', () => {
        it('return values one through ten', () => {
            const params = { min:BigInt(1), max:BigInt(10) };
            const result  = enumerators.evens(params);
            for(let i = BigInt(2), j = 0; i <= params.max; i += BigInt(2), j++)
                assert.equal(i.toString(), result[j]);
        });
        it('returns 100000000000000 through 100000000000010', () => {
            const params = { min:BigInt('100000000000000'), max:BigInt('100000000000010') };
            const result = enumerators.evens(params);
            for(let i = params.min, j = 0; i <= params.max; i += BigInt(2), j++)
                assert.equal(i.toString(), result[j]);
        })
        it('throws error when min greater than max', () => {
            const params = { min:10, max:0}
            try{
                const result = enumerators.evens(params);
            } catch(error){
                assert.equal(error.message, 'min must be less than or equal to max');
            }
        })
    })
})

