/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    if (board.length < 9 || board[0].length < 9) {
        return false;
    }
    var num = 0,
        used = [];
    for (var i = 0; i < board.length; i++) {
        used = Array(9).fill(false);
        for (var j = 0; j < board[0].length; j++) {
            if (!isDigit(board[i][j])) {
                continue;
            }
            num = board[i][j] - '0';
            if (num === 0 || used[num - 1]) {
                return false;
            }
            used[num - 1] = true;
        }
    }

    for (i = 0; i < board[0].length; i++) {
        used = Array(9).fill(false);
        for (j = 0; j < board.length; j++) {
            if (!isDigit(board[j][i])) {
                continue;
            }
            num = board[j][i] - '0';
            if (num === 0 || used[num - 1]) {
                return false;
            }
            used[num - 1] = true;
        }
    }

    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            var row = 3 * i;
            var col = 3 * j;
            used = Array(9).fill(false);
            for (var m = row; m < row + 3; m++) {
                for (var n = col; n < col + 3; n++) {
                    if (!isDigit(board[m][n])) {
                        continue;
                    }
                    num = board[m][n] - '0';
                    if (num === 0 || used[num - 1]) {
                        return false;
                    }
                    used[num - 1] = true;
                }
            }
        }
    }

    return true;
};

function isDigit(c) {
    if (c >= '0' && c <= '9') {
        return true;
    } else {
        return false;
    }
}
