const fs = require('fs/promises');
const path = require('path');

const pathToFile = path.join(process.cwd(), 'users', 'users.json');

module.exports = {
    reader: async () => {
        const buffer = await fs.readFile(pathToFile);
        return JSON.parse(buffer.toString())
    },

    writer: async (users) => {
        await fs.writeFile(pathToFile, JSON.stringify(users))
    }
};