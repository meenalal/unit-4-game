
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

    darthMaul: {
      name: "Darth Maul",
      health: 140,
      attackPower: 3,
      counterAttackPower: 10,
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
    $("#darth-maul").children(".health").html(characters.darthMaul.health);
  
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
  
  
  $(document).ready(function() {
  
    // Hide the "Restart" button and "#game-message" on document load
    $("#restart").hide();
    $("#game-message").empty();
  
    $("#luke").on("click", function () {
      console.log("Luke is selected");

      if(characterSelected === false) {
        $("#game-message").empty();
  
        initializeCharacter(characters.luke);
        characterSelected = true;
  
        $("#luke").removeClass("available-character").addClass("chosen-character");
        $("#chosen-character").append(this);
  
        moveToEnemies();
  
      } else if ((characterSelected === true) && (defenderSelected === false)) {
        if($("#luke").hasClass("enemy-character")) {
          $("#game-message").empty();
  
          initializeDefender(characters.luke);
          defenderSelected = true;
  
          $("#luke").removeClass("enemy-character").addClass("defender-character");
          $("#defender-div").append(this);
        }
      }
    });
  
    $("#yoda").on("click", function () {
      console.log("Yoda is selected");
  
      if(characterSelected === false) {
        $("#game-message").empty();
  
        initializeCharacter(characters.yoda);
        characterSelected = true;

        $("#yoda").removeClass("available-character").addClass("chosen-character");
        $("#chosen-character").append(this);
  
        moveToEnemies();
  
      } else if ((characterSelected === true) && (defenderSelected === false)) {
        if($("#yoda").hasClass("enemy-character")) {
          $("#game-message").empty();
  
          initializeDefender(characters.yoda);
          defenderSelected = true;
  
          $("#yoda").removeClass("enemy-character").addClass("defender-character");
          $("#defender-div").append(this);
        }
      }
    });
  
    $("#darth-vader").on("click", function () {
      console.log("Darth Vader is selected");
  
      if(characterSelected === false) {
        $("#game-message").empty();
  
        initializeCharacter(characters.darthVader);
        characterSelected = true;
  
        $("#darth-vader").removeClass("available-character").addClass("chosen-character");
        $("#chosen-character").append(this);
  
        moveToEnemies();
  
      } else if ((characterSelected === true) && (defenderSelected === false)) {
        if($("#darth-vader").hasClass("enemy-character")) {
          $("#game-message").empty();
  
          initializeDefender(characters.darthVader);
          defenderSelected = true;
  
          $("#darth-vader").removeClass("enemy-character").addClass("defender-character");
          $("#defender-div").append(this);
        }
      }
    });
  
    $("#darth-sidious").on("click", function () {
      console.log("Darth Sidious is selected");
  
      if(characterSelected == false) {
        $("#game-message").empty();
  
        initializeCharacter(characters.darthSidious);
        characterSelected = true;
  
        $("#darth-sidious").removeClass("available-character").addClass("chosen-character");
        $("#chosen-character").append(this);
  
        moveToEnemies();
  
      } else if ((characterSelected === true) && (defenderSelected == false)) {
        if($("#darth-sidious").hasClass("enemy-character")) {
          $("#game-message").empty();
  
          initializeDefender(characters.darthSidious);
          defenderSelected = true;
  
          $("#darth-sidious").removeClass("enemy-character").addClass("defender-character");
          $("#defender-div").append(this);
        }
      }
    });

    // Determine which character the user has clickedx
    $("#darth-maul").on("click", function () {
      console.log("Darth Maul is selected");
  
      if(characterSelected === false) {
        $("#game-message").empty();
  
        initializeCharacter(characters.darthmaul);
        characterSelected = true;
  
        $("#darth-maul").removeClass("available-character").addClass("chosen-character");
        $("#chosen-character").append(this);
  
        moveToEnemies();
  
      } else if ((characterSelected === true) && (defenderSelected === false)) {
        if($("#darth-maul").hasClass("enemy-character")) {
          $("#game-message").empty();
  
          initializeDefender(characters.luke);
          defenderSelected = true;
  
          $("#darth-maul").removeClass("enemy-character").addClass("defender-character");
          $("#defender-div").append(this);
        }
      }
    });
  
  
    $("#attack-btn").on("click", function() {
      console.log("Attack selected");
  
      if (characterSelected && defenderSelected && !gameOver) {
        defender.health = defender.health - character.attackPower;
        $(".defender-character").children(".health").html(defender.health);
        $("#game-message").html("<p>You attacked " + defender.name + " for " + character.attackPower + " damage.<p>");
  
        character.attackPower = character.attackPower + character.attackPower;
  
        if (defender.health > 0) {
          character.health = character.health - defender.counterAttackPower;
          $(".chosen-character").children(".health").html(character.health);
  
          if (character.health > 0) {
            $("#game-message").append("<p>" + defender.name + " attacked you back for " + defender.counterAttackPower + " damage.</p>");
          } else {
            gameOver = true;
            $("#game-message").html("<p>You were defeated...</p><p>Play again?</p>");
            $("#restart").show();
          }
        } else {
          enemiesDefeated++;
          defenderSelected = false;
          $("#game-message").html("<p>You have defeated " + defender.name + ". Choose another enemy.</p>");
          $(".defender-character").hide();
  
          if (enemiesDefeated === 4) {
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
  