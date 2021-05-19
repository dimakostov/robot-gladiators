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
    while (playerHealth > 0 && enemyHealth > 0) {
        
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        if(promptFight.toLowerCase() === "skip"){
            
            var confirmSkip= window.confirm("Are you sure you'd like to quit");
            
            if (confirmSkip) {
                window.alert(playerName + " has chosen to skip the fight!");
                
                playerMoney = Math.max(0, playerMoney - 10);
                break;
            }
        }
            console.log("fight");
            var damage = randomNumber(playerAttack - 3, playerAttack);
            enemyHealth = Math.max(0, enemyHealth - damage);
            console.log(enemyHealth);
            
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");
                playerMoney = playerMoney + 20;
                break;
            }
            else{
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }
            var damage = randomNumber(enemyAttack - 3, enemyAttack);
            playerHealth = Math.max(0, playerHealth - damage);
            console.log(playerHealth);
            
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
                break;
            }
            else{
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
        
            
        }
        
    
};

var startGame = function(){
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for (var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1))
            enemyHealth = randomNumber(40, 60);
            fight(enemyNames[i]);

            if (playerHealth > 0 && i < enemyNames.length - 1) {
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

                if(storeConfirm){
                    shop();
                    
                }
            }
        }else{
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }

    endGame();
};

var endGame = function() {
    window.alert("Let's see how you did!");

    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney);
    }
    else{
        window.alert("You've lost your robot in battle.");
    }

    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        startGame();
    }
    else{
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

var shop = function() {
    var shopOptionPrompt = window.prompt("Would you like to REFILL you health, UPGRADE your attack, or LEAVE the shop?");

    switch (shopOptionPrompt.toLowerCase()) {
        case "refill":
            if (playerMoney >= 7) {
                
                window.alert("Refilling player's health by 20 for 7 dollars.");
    
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
            }
            break;
        case "upgrade":
            if (playerMoney >= 7) {
                
                window.alert("Upgrading player's attack by 6 for 7 dollars.");
    
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
            }
            break;
        case "leave":
            window.alert("Leaving the store.");
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");

            shop();
            break;
    }
};

var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max- min + 1)) + min;

    return value
}

startGame();
//fight();