let person = prompt("What is your name?");

if (person != null) {
  document.getElementById("space").innerHTML =
   "Hey," +  " " + person +  " " + "fill your cookie jar!";
}

var num = 1;

function clicker(){ 
    document.querySelector(".cookieClicker").innerHTML = num++ + " cookies";
//automatic baker upgrade to +3 cookies
if (num >= 29){
 num += 2;
//automatic factory upgrade to +9 cookies
} if(num >= 300) {
 num += 9;
}
}
