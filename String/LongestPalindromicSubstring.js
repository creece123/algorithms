/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(!s || s.length <=1){
        return s;
    }
    var longest = '';
    for(var i = 0; i < s.length; i++){
        var str1 = helper(s, i, 0);
        var str2 = helper(s, i, 1);
        if(str1.length > longest.length){
            longest = str1;
        }
        
        if(str2.length > longest.length){
            longest = str2;
        }
    }
    
    return longest;
};

function helper(s, idx, offset){
    var left = idx, right = left + offset;
    while(left >= 0 && right < s.length && s[left] === s[right]){
        left--;
        right++;
    }
    return s.substring(left + 1, right);
    
}