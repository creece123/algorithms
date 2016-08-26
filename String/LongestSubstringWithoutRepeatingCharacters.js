/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var hash = {}, res = 0;
    /*for(var i = 0, j = 0; i < s.length; i++) {
        if(hash.hasOwnProperty(s[i])) {
            while(j < i) {
                delete hash[s[j]];
                if(s[j++] == s[i]) {
                    break;
                }
            }
        } 
        hash[s[i]] = 1;
        res = Math.max(i - j + 1, res);
    }*/
    
    for(var i = 0, j = 0; i < s.length; i++) {
      if(hash.hasOwnProperty(s[i])){
          while(s[j] !== s[i]){
              delete hash[s[j]];
              j++;
          }
          j++;
      }
      
      hash[s[i]] = i;
      res = Math.max(i-j+1, res);
    }
    return res;
};