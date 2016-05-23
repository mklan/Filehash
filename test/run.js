/**
 * Created by Matthias on 23.05.2016.
 */
var open = require("open");
var path = require('path');

function pathTo(asset) {
    return path.join(__dirname, asset);
}



open(pathTo('test.html'));