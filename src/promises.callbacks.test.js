// for asyncs, use fetch-mock to simply mock response
// for a given url
const fetchMock = require('fetch-mock');

// another approach without dependecy:
/*window.fetch = jest.fn().mockImplementationOnce(() => {
    return Promise.resolve();
});*/

describe('Async', () => {

    test('Using Promises', () => {
        fetchMock.once('http://dummy1.com', {
            status: 200,
            body: {"name": "Jon"}
        });

        // do not use DONE, it works over promise resolve/reject
        // use always RETURN and assertions to ensure test works
        expect.assertions(1);

        return fetch('http://dummy1.com').then((res) => {

            return res.json();
        
        }).then((response) => {
        
            expect(response.name).toMatch("Jon");
       
        }).catch((e) => {});
    });

    test('Promises using Resolve', () => {
        fetchMock.once('http://co.some', 'Hello!');
        expect.assertions(1);

        return expect(
                    fetch('http://co.some').then(res => res.text())
                ).resolves.toBe('Hello!');
    });

    test('Done', (done) => {

        function cb (data) {
            expect(data).toBeDefined();
            done();
        }

        function dummyAsyncReq (callb) {
            var data = 'completed';
            setTimeout(() => {
                callb(data);
            }, 1000);
        }

        dummyAsyncReq(cb);

    })

});