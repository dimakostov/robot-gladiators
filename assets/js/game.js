var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack= 12;

console.log(enemyNames);



var fight = function(enemyName) {
    window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    
    if(promptFight.toLowerCase() === "fight"){
        console.log("fight");
        enemyHealth = enemyHealth - playerAttack;
        console.log(enemyHealth);
        
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        }
        else{
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
        
        playerHealth = playerHealth - enemyAttack;
        console.log(playerHealth);
        
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        }
        else{
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }else if(promptFight.toLowerCase() === "skip"){
        
        var confirmSkip= window.confirm("Are you sure you'd like to quit");
        
        if (confirmSkip) {
            window.alert(playerName + " has chosen to skip the fight!");
            
            playerMoney = playerMoney - 2;
        }else{
            fight();
        }
        
    }
    else{
        window.alert("You need to choose a valid option. Try again!");
    }
    
};

for (var index = 0; index < enemyNames.length; index++) {
    fight(enemyNames[index]);
}

//fight();