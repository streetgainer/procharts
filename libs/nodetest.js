var Gdax = require('gdax');
var publicClient = new Gdax.PublicClient('BTC-USD');
var fs = require('fs');
var wstream = fs.createWriteStream('price.txt',{'flags': 'a'});
