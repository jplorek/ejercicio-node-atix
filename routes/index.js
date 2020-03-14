const express = require('express');
const fs = require('fs');
const router = express.Router();
const { readFile, writeFile } = require('../services');
const { generateHash } = require('../helpers/generateHash');

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'server ok'
    });
});

router.get('/messages', async (req, res) => {
    res.status(200).json({
        message: "validate block"
    });
})

router.post('/messages', async (req, res) => {
    try {
        let rowToinsert;
        let message;

        if (!fs.existsSync('./archive/blcokList.csv')) {
            rowToinsert = generateHash((new Date()).valueOf().toString(), req.body.message, nonce = 1);
            message = await writeFile(rowToinsert);
            res.status(200).json({
                message
            });
            return;
        }

        const previusRow = await readFile();
        rowToinsert = generateHash(Object.values(previusRow).join(''), req.body.message, nonce = 1);
        message = await writeFile(rowToinsert);
        res.status(200).json({
            message
        });

    } catch (err) {
        res.status(400).json({
            message: "there has been an error",
            error: err
        });
    }
})


module.exports = router;