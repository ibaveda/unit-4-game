//I'm gonna write a lot of pseudo code to help me digest and understand things better.

//Variables for main number to guess, wins, losses, counter(it adds the numbers) and images.
//The first variable targetNumber will populate the <div ".target-number"> with the randomly generated number in the first function.
//The wins and losses start at 0 then go up from there.
//the counter is used to add the numbers and populates <div ".score-number">. It is also used on the if else statement since it is the number the whole game is based on.
//the image var holds an array with the image src, which is called within the forloop that's inside the resetCrystals function.

var targetNumber = "";
var wins = 0;
var losses = 0;
var counter = 0;
var images = ["/Homework/HW4/unit-4-game/assets/images/crystal1.jpg", "/Homework/HW4/unit-4-game/assets/images/crystal2.jpg", "/Homework/HW4/unit-4-game/assets/images/crystal3.jpg", "/Homework/HW4/unit-4-game/assets/images/crystal4.jpg"];

//Variable to create random number to guess.
  function randomTargetNumber () {

//This formula runs the empty var targetNumber(global var)
//it gives the targetNumber var its random number by Math.floor(which it rounds the number down)
//then the times number 102 is the the max number of 101 minus 1, after that is shows the minimun number which is 19
//so the way it works is: max number = 102(max number - 1) + 19 = 120

targetNumber = Math.floor(Math.random() * 102 ) + 19;
          console.log(targetNumber);
  }



//functions to make it work.

//this function has a forloop calling  for the image array using .length
//then the var crystal is created then jquery is used to creata a <img> tag
//then the class "crystal" is created for the <img> tag
//then a add attribute is used to create the src for the images, which is inside the images array.
function resetCrystals () {
  for (var i =0; i < images.length; i++) {
    var crystal = $("<img>");
    crystal.addClass("crystal");
    crystal.attr("src", images[i]);
    crystal.attr("value", (Math.floor(Math.random() * 12) + 1));
    crystal.attr("height", "100");
    $(".crystal-images").append(crystal);
   }
}

function resetHTML () {
  $(".target-number").html(targetNumber);
  $(".win-lose-counter").html("<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>");
  $(".score-number").html(counter);
  $(".crystal-images").empty(); 
}

function totalReset () {
  randomTargetNumber ();
  counter = 0;
  resetHTML();
  resetCrystals();
}

randomTargetNumber();
resetHTML();
resetCrystals();

//Clicking Functions
  function crystalClick () {
    counter += parseInt($(this).attr("value"));
    $(".score-number").html(counter);
    if (counter == targetNumber) {
      wins++;
      totalReset();
    }
    else if (counter > targetNumber) {
      losses++;
      totalReset();
    };
  };
  $(document).on("click", ".crystal", crystalClick);
 