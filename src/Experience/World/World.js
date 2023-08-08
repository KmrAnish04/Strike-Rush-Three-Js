import Experience from "../Experience.js";
import Environment from "./Environment.js";
import GameTrack from "./TrackPath.js";
import Obstacle from "./Obstacles/Obstacle.js";
import { Vector3 } from "three";
import Player from "./Player.js";
import Movement from "./Movement.js";
import EndBlock from "./EndBlock.js";
import BallPinsObstacle from "./Obstacles/BallPinsObstacle.js";

export default class World {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.obstacles = [];
    // Wait for resources
    this.resources.on("ready", () => {
      // Setup
      this.environment = new Environment();
      // this.track = new GameTrack(10);
      // this.obs = new ArmLiverHammer(new Vector3(-5, 1.8, 0), new Vector3(0.009, 0.009, 0.009)); // Position, Scaling
      // this.obs = new LegLiverHammer(new Vector3(-5, 1.8, 0), new Vector3(0.009, 0.009, 0.009)); // Position, Scaling
      // this.obs = new LegLiverKnife(new Vector3(-5, 1.8, 0), new Vector3(0.009, 0.009, 0.009)); // Position, Scaling
      this.obstacle1 = new BallPinsObstacle(
        new Vector3(-5, 1.8, -7 * 20),
        new Vector3(0.009, 0.009, 0.009)
      ); // Position, Scaling
      this.obstacle2 = new Obstacle(
        this.resources.items.ObstacleArmLiverHammer,
        new Vector3(-4.5, 0, -6 * 20),
        new Vector3(0.009, 0.009, 0.009)
      );
      this.obstacle3 = new Obstacle(
        this.resources.items.ObstacleLegLiverHammer,
        new Vector3(0, 0, -10 * 20),
        new Vector3(0.009, 0.009, 0.009)
      );
      this.obstacle4 = new Obstacle(
        this.resources.items.ObstacleLiverAxe,
        new Vector3(0, 0, -14 * 20),
        new Vector3(0.009, 0.009, 0.009)
      );
      this.obstacles.push(this.obstacle3);
      this.obstacles.push(this.obstacle4);
      this.obstacles.push(this.obstacle2);
      this.obstacles.push(this.obstacle1);
      const trackLength = 2;
      this.track = new GameTrack(trackLength);
      this.player = new Player();
      this.controls = new Movement();
      this.endBlock = new EndBlock(-trackLength * 20 + trackLength);
    });
  }

  update() {
    if (this.controls) this.controls.update();
    for (const obstacle in this.obstacles) {
      if (this.obstacles[obstacle]) {
        this.obstacles[obstacle].update();
      }
    }
  }
}
