const router = require('express').Router();

const{
    getAllUser,
} = require('../../controllers/user-controller');

router.route('/').get(getAllUser);

module.exports = router;