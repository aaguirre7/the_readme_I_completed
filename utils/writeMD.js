const fs = require('fs');

/**
 * 
 * @param {string} fileContent 
 */
function writeFile(fileContent) {
    console.log(fileContent);
    fs.writeFile('./dist/README.md', fileContent,err =>{
        if(err){
            throw err
        }
        console.log('README created')
    })
       
}

  module.exports = writeFile;