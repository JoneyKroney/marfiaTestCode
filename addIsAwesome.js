const addIsAwesome = function (baseString, cb) {
  // your code here.
  // if (!(typeof baseString === 'string' || baseString instanceof String)){
  //   throw new TypeError('Non String input');
  // }
  

   cb(baseString + ' is Awesome');
};

export { addIsAwesome };
