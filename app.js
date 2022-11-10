let fs = require('fs')


fs.readdir('./boys', (err, files) => {

    for (const file of files) {
        fs.readFile(`./boys/${file}`, (err, data) => {

                let object = JSON.parse(data.toString())

                if (object.gender === 'female'.trim()) {
                    fs.rename(`./boys/${file}`, `./girls/${file}`, (err) => {
                        if (err) {
                            console.log('something went wrong')
                        }
                        console.log('Rename completed');
                    });
                }
            }
        )
    }
});


fs.readdir('./girls', (err, files) => {
    for (const file of files) {
        fs.readFile(`./girls/${file}`, (err, data) => {

            let object = JSON.parse(data.toString())

            if (object.gender === 'male'.trim()) {
                fs.rename(`./girls/${file}`, `./boys/${file}`, (err) => {
                    if (err) {
                        console.log('something went wrong')
                    }
                    console.log('Rename completed');
                });
            }
        })
    }
});