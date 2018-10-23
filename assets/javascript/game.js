
//GLOBAL VARIABLES
//===========================================
var characters = {
    luke: {
      name: "Luke",
      health: 120,
      attackPower: 2,
      counterAttackPower: 15,
    },
  
    yoda: {
      name: "Yoda",
      health: 100,
      attackPower: 4,
      counterAttackPower: 5,
    },
  
    darthVader: {
      name: "Darth Vader",
      health: 150,
      attackPower: 1,
      counterAttackPower: 20,
    },
  
    darthSidious: {
      name: "Darth Sidious",
      health: 180,
      attackPower: 1,
      counterAttackPower: 25,
    },
  };
  //Debugging
  console.log(characters);
  
  // Has the user selected their character
  var characterSelected = false;
  
  // Has the user selected the defender
  var defenderSelected = false;
  
  // Variable to store the user's chosen character
  var character = {};
  
  // Variable to store the chosen enemy
  var defender = {};
  
  // Number of enemies defeated
  var enemiesDefeated = 0;
  
  // Boolean to indicate whether or not the game is over
  var gameOver = false;
  
  
  //FUNCTIONS
  //===========================================
  // This function will initialize the character value from the global object variables defined above
  function initializeCharacter(chosenCharacter) {
    character.name = chosenCharacter.name;
    character.health = chosenCharacter.health;
    character.counterAttackPower = chosenCharacter.counterAttackPower;
    character.attackPower = chosenCharacter.attackPower;
  }
  
  // This function will initialize the defender's value from the global object variables defined above
  function initializeDefender(chosenDefender) {
    defender.name = chosenDefender.name;
    defender.health = chosenDefender.health;
    defender.counterAttackPower = chosenDefender.counterAttackPower;
    defender.attackPower = chosenDefender.attackPower;
  }
  
  // This function will move the remaining characters to the enemies section
  function moveToEnemies() {
    $(".available-character").removeClass("available-character").addClass("enemy-character");
    $("#enemies-div").append($(".enemy-character"));
  }
  
  // This function will reset the state of the game
  function resetGame() {
    // Reset all the health values to the original
    $("#luke").children(".health").html(characters.luke.health);
    $("#yoda").children(".health").html(characters.yoda.health);
    $("#darth-vader").children(".health").html(characters.darthVader.health);
    $("#darth-sidious").children(".health").html(characters.darthSidious.health);
  
    $(".character-image").removeClass("chosen-character enemy-character defender-character").addClass("available-character");
    var available = $(".available-character").show();
    $("#characters-available").html(available);
  
    $("#game-message").empty();
    $("#restart").hide();
  
    characterSelected = false;
    defenderSelected = false;
    enemiesDefeated = 0;
    gameOver = false;
  
    character = {};
    defender = {};
  }
  
  //MAIN PROCESS
  //===========================================
  // Run Javascript when the HTML has finished loading
  $(document).ready(function() {
  
    // Hide the "Restart" button and "#game-message" on document load
    $("#restart").hide();
    $("#game-message").empty();
  
    // Determine which character the user has clicked
    $("#luke").on("click", function () {
      console.log("Luke is selected");
  
      // User is choosing the character
      if(characterSelected === false) {
        $("#game-message").empty();
  
        // Set the user's character
        initializeCharacter(characters.luke);
        characterSelected = true;
  
        // Display the chosen character
        $("#luke").removeClass("available-character").addClass("chosen-character");
        $("#chosen-character").append(this);
  
        // Move the remaining characters to the enemies section
        moveToEnemies();
  
      } else if ((characterSelected === true) && (defenderSelected === false)) {
        // User is choosing the defender
        if($("#luke").hasClass("enemy-character")) {
          $("#game-message").empty();
  
          // Set the user's enemy
          initializeDefender(characters.luke);
          defenderSelected = true;
  
          // Add the character to the defender section
          $("#luke").removeClass("enemy-character").addClass("defender-character");
          $("#defender-div").append(this);
        }
      }
    });
  
    $("#yoda").on("click", function () {
      console.log("Yoda is selected");
  
      // User is choosing the character
      if(characterSelected === false) {
        $("#game-message").empty();
  
        // Set the user's character
        initializeCharacter(characters.yoda);
        characterSelected = true;
  
        // Display the chosen character
        $("#yoda").removeClass("available-character").addClass("chosen-character");
        $("#chosen-character").append(this);
  
        // Move the remaining characters to the enemies section
        moveToEnemies();
  
      } else if ((characterSelected === true) && (defenderSelected === false)) {
        // User is choosing the defender
        if($("#yoda").hasClass("enemy-character")) {
          $("#game-message").empty();
  
          // Set the user's enemy
          initializeDefender(characters.yoda);
          defenderSelected = true;
  
          // Add the character to the defender section
          $("#yoda").removeClass("enemy-character").addClass("defender-character");
          $("#defender-div").append(this);
        }
      }
    });
  
    $("#darth-vader").on("click", function () {
      console.log("Darth Vader is selected");
  
      // User is choosing the character
      if(characterSelected === false) {
        $("#game-message").empty();
  
        // Set the user's character
        initializeCharacter(characters.darthVader);
        characterSelected = true;
  
        // Display the chosen character
        $("#darth-vader").removeClass("available-character").addClass("chosen-character");
        $("#chosen-character").append(this);
  
        // Move the remaining characters to the enemies section
        moveToEnemies();
  
      } else if ((characterSelected === true) && (defenderSelected === false)) {
        // User is choosing the defender
        if($("#darth-vader").hasClass("enemy-character")) {
          $("#game-message").empty();
  
          // Set the user's enemy
          initializeDefender(characters.darthVader);
          defenderSelected = true;
  
          // Add the character to the defender section
          $("#darth-vader").removeClass("enemy-character").addClass("defender-character");
          $("#defender-div").append(this);
        }
      }
    });
  
    $("#darth-sidious").on("click", function () {
      console.log("Darth Sidious is selected");
  
      // User is choosing the character
      if(characterSelected == false) {
        $("#game-message").empty();
  
        // Set the user's character
        initializeCharacter(characters.darthSidious);
        characterSelected = true;
  
        // Display the chosen character
        $("#darth-sidious").removeClass("available-character").addClass("chosen-character");
        $("#chosen-character").append(this);
  
        // Move the remaining characters to the enemies section
        moveToEnemies();
  
      } else if ((characterSelected === true) && (defenderSelected == false)) {
        // User is choosing the defender
        if($("#darth-sidious").hasClass("enemy-character")) {
          $("#game-message").empty();
  
          // Set the user's enemy
          initializeDefender(characters.darthSidious);
          defenderSelected = true;
  
          // Add the character to the defender section
          $("#darth-sidious").removeClass("enemy-character").addClass("defender-character");
          $("#defender-div").append(this);
        }
      }
    });
  
    //Attack button is clicked
    $("#attack-btn").on("click", function() {
      console.log("Attack selected");
  
      // User is ready to attack the defender
      if (characterSelected && defenderSelected && !gameOver) {
        // User attacks the defender and decreases the defender's health points
        defender.health = defender.health - character.attackPower;
        $(".defender-character").children(".health").html(defender.health);
        $("#game-message").html("<p>You attacked " + defender.name + " for " + character.attackPower + " damage.<p>");
  
        // User's attack power increases
        character.attackPower = character.attackPower + character.attackPower;
  
        // If defender is still alive, they counter attack the user
        if (defender.health > 0) {
          character.health = character.health - defender.counterAttackPower;
          $(".chosen-character").children(".health").html(character.health);
  
          // Check if the user survives the attack
          if (character.health > 0) {
            $("#game-message").append("<p>" + defender.name + " attacked you back for " + defender.counterAttackPower + " damage.</p>");
          } else {
            gameOver = true;
            $("#game-message").html("<p>You were defeated...</p><p>Play again?</p>");
            $("#restart").show();
          }
        } else {
          // Defender is defeated
          enemiesDefeated++;
          defenderSelected = false;
          $("#game-message").html("<p>You have defeated " + defender.name + ". Choose another enemy.</p>");
          $(".defender-character").hide();
  
          // Check if the user has won the game
          if (enemiesDefeated === 3) {
            gameOver = true;
            $("#game-message").html("<p>You have won the game!!!</p><p>Play again?</p>");
            $("#restart").show();
          }
        }
      } else if (!characterSelected && !gameOver) {
        $("#game-message").html("<p>You must first select your game character.</p>");
      } else if (!defenderSelected && !gameOver) {
        $("#game-message").html("<p>You must choose an enemy to fight.</p>");
      }
  
    });
  
    $("#restart").on("click", function() {
      console.log("Restart selected");
  
      resetGame();
    });
  
  }); 
  