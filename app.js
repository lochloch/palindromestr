// Check the string is palindrome or not

function strPalindrome(str){

    str = str.toLowerCase();
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
          return false;
        }
        return true;
        
}

}

var check = strPalindrome("eye");
var check1 = strPalindrome("hand");

if(check){
    console.log("Palindrome");
}else{
    console.log("Not Palindrome");
}

