const openDB = ()=>{};
const closeDB = ()=>{};
const resetMock =()=>{};
const setupMock = ()=>{};

// scope whole file
beforeAll(()=>{
    return openDB(); // it returns a promise!
});

beforeEach(()=>{
    setupMock();
});

afterEach(()=>{
    resetMock();
});

afterAll(()=>{
    return closeDB(); 
});

describe('Setup & tear down', () => {

    // scope limited to this describe only
    afterAll(()=>{});

    test('TearDown', ()=>{

    });
});
