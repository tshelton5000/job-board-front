describe('a describe block', () => {
});

it('passes if there are no expects', () => {

});
it('fails if an error is thrown', () => {
    throw 'some error';
});
it('fails no matter how your error is thrown', () => {
    throw new Error('some error');
});
it('fails if you intentionally call fail()', () => {
    fail('reach some logic I shouldn\'t have');
});
it('cant log to console like any Javascript', () => {
    console.log('shows up inthe browser dev tools log as usual', { 'prop': "even objects as usual" });
});
it ('asserts 1 is 1', () => {

    expect(1).toBe(1);
})
it('asserts 1 is 2', () => {
    
    expect(1).toBe(2);
})
// });