/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    if (board.length === 0 || board[0].length === 0) {
        return;
    }

    var rows = board.length,
        cols = board[0].length;
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            var status = helper(board, i, j);
            if (board[i][j] === 0) {
                if (status === 3) {
                    board[i][j] += 10;
                }
            } else {
                if (status === 2 || status === 3) {
                    board[i][j] += 10;
                }
            }
        }
    }

    for (i = 0; i < rows; i++) {
        for (j = 0; j < cols; j++) {
            board[i][j] = Math.floor(board[i][j] / 10);
        }
    }
};

function helper(board, r, c) {
    var status = 0;
    for (var i = r - 1; i <= r + 1; i++) {
        for (var j = c - 1; j <= c + 1; j++) {
            if (i < 0 || j < 0 || i > board.length - 1 || c > board[0].length - 1 || (i === r && j === c)) {
                continue;
            }

            if (board[i][j] % 10 === 1) {
                status++;
            }
        }
    }

    return status;
}
