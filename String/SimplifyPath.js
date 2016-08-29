/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    if (path === null || path.length <= 1) {
        return path;
    }
    if (path[path.length - 1] === '/') {
        path = path.substring(0, path.length - 1);
    }

    path.replace('//', '/');

    var arr = path.split('/'),
        stack = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === '.') {
            continue;
        }

        if (arr[i] === '..') {
            if (stack.length > 0) {
                stack.pop();
            }
        } else {
            if (arr[i].length > 0) {
                stack.push(arr[i]);
            }
        }

    }

    if (stack.length === 0) {
        return '/';
    }
    var res = '';
    while (stack.length > 0) {
        res += '/' + stack.shift();
    }

    return res;
};
