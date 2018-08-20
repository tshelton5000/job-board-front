fdescribe('a describe block', () => {
    it('passes if there are no expects', () => {

    });

    it('fails if an error is thrown', () => {
        throw ('some error');
    });

    it('fails no matter how your error is thown', () => {
        throw new Error('some error');
    });

    it('can log to the console like any JavaScript', () => {
        //all the console logging methods push messages 
        console.log('shows up in the browser', {'prop': 'even objects'})
    });

    it('asserts 1 is 2',()=>{
        //failed expetions throw errors
        expect(1).toBe(2);
    });
})