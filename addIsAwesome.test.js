const { addIsAwesome } = require('./addIsAwesome');

describe('addIsAwesome', () => {
  // your code here.
  test('p input for add is awasome', () => {
    expect(addIsAwesome('p')).toEqual('p is Awesome');
  });

  test('dogs input for add is awasome', () => {
    expect(addIsAwesome('dogs')).toEqual('dogs is Awesome');

  });
  test('undefined input for add is awasome', () => {
    expect((undefined) => addIsAwesome()).toThrow(TypeError);

  });
  test('Null input for add is awasome', () => {
    expect((Null) => addIsAwesome()).toThrow(TypeError);

  });
  test('Multi string input for add is awasome', () => {
    expect(addIsAwesome('p', 'p', 'p', 'p')).toEqual('p is Awesome');

  });
  test('number input for add is awasome', () => {
    expect( addIsAwesome(1)).toThrow(TypeError);

  });

});
//string inputs

//dogs
//p
//abcdefghijklmnopqrstuvwxyz
//pppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp
//1
//123456789
//$%/\\{}@#!*&%^$

//non string inputs

//Null
//undefined
//false true
//number
//object
//fucntion

// mutiple inputs into function