// 接受两个参数，第一个表示这个测试用例的名字，第二个是回调函数可以编写逻辑
test('test common matcher',() => {
    expect( 2 + 2).toBe(4)
    expect( 2 + 2).toEqual(4)
    expect(2 + 2).not.toBe(5)
})


test('test booleam',() => {
    expect(1).toBeTruthy()
    expect(0).toBeFalsy()
})


test('test number',() => {
    expect(1).toBeGreaterThan(0)
    expect(1).toBeLessThan(2)
})

test('test obj', ()=> {
    // toEqual 表示只是值相同 而toBe则是完全相同
    expect({name : '123'}).toEqual({name : '123'})
    // expect({name : '123'}).toBe({name : '123'})
})
