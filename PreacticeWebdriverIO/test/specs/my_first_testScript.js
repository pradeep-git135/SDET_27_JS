//mocha framework provides mocha snippet using those snippet we can write our testScript
describe('test_suite1', () => {
    xit('testScript1', () => {
        console.log("this is 1st test script");
    });
});

xdescribe('test_suite2', () => {
    it('testScript1', () => {
        console.log("this is 2nd test script");
    });
});

describe('test_suite3', () => {
    it.skip('testScript1', () => {
        console.log("this is 3rd test script");
    });
});