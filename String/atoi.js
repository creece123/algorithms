/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
     if(!str || str.trim().length < 1){
         return 0;
     }
     
     var s = str.trim();
     var sign = 1, res = 0;
     for(var i = 0; i < s.length; i++){
         var code = s.charCodeAt(i);
         if(i === 0){
             if(code === 43){
                continue;
             } else if(code === 45){
                 sign = -1;
             } else if(code < 48 || code > 57){
                 return 0;
             } else {
                 res = res*10 + (s[i] - 0);
             }
         } else {
             if(code >= 48 && code <= 57){
                 res = res*10 + (s[i] - 0);
             } else {
                 break;
             }
             
             if(res > 2147483647){
                 res = 2147483648;
                 break;
             }
        } 
     }
     
     if(res * sign > 2147483647){
         return 2147483647;
     } 
     
     if(res * sign < -2147483648){
         return -2147483648;
     }
     
     return res * sign;
     
};