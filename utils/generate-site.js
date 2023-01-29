const fs = require('fs');

const writeFile = fileContent => {

    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err =>{
          if (err){
            reject (err)
          }

          resolve({
            ok: true,
            message: 'File created'
          })
        })

    })
}

// copying file
const copyFile = () => {
    return new Promise((resolve, reject) => {
      fs.copyFile('./src/style.css', './dist/style.css', err => {
        if (err) {
          reject(err);
          return;
        }
  
        resolve({
          ok: true,
          message: 'Stylesheet created!'
        });
      });
    });
  };



//demo html file

const samplehtml ='<h1> Mekonnen DOMO</>'

writeFile(samplehtml)
.then(successfulResponse => {
    console.log(successfulResponse);
})
.catch(errorResponse =>{
    console.log(errorResponse);
});




module.exports = {
    writeFile, copyFile
};