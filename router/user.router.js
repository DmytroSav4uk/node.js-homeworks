const router = require('express').Router();

const controller = require('../controller/user.controller');
const middleware = require('../middleware/user.middleware');

router.get("/", controller.getAllUsers);

router.post(
    "/",
    middleware.isBodyValidCreate,
    controller.createUser
);

router.get(
    "/:userId",
    middleware.isIdValid,
    middleware.checkUserExist,
    controller.getUserById
);

router.put(
"/:userId",
    middleware.isIdValid,
    middleware.isBodyValidUpdate,
    middleware.checkUserExist,
    controller.updateUser
);

router.delete(
    "/:userId",
    middleware.isIdValid,
    middleware.checkUserExist,
    controller.deleteUser
)


module.exports = router;

