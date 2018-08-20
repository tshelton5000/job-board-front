fdescribe('a describe block', () => {
    it('passes if there are no expects', () => {
           
    });
    it('fails if an error is thrown', () => {
        throw 'some error';
    });

    it('can log to the console like any JavaScript', () => {
        console.log('shows up in the browser dev tools', {'prop':'even objects'});
    })

    it('asserts 1 is 1', () => {
        expect(1).toBe(1);
    });

    it('asserts 1 is 2', () => {
        expect(1).toBe(2);
    })
});