// initialize unasigned global object constructor
let player;

// player class - object contructor
function Player(classType, health, mana, strength, agility, speed ) {
    this.classType = classType;
    this. health = health;
    this.mana = mana;
    this.strength = strength;
    this.agility = agility;
    this.speed = speed;
}

// player moves object
let PlayerMoves = {
    calcAttack: function () {
        // who attacks first? get our global classes - properties
        let getPlayerSpeed = player.speed;
        let getEnemySpeed = enemy.speed;

        // Player attacks function!
        let playerAttack = function () {
            let calcBaseDamage;
            if (player.mana > 0) {
                calcBaseDamage = player.strength * player.mana / 1000;
            } else {
                calcBaseDamage = player.strength * player.agility / 1000;
            }
            let offsetDamage = Math.floor(Math.random() * Math.floor(10));
            let calcOutputDamage = calcBaseDamage + offsetDamage;
            // Nummber of hits
            let numberOfHIts = Math.floor(Math.random() * Math.floor(player.agility / 10) / 2) + 1;
            let attackValues = [calcOutputDamage, numberOfHIts];
            // return
            return attackValues;
        }
        // Enemy attacks function!
        let enemyAttack = function () {
            let calcBaseDamage;
            if (enemy.mana > 0) {
                calcBaseDamage = enemy.strength * enemy.mana / 1000;
            } else {
                calcBaseDamage = enemy.strength * enemy.agility / 1000;
            }
            let offsetDamage = Math.floor(Math.random() * Math.floor(10));
            let calcOutputDamage = calcBaseDamage + offsetDamage;
            // Nummber of hits
            let numberOfHIts = Math.floor(Math.random() * Math.floor(enemy.agility / 10) / 2) + 1;
            let attackValues = [calcOutputDamage, numberOfHIts];
            // return
            return attackValues;
        }

        // get player/enemy "health" section in the Dom to update later
        let getPlayerHealth = document.querySelector(".health-player");
        // console.log(getPlayerHealth);
        let getEnemyHealth = document.querySelector(".health-enemy");
        // console.log(getEnemyHealth);

        // initiate attack if Player is faster!
        if (getPlayerSpeed >= getEnemySpeed) {
            //player attack values
            let playerAttackValues = playerAttack();
            let totalDamage = playerAttackValues[0] * playerAttackValues[1];
            // update the health damage by
            enemy.health = enemy.health - totalDamage;
            // console.log('player attacked = enemy health:' + enemy.health);
            alert("You hit " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times.");
            // check enemy health
            if (enemy.health <= 0) {
                alert("You win! Refresh browser to play again.");
                getPlayerHealth.innerHTMl = 'Health: ' + player.health;
                //update their health
                getEnemyHealth.innerHTMl = 'Health: 0';
                // console.log('after attacked: enemy loose updated '+ enemy.health );
            } else {
                //enemy is alive? update their health if changed
                getEnemyHealth.innerHTMl = 'Health: ' + enemy.health;
                // console.log('enemy health updated after attached:' + enemy.health);
                //enemy attack values
                let enemyAttackValues = enemyAttack();

                let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
                player.health = player.health - totalDamage;
                // console.log('enemy attacked next = player health:' + player.health);
                alert("Enemy hit " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times.");
                // check player health
                if (player.health <= 0) {
                    alert("You loose! Refresh browser to play again.");
                    //  if you dead
                    getPlayerHealth.innerHTMl = 'Health: 0';
                    // console.log('player loose on counter attack ' + player.health);
                    getEnemyHealth.innerHTMl = 'Health: ' + enemy.health;
                    // console.log('update enemy health ' + enemy.health);
                } else {
                    // if still alive - update health
                    getPlayerHealth.innerHTMl = 'Health: ' + player.health;
                    // console.log('update player health after being counter attacked ' + player.health);
                }
            }
        }
        // initiate attack if Enemy is faster!
        else if (getEnemySpeed >= getPlayerSpeed) {
            //enemy attach values
            let enemyAttackValues = enemyAttack();
            let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
            // update the health damage by
            player.health = player.health - totalDamage;
            console.log('enemy attack = player health ' + player.health);
            alert("Enemy hit " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times.");
            // check player health
            if (player.health <= 0) {
                alert("You loose! Refresh browser to play again.");
                //  if its dead
                getEnemyHealth.innerHTMl = 'Health: ' + enemy.health;
                // console.log('player loose: ' + enemy.health)
                //update their health status
                getPlayerHealth.innerHTMl = 'Health: 0';
            } else {
                //player is alive? update their health if changed
                getPlayerHealth.innerHTMl = 'Health: ' + player.health;
                //player attack values
                let playerAttackValues = playerAttack();
                let totalDamage = playerAttackValues[0] * playerAttackValues[1];
                enemy.health = enemy.health - totalDamage;
                // console.log('player attack back = enemy health ' + enemy.health);
                alert("You hit " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times.");
                // check enemy health
                if (enemy.health <= 0) {
                    alert("You win! Refresh browser to play again.");
                    //  if enemy dead
                    getEnemyHealth.innerHTMl = 'Health: 0';
                    getPlayerHealth.innerHTMl = 'Health: ' + player.health;
                } else {
                    // if still alive - update health
                    getEnemyHealth.innerHTMl = 'Health: ' + enemy.health;
                }
            }
        }
    }
}