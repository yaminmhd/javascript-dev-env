import {expect} from 'chai';
//import fs from 'fs';
//const jsdom = require('jsdom');
//const{JSDOM} = jsdom;
//const dom = new JSDOM();

describe('Our first test', ()=>{
  it('should pass', ()=>{
    expect(true).to.equal(true);
  })
});

// describe('index.html', ()=>{
//   it('should say hello', (done)=>{
//     const index = fs.readFileSync('./src/index.html', "utf-8");
//     dom.env(index, function(err, window){
//       const h1 = window.document.getElementsByTagName('h1')[0];
//       expect(h1.innerHTML).to.equal("Hello World!");
//       done();
//       window.close();
//     });
//   })
// });


