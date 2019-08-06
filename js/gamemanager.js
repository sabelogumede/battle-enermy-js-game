// game manager object
let GameManager = {
    // method 1
    setGameStart: function(classType) {
        this.resetPlayer(classType);
        this.setPreFight();
    },
    // method 2
    resetPlayer: function(classType) {
        switch(classType) {
            case "Ditch":
                player = new Player(classType, 200, 0, 200, 100, 50);
                break;
            case "Jessy":
                player = new Player(classType, 100, 0, 100, 150, 200);
                break;
            case "kim":
                player = new Player(classType, 80, 0, 50, 200, 50);
                break;
            case "Sassy":
                player = new Player(classType, 200, 0, 50, 200, 100);
                break;
        }
        // get Dom section - creating a player
        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML = '<img src="images/avatar-players/' + classType.toLowerCase() + '.jpg" class="img-avatar"><div><h3>'+ classType +'</h3><p class="health-player">Health: ' + player.health + '</p><p>Mana: ' + player.mana + '</p><p>Strength: ' + player.strength + '</p><p>Agility: ' + player.agility + '</p><p>Speed: ' + player.speed + '</p></div>';
    },
    // method 3
    setPreFight: function() {
        // get Dom section
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getArena = document.querySelector(".arena");
        getHeader.innerHTML = '<p>Task: Find an enemy!</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Search for enemy!</a>';
        // set style of a Dom object
        getArena.style.visibility = 'visible';
    },
    // method 3.4
    setFight: function() {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getEnemy = document.querySelector(".enemy");
        //create enemy!
        let enemy00 = new Enemy("Drakular", 100, 0, 50, 100, 100);
        let enemy01 = new Enemy("Grodge", 200, 0, 150, 80, 100);
        // method
        let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(2));
        // console.log(chooseRandomEnemy);
        switch (chooseRandomEnemy) {
            case 0:
                enemy = enemy00;
                break;
            case 1:
                enemy = enemy01;
                break;
        }
        // get dom sections
        getHeader.innerHTML = '<p>Task: Choose your move</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a>';
        // create a enemy
        getEnemy.innerHTML = '<img src="images/avatar-enemies/' + enemy.enemyType.toLowerCase() + '.jpg" class="img-avatar"><div><h3>'+ enemy.enemyType +'</h3><p class="health-enemy">Health: ' + enemy.health + '</p><p>Mana: ' + enemy.mana + '</p><p>Strength: ' + enemy.strength + '</p><p>Agility: ' + enemy.agility + '</p><p>Speed: ' + enemy.speed + '</p></div>';
    }
}