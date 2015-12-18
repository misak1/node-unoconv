var unoconv = require('unoconv2');
var fs = require('fs-extra');

unoconv.convert('document.pptx', 'png', function (err, result) {
// unoconv.convert('/Users/mac/Documents/vhosts/broccoli-img-editor-field/tests/testdata/htdocs/editpage/index_files/guieditor.ignore/resources/f14611868d1de60a2ef4015862e2e5ed/bin.txt', 'png', function (err, result) {
    // result is returned as a Buffer
    // fs.writeFile('converted.png', result); // これでもOK
    console.log(result);
    // console.log(result.toString('base64'));

});
