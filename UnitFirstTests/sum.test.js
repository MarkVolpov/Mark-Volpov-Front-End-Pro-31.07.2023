const { default: expect } = require('expect')
const sum = require('./sum')



it("properly adds two numbers", () => {
    expect(sum(1,2)).toBe(3)
})