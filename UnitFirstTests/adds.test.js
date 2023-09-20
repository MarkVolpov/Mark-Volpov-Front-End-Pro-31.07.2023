const add = require('./adds')


it('adds three numbers', () => {
    expect(add(2,3,4)).toBe(9)
})