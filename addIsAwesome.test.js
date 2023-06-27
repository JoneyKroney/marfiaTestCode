const { addIsAwesome } = require('./addIsAwesome');

describe('addIsAwesome', () => {
  // your code here.
  test('p input for add is awasome', () => {
    addIsAwesome('p', (input) => {
      expect(input).toBe('p is Awesome');
    });

    
  });

  // test('undefined input for add is awasome', () => {
  //   expect((undefined) => addIsAwesome()).toThrow(TypeError);

  // });
  

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