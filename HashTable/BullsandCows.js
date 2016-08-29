/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    var hash = {},
        res = '';
    for (var i = 0; i < secret.length; i++) {
        if (hash.hasOwnProperty(secret[i])) {
            hash[secret[i]]++;
        } else {
            hash[secret[i]] = 1;
        }
    }

    var a = 0,
        b = 0;
    for (i = 0; i < guess.length; i++) {
        if (secret[i] === guess[i]) {
            a++;
            hash[guess[i]]--;
        } else if (hash.hasOwnProperty(guess[i])) {
            b++;
            hash[guess[i]]--;
        }
    }

    for (var k in hash) {
        if (hash[k] < 0) {
            b += hash[k];
        }
    }

    res = '' + a + 'A' + b + 'B';

    return res;
};
