/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    if(!matrix || matrix.length === 0){
        return;
    }
    var empty_row = false, empty_col = false, row = 0, col = 0;
    for(; col < matrix[0].length; col++){
        if(matrix[0][col] === 0){
            empty_row = true;
        }
    }
    
    for(;row < matrix.length; row++){
        if(matrix[row][0] === 0){
            empty_col = true;
        }
    }
    
    for(row = 1; row< matrix.length; row++){
        for(col = 1; col < matrix[0].length; col++){
            if(matrix[row][col] === 0){
                matrix[0][col] = 0;
                matrix[row][0] = 0;
            }
        }
    }
    
    for(row = 1; row< matrix.length; row++){
        for(col = 1; col < matrix[0].length; col++){
            if(matrix[0][col] === 0 || matrix[row][0] === 0){
                matrix[row][col] = 0;
            }
        }
    }
    
    if(empty_row){
        for(col=0; col < matrix[0].length; col++){
            matrix[0][col] = 0;
        }
    }
    
     if(empty_col){
        for(row=0; row < matrix.length; row++){
            matrix[row][0] = 0;
        }
    }
    
    
};