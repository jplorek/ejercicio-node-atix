const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'server ok'
    });
});

router.get('/messages', (req, res) => {
    res.status(200).json({
        message: "validate block"
    });
})

router.post('/messages', (req, res) => {
    res.status(200).json({
        message: "Create line"
    });
})


module.exports = router;