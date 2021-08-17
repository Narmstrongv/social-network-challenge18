const router = require('express').Router();

const{
    getAllUser,
} = require('../../controllers')

router.route('/api/users').get(getAllUser);

module.exports = router;