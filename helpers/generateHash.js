const crypto = require('crypto');

function generateHash(rowToHash, msg, nonce){
    const hash = crypto.createHash('sha256');
    const hashedRow = hash.update(rowToHash + nonce, 'utf8').digest('hex').toString();

    if(hashedRow.startsWith('00')){
        return[{ prev_hash: hashedRow, message: msg, nonce: nonce }];
    }

    nonce++;
    return generateHash(rowToHash, msg, nonce);
}

module.exports = generateHash;