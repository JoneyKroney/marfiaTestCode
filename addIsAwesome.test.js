const { addIsAwesome } = require('./addIsAwesome');

describe('addIsAwesome', () => {
  // your code here.
  test('p input for add is awasome', () => {
    expect(addIsAwesome('p')).toEqual('p is Awesome');
  });
});
