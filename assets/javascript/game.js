	
var wins = 0;
var losses = 0;
var score = 0;
var beatleArray = ["assets/images/john.jpg", "assets/images/paul.jpg", 
			  	   "assets/images/george.jpg", "assets/images/ringo.jpg"];
var message = "";
var counter = 0;
var target = 0;

// =======================================

// get target number

	function getTarget() {
 	 	var target = Math.floor((Math.random() * 120) + 19);
 	 	$("#targetNumber").html("Target Number: " + target);
 	 	console.log(target);
} //end getTarget


// Get values for images

function getBeatNumb() {

	function getJohnValue() {
  	  var john = Math.floor((Math.random() * 12) + 1);
  	  $("#johnImg").html(john);  
  	  console.log(john);
} //end getJohn

	function getPaulValue() {
  	  var paul = Math.floor((Math.random() * 12) + 1);
  	  $("#paulImg").html(paul);  
  	  console.log(paul);
} //end getPaul

	function getGeorgeValue() {
  	  var george = Math.floor((Math.random() * 12) + 1);
  	  $("#georgeImg").html(george);  
  	  console.log(george); 
} //end getGeorge

	function getRingoValue() {
  	  var ringo = Math.floor((Math.random() * 12) + 1);
  	  $("#ringoImg").html(ringo);  
  	  console.log(ringo);
} //end getRingo

} //end getBeatNumb


//===========================================

// game play

 $(".beatles").on("click", function() {
        var clickValue =  ;              //??????
        var clickValue = parseInt(clickValue);
        counter += clickValue;
        $("#totalScore") = "Your score: " + counter;
        console.log(counter);

    if (counter === target) {
    	wins++;
        $("#wins") = "Wins: " + wins;
        console.log(wins);
    } // end if

    else if (counter > target) {
         losses++;
         $("#losses") = "Losses: " + losses;
         console.log(losses);
            
    } // end if else

   }); // end on click function


// ===========================================
getTarget();
getBeatNumb();
