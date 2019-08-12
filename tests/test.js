const _ = require('../index.js')

test('convertStringToList', () => {
    let result;
    result = 'asim'.convertStringToList()
    expect(result).toStrictEqual(["a", "s", "i", "m"])
})

test('isLetter', () => {
    let result;
    result = 'a'.isLetter()
    expect(result).toBe(true)
    result = 'S'.isLetter()
    expect(result).toBe(true)
    result = '#'.isLetter()
    expect(result).toBe(false)
    result = ' '.isLetter()
    expect(result).toBe(false)
})

test('firstCharUpper', () => {
    let result;
    result = 'asim'.firstCharUpper()
    expect(result).toBe('Asim')
    result = 'hello'.firstCharUpper()
    expect(result).toBe('Hello')
    result = 'hello world'.firstCharUpper()
    expect(result).toBe('Hello world')
})

test('allCaps', () => {
    let result;
    result = 'asim'.allCaps()
    expect(result).toBe('ASIM')
    result = 'HeLlo'.allCaps()
    expect(result).toBe('HELLO')
    result = 'Hello World!'.allCaps()
    expect(result).toBe('HELLO WORLD!')
})

test('allfirstCharsToUpper', () => {
    let result;
    result = 'hi my name is asim'.allfirstCharsToUpper()
    expect(result).toBe('Hi My Name Is Asim')
    result = 'united states of america'.allfirstCharsToUpper()
    expect(result).toBe('United States Of America')
    result = 'make school!'.allfirstCharsToUpper()
    expect(result).toBe('Make School!')
})

// broken
// test('capEvOthLet', () => {
//     let result;
//     result = 'hello'.capEvOthLet()
//     expect(result).toBe('hello')
//     result = 'this!is!!awesome cool'.capEvOthLet()
//     expect(result).toBe('this!is!!awesome Cool')
// })

// wrokign on
// test('camelCase', () => {
//     let result;
//     result = 'camel case'.camelCase()
//     expect(result).toBe('camelCase')
//     result = 'my name is jeff'.camelCase()
//     expect(result).toBe('myNameIsJeff')
// })
