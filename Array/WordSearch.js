/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    if (board.length === 0 || board[0].length === 0) {
        return false;
    }
    var visited = [],
        row = 0,
        col = 0;
    for (; row < board.length; row++) {
        visited.push(Array(board[row].length).fill(false));
    }

    for (row = 0; row < board.length; row++) {
        for (col = 0; col < board[row].length; col++) {
            if (findWord(board, visited, row, col, word, 0)) {
                return true;
            }
        }
    }

    return false;
};

function findWord(board, visited, row, col, word, idx) {
    if (idx === word.length) {
        return true;
    }

    if (row < 0 || col < 0 || (row >= board.length) || (col >= board[row].length) || visited[row][col] || word[idx] != board[row][col]) {
        return false;
    }

    visited[row][col] = true;
    if (findWord(board, visited, row - 1, col, word, idx + 1)) return true;
    if (findWord(board, visited, row + 1, col, word, idx + 1)) return true;
    if (findWord(board, visited, row, col - 1, word, idx + 1)) return true;
    if (findWord(board, visited, row, col + 1, word, idx + 1)) return true;
    visited[row][col] = false;
    return false;

}
