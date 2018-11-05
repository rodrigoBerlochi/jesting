// this file has some special matchers from 
// jest extended

describe('Extended', () => {

    test('Special matchers', () => {

        expect({}).toBeObject();
        expect([]).toBeEmpty();
        expect(2).toBeOneOf([1,2,3]);
        expect(5).toSatisfy(n => n < 10 && n > 1);
        expect([]).toBeArray();
        expect([]).toBeArrayOfSize(0);
        expect(true).toBeBoolean();
        expect(true).toBeTrue();

        expect(new Date()).toBeDate();
        expect(new Date()).toBeAfter(new Date('02/03/2017'));

        expect(() => {}).toBeFunction();

        expect(4).toBeNumber();
        expect(-4).toBeNegative();
        expect(1).toBeOdd();
        expect(18).toBeWithin(10, 20);

        const o = {
            size: 16,
            age: 3
        }

        expect(o).toHaveProperty('size');
        expect(o).toContainKey('size');
        expect(o).toContainKeys(['size', 'age']);
    });

    test('Special object matchers', () => {
        const o = {};
        const b = {};
        const d = {};

        Object.freeze(b);
        Object.seal(d);

        expect(o).toBeExtensible();
        expect(b).toBeFrozen();
        expect(d).toBeSealed();

    });

    test('Special for promises', async () => {
        await expect(Promise.resolve()).toResolve();

        await expect(Promise.reject()).toReject();
    });

    test('Special string matchers', () => {
        expect('GOOD').toEqualCaseInsensitive('Good');

        expect('The Lord of the Rings').toStartWith('The');
        expect('The Lord of the Rings').toEndWith('ings');
        expect('The Lord of the Rings').toInclude('of');
    })
});