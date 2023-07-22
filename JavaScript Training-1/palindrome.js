function palindrome(num){
   const reversedstr = num.split("").reverse().join("");
   return num===reversedstr;

}
    console.log(palindrome("176"));
    console.log(palindrome("151"));


    