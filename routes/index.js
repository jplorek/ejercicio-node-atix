const express = require('express');
const fs = require('fs');
const router = express.Router();
const { readFile, writeFile, getRows } = require('../services');
const generateHash = require('../helpers/generateHash');
const validateHash = require('../helpers/validateHash');

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'server ok'
    });
});

router.get('/messages', async (req, res) => {
    try{
        const previusRow = await getRows();
        const message = validateHash(previusRow, index = 1);
        res.status(200).json({
            message
        });
    }catch(err){
        console.log(err)
        res.json({
            message: "there has been an error",
            error: err
        });
    }
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
        res.json({
            message: "there has been an error",
            error: err
        });
    }
})


module.exports = router;