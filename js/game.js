class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");
    this.height = 600;
    this.width = 500;
    this.player = new Player(this.gameScreen);
    this.obstacles = [new Obstacle(this.gameScreen)];
    this.isGameOver = false;
    this.score = 0;
    this.lives = 3;
  }
  start() {
    this.gameScreen.style.width = `${this.width}px`;
    this.gameScreen.style.height = `${this.height}px`;
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";
    this.gameLoop();
  }

  gameLoop() {
    this.update();
    if (Math.random() > 0.98 && this.obstacles.length < 1) {
      this.obstacles.push(new Obstacle(this.gameScreen));
    }

    if (this.isGameOver) {
      console.log("GameOver");
      this.gameEndScreen.style.display = "none";
      this.gameEndScreen.style.display = "block";
    }
    requestAnimationFrame(() => this.gameLoop());
  }
  update() {
    console.log("Update");
    this.player.move();
    const obstaclesToKeep = [];
    this.obstacles.forEach((obstacle) => {
      this.obstacle.move();
      if (this.player.didCollide(obstacle)) {
        console.log("collision");
      } else if (obstacle.top > this.gameScreen.offsetHeight) {
        ("Out of screen");
      } else {
        obstaclesToKeep.push(obstacle);
      }
    });
    this.obstacles = obstaclesToKeep;
    if (this.lives <= 0) {
      this.isGameOver = true;
    }
    console.log(this.score, this.lives);
  }
}
