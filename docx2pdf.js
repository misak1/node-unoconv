var unoconv = require('unoconv2');
var fs = require('fs-extra');

unoconv.convert('document.docx', 'pdf', function (err, result) {
    // result is returned as a Buffer
    fs.writeFile('converted.pdf', result);
});
