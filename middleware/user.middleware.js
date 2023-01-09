const ApiError = require('../error/ApiError');
const {fileServices} = require('../service');

module.exports = {

    checkUserExist: async (req, res, next) => {
        try {
            const {userId} = req.params;

            const users = await fileServices.reader();

            const user = users.find((u) => u.id === +userId);

            if (!user) {
                throw new ApiError("User does not exist", 404);
            }


            req.users = users;
            req.user = user;
            next();
        } catch (e) {
            next(e)
        }
    },

    isBodyValidCreate: async (req, res, next) => {
        try {

            const {name, age} = req.body;
            if (!name || name.length < 3 || typeof name !== "string") {
                throw new ApiError("Wrong name", 400);
            }

            if (!age || age <= 0 || Number.isNaN(+age)) {
                throw new ApiError('Wrong age', 400)
            }

            next();
        } catch (e) {
            next(e)
        }
    },

    isBodyValidUpdate: async (req, res, next) => {
        try {

            const {name, age} = req.body;
            if (name && (name.length < 3 || typeof name !== "string")) {
                throw  new ApiError("Wrong name", 400)
            }

            if (age && (age.length <= 0 || Number.isNaN(+age))) {
                throw  new ApiError("Wrong age", 400)
            }
            next();
        } catch (e) {
            next(e)
        }
    },


    isIdValid: async (req, res, next) => {
        try {
            const {userId} = req.params;

            if (userId < 0 || Number.isNaN(+userId)) {

                throw new ApiError("Not Valid Id", 400)
            }
            next();
        } catch (e) {
            next(e);
        }
    }
}