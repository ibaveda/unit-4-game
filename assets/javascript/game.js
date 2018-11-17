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
var images = ["assets/images/crystal1.jpg", "assets/images/crystal2.jpg", "assets/images/crystal3.jpg", "assets/images/crystal4.jpg"];

//Variable to create random number to guess.
  function randomTargetNumber () {

//This formula runs the empty var targetNumber(global var)
//it gives the targetNumber var its random number by Math.floor(which it rounds the number down)
//then the times number 102 is the the max number of 101 minus 1, after that is shows the minimun number which is 19
//so the way it works is: max number = 102(max number - 1) + 19 = 120

targetNumber = Math.floor(Math.random() * 102 ) + 19;
          console.log(targetNumber);
  }



//Functions to make it work.

//The function resetCrystal has a forloop calling  for the image array using .length
//then the var crystal is created then jquery is used to creata a <img> tag
//then the class "crystal" is created for the <img> tag
//then a attr(add attribute) is used to create the src for the images, which is declared in the images array.
//then a attr is used to give the image a value with the math.floor(Math.random) formula, the value is in between 1 and 12
//another attr is used to give a equal height style to all images
//the last line is jquery "appending" the var crystal inside the class="crystal-images", which will hold the new <img> element created
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

//The function resetHTMl is used to:
//it gives the "target-number" element the value of targetNumber which is inside the randoTargetNumber Function(the random number to guess that's displayed)
//it gives the "win-lose-counter" element the value(property?) of ("<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>")
//it gives the "score-number" element the value of counter, which in here is 0
//it clears the "crystal-image" element, which has the images, of any value so it can start fresh
function resetHTML () {
  $(".target-number").html(targetNumber);
  $(".win-lose-counter").html("<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>");
  $(".score-number").html(counter);
  $(".crystal-images").empty(); 
}

//The function totalReset is used to:
//runs the function randomTargetNumber again - new random number
//sets the counter to 0
//runs the function resetHTML - get the game to run again
//runs the function resetCrystals which holds the images
function totalReset () {
  randomTargetNumber ();
  counter = 0;
  resetHTML();
  resetCrystals();
}
//These 3 lines run inside the function above
randomTargetNumber();
resetHTML();
resetCrystals();

//Clicking Functions
//Line 82 runs the counter up using an add(+=) then parsing the attr value to an interger if it's not already
//Line 83 attaches the counter var to "score-number"
//Line 84 is if or else runs either add to wins or add to losses, then the totalReset function runs for either. Then the game restarts
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
  //the jquery .on attaches to the document(html) with the click event attaching to the class "crystal", then the crystalClick function is attached last
  $(document).on("click", ".crystal", crystalClick);
 
