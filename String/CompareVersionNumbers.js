/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    var arr1 = version1.split('.'),
        arr2 = version2.split('.');
    if (arr1.length >= arr2.length) {
        return compare(arr1, arr2);
    } else {
        return -1 * compare(arr2, arr1);
    }

};

function compare(arr1, arr2) {
    for (var i = 0; i < arr2.length; i++) {
        if (parseInt(arr1[i]) > parseInt(arr2[i])) {
            return 1;
        } else if (parseInt(arr1[i]) < parseInt(arr2[i])) {
            return -1;
        } else {
            continue;
        }
    }
    if (arr1.length === arr2.length) {
        return 0;
    } else {
        for (; i < arr1.length; i++) {
            if (arr1[i] > 0) {
                return 1;
            }
        }
        return 0;
    }

}
