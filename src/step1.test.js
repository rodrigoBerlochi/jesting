describe('Matchers', () => {
	test('toBe', () => {
		expect(1).toBe(1)
	});

	test('toEqual', () => {
		let data = { age: 33 };

		expect(data).toEqual({age: 33});
		expect(data).not.toEqual({
			age: 33,
			name: 'Peter'
		});
	});

	test('Truthiness', () => {
		const mynull = null;

		expect(mynull).toBeNull();
		expect(mynull).not.toBeUndefined();
		expect(mynull).toBeDefined();
		expect(mynull).toBeFalsy();
		expect(mynull).not.toBeTruthy();
	});

	test('Floating numbers', () => {
		const aFloat = 0.1 + 0.2;

		expect(aFloat).toBeCloseTo(0.3);
	})

	test('Numbers', () => {
		const aNumber = 101;

		expect(aNumber).toBe(101);
		expect(aNumber).toBeGreaterThan(1);
		expect(aNumber).toBeGreaterThanOrEqual(101);
		expect(aNumber).toBeLessThan(102);
	});

	test('Strings', () => {
		const aStr = 'Hello World! I\'m Jest';

		expect(aStr).toBe(aStr);
		expect(aStr).toMatch(/Hello/);
		expect(aStr).toContain('Jest');
	});

	test('Arrays', () => {
		const anArr = ['apple', 'manzana', 'appel', 'mela'];

		expect(anArr).toContain('appel');
	});

	test('Errors', () => {
		expect(function () {
			throw new Error();
		}).toThrow();

		expect(function () {
			throw new Error('OMG');
		}).toThrow('OMG');
	});

});