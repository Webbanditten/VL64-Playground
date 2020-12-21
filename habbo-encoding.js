function encodeB64(number) {
    var buff = ['@', '@'];
    for (var i = 0; number > 0; ++i, number = Math.floor(number / 64))
        buff[i] = String.fromCharCode((number % 64) + 64);
    return buff.reverse().join('');
}


function decodeB64(str) {
    var nb = 0;
    for (var i = (str.length - 1), j = 0; i >= 0; --i, ++j)
        nb += (str.charCodeAt(i) - 64) * Math.pow(64, j);
    return nb;
}


/*
 ** VL64
 */


function encodeVl64(number) {
    var str = [];
    var i = 1;
    var absolute = Math.abs(number) >> 2;


    for (; absolute > 0; absolute >>= 6, ++i)
        str[i] = String.fromCharCode(64 | (absolute & 63));
    str[0] = String.fromCharCode(64 | i << 3 | (number <= 0 ? 1 : 0) << 2 | (Math.abs(number) & 3));
    return str.join('');
}


function decodeVl64(str) {
    var ret = 0;
    var ctrl = ((str.charCodeAt(0) - 64) >> 2);
    var bytes = ((ctrl >> 1) - 1);


    for (; bytes > 0; --bytes && (ret <<= 6))
        ret += (str.charCodeAt(bytes) & 63);
    ret = (ret << 2) + ((str.charCodeAt(0) - 64) & 3);
    if (ctrl & 1)
        ret *= -1;
    return ret;
}



function vl64StringToArray(incomingData) {
    let out = [];
    while (incomingData.length > 0) {
        const decodedDataPiece = decodeVl64(incomingData);
        const encodedDataPiece = encodeVl64(decodedDataPiece);

        incomingData = incomingData.substring(encodedDataPiece.length);

        out.push(decodedDataPiece);
    }
    return out;
}

module.exports = {
    vl64StringToArray,
    encodeB64,
    decodeB64,
    encodeVl64,
    decodeVl64
}