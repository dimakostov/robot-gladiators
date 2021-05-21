var getPlayerName = function(){
var name = "";

while(name === "" || name === null){
    name = prompt("What is your robot's name?");
}

return name;
}

var playerInfo = {

    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function(){
        this.health += 20;
        this.money -= 7;
    },
    upgradeAttack: function(){
        this.attack += 6;
        this.money += 7;
    }
};

console.log(playerInfo.name, playerInfo.attack, playerInfo.health);



var fight = function(enemy) {

    if(Math.random() > .5){
        isPlayerTurn = false;
    }

    while (playerInfo.health > 0 && enemy.health > 0) {
            var isPlayerTurn = true;
            //fightOrSkip();
            if(isPlayerTurn){
            if (fightOrSkip()) {
                break;
            }
            
            console.log("fight");
            var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
            enemy.health = Math.max(0, enemy.health - damage);
            console.log(enemy.health);
            
            if (enemy.health <= 0) {
                window.alert(enemy.name + " has died!");
                playerInfo.money = playerInfo.money + 20;
                break;
            }
            else{
                window.alert(enemy.name + " still has " + enemy.health + " health left.");
            }
        }else{
            var damage = randomNumber(enemy.attack - 3, enemy.attack);
            playerInfo.health = Math.max(0, playerInfo.health - damage);
            console.log(playerInfo.health);
            
            if (playerInfo.health <= 0) {
                window.alert(playerInfo.name + " has died!");
                break;
            }
            else{
                window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
            }
        
        }
        }
        
    
};


var startGame = function(){
    playerInfo.reset();

    for (var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            var pickedEnemy = enemyInfo[i];
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            pickedEnemy.health = randomNumber(40, 60);
            fight(pickedEnemy);

            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
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

    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money);
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
    //shopOptionPrompt = parseInt(shopOptionPrompt);

    switch (shopOptionPrompt) {
        case "1":
            if (playerInfo.money >= 7) {
                
                window.alert("Refilling player's health by 20 for 7 dollars.");
    
                playerInfo.refillHealth();
            }
            break;
        case "2":
            if (playerInfo.money >= 7) {
                
                window.alert("Upgrading player's attack by 6 for 7 dollars.");
    
                playerInfo.upgradeAttack();
            }
            break;
        case "3":
            window.alert("Leaving the store.");
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");

            shop();
            break;
    }
};

var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1)) + min;

    return value
}

var enemyInfo = [
    {
    name: "Roborto", 
    attack: randomNumber(10, 14),
    },
    {
    name: "Amy Android",
    attack: randomNumber(10, 14),
    },
    {
    name: "Robo Trumble",
    attack: randomNumber(10, 14),
    }
];

var fightOrSkip = function(){

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    if(promptFight === "" || promptFight === null){
        window.alert("You need to provide a valid answer! Please try again.");
        return fightOrSkip();
    }

    if(promptFight.toLowerCase() === "skip"){
        
        var confirmSkip= window.confirm("Are you sure you'd like to quit");
        
        if (confirmSkip) {
            window.alert(playerInfo.name + " has chosen to skip the fight!");
            
            playerInfo.money = Math.max(0, playerInfo.money - 10);
            shop();
            return true;
        }
    }
    return false;
}


startGame();
//fight();