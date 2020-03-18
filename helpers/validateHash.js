const crypto = require('crypto');

function validateHash (rowList, i) {
    const hash = crypto.createHash('sha256');
    const previoussRow = hash.update(Object.values(rowList[i - 1]) + rowList[i].nonce, 'utf8').digest('hex').toString();
    if(rowList[i.prev_hash !== previoussRow]){
        return `The hash ${rowList[i].prev_hash} does not match with the previous row`
    }
    if(rowList.length === i + 1){
        return 'Valid Block';
    }
    i++;
    return validateHash(rowList, i);

}


module.exports = validateHash;