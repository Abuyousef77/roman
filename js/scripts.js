// TODO 
//      2. Add functionality to numbers >= 4000 && numbers <= 3,999,999 qqqqqq

// BACK END LOGIC

function convert(num) {
  var roman="";
  var romanNumeral = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  var arabic = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
  for( i=0;i<arabic.length;i++){
    while(num>=arabic[i]){
      roman = roman + romanNumeral[i];
      num = num - arabic[i];
    };
  };
return roman;
};



// FRONT END LOGIC

function empty() {
    var x;
    x = document.getElementById("userInput").value;
    if (x <= 0 || x >= 4000) {
        alert("Please enter a number between 1 and 3,999");
        return false;
    };
}

$(document).ready(function() {
  $("form").submit(function(event) {
    var red = $("input#userInput").val();
    $(".output").text(convert(red));
    event.preventDefault();


  });
});


// TESTING CALCULATOR TO WORK ON NUMBERS >= 4000
//
// if $("#userInput".length >= 4 && "#userInput".charAt(0) >= 4) {
//   greaterThanFourThousand("#userInput")
//   }
//   else {convert("#userInput")
//
//   }


//
// function greaterThanFourThousand(num) {
//   var roman="";
//   var romanNumeral = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
//   var arabic = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
//   for( i=0;i<arabic.length;i++){
//     while(num>=arabic[i]){
//       roman = roman + romanNumeral[i];
//       num = num - arabic[i];
//     };
//   };
// return roman;
// };
