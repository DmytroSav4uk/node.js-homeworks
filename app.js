let fs = require('fs')

app.use(express.json());
app.use(express.urlencoded({extended: true}));

function genderChecker(gender, genderToSwap, path, newPath) {
    fs.readdir('./'+path, (err, files) => {
        for (const file of files) {
            fs.readFile(`./${path}/${file}`, (err, data) => {

                let object = JSON.parse(data.toString())

                if (object.gender.trim() === genderToSwap) {
                    fs.rename(`./${path}/${file}`, `./${newPath}/${file}`, (err) => {
                        if (err) {
                            console.log('something went wrong')
                        }
                        console.log('Rename completed');
                    });
                }
            })
        }
    });
}

genderChecker("male","female","boys","girls")

