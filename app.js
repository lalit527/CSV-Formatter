const fastcsv = require('fast-csv')
console.log('start');

fastcsv.fromPath('input.txt').on('data', function(data){
     console.log(data.length);
});

console.log('end');