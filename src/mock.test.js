const random = require('math-random');
jest.mock('math-random');


const targetFunc = (callback) => {
    callback(true, 2);
}

describe('Mocking', () => {

    test('Builtin mocking functions', () => {
        const mockFn = jest.fn(() => { return {} });

        targetFunc(mockFn);

        // how many times it was called
        expect(mockFn.mock.calls.length).toBe(1);
        // first call, first argument is...
        expect(mockFn.mock.calls[0][0]).toBe(true);
        // first call, second argument is...
        expect(mockFn.mock.calls[0][1]).toBe(2);
        // test returned result
        expect(mockFn.mock.results[0].value).toEqual({});
    });

    test('Returned values', () => {
        const mockF = jest.fn();

        mockF.mockReturnValueOnce(1)
            .mockReturnValueOnce(2)
            .mockReturnValue(3);

            expect(mockF()).toBe(1);
            expect(mockF()).toBe(2);
            expect(mockF()).toBe(3);

    });

    test('Mock a whole module', () => {

        random.mockImplementation(() => 42);

        expect(random()).toBe(42);
        expect(random()).not.toBe(43);
    });

    test('Mocking features', () => {

        const fluidAPI = jest.fn().mockReturnThis();

        const rejectMocked = jest.fn().mockRejectedValue('Error');

        rejectMocked().catch((err) => {
            expect(err).toBe('Error');
        })

    });

    test('Simplified API for mocks', () => {
        const egg = jest.fn().
            mockImplementation((a, b) => { return a + b; }).
            mockName('eggMocked');

            egg(2, 5);

            expect(egg).toBeCalled(); // egg.mock.calls.length
            expect(egg).toBeCalledTimes(1);

            expect(egg).toBeCalledWith(2, 5); // egg.mock.calls[0][0] & egg.mock.calls[0][1]

            expect(egg).toMatchSnapshot(); // to eval also functions!
    });

});