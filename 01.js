const fs = require('fs')

function readDir() {
        fs.readdir('/', (err, result) => {
            return new Promise(function(resolve, reject) {
              if (err) {
                reject(err.message)
              }
              resolve(result)
              console.log(result)
            })
        })
}

readDir()

