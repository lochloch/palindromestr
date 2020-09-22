// Check the string is palindrome or not

function strPalindrome(str) {
    var isPal = true;
    str = str.toLowerCase();
    var len = str.length;
    for (var i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            isPal = false;
            break;
        }
    }
    if (isPal) {
        console.log(str + " is Palindrome");
    } else {
        console.log(str + " is Not Palindrome");
    }
    return isPal;
}

strPalindrome("eye");
strPalindrome("handh");

