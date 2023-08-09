import Experience from "../Experience.js";
import Environment from "./Environment.js";
import GameTrack from "./TrackPath.js";
import Obstacle from "./Obstacles/Obstacle.js";
import { Vector3 } from "three";
import Player from "./Player.js";
import Movement from "./Movement.js";
import EndBlock from "./EndBlock.js";
import BallPinsObstacle from "./Obstacles/BallPinsObstacle.js";
import { ContactMaterial, Material } from "cannon-es";
import Ramps from "./Obstacles/Ramps.js";
import SideWalls from "./SideWalls.js";
import GemsBlock from "./GemsBlock.js";
import HealthBallsBlock from "./HealthBallsBlock.js";


export default class World {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.physicsWorld = this.experience.physicsWorld;
    this.obstacles = [];
    // Wait for resources
    this.resources.on("ready", () => {
      // Setup
      this.environment = new Environment();
      this.playerMaterial = new Material("player");
      this.pathMaterial = new Material("path");
      this.wallMaterial = new Material("wall");
      this.obstacleMaterial = new Material("obstacle");
      this.scoreX1Material = new Material("score1");
      this.scoreX5Material = new Material("score5");
      this.playerContactPathMaterial = new ContactMaterial(
        this.playerMaterial,
        this.pathMaterial,
        { friction: 0.3, restitution: 0.1 }
      );
      this.physicsWorld.addContactMaterial(this.playerContactPathMaterial);
      this.obstacle1 = new BallPinsObstacle(
        new Vector3(-5, 1.8, -7 * 20),
        new Vector3(0.009, 0.009, 0.009),
        this.obstacleMaterial
      ); // Position, Scaling
      this.obstacle2 = new Obstacle(
        this.resources.items.ObstacleArmLiverHammer,
        new Vector3(-4.5, 0, -6 * 20),
        new Vector3(0.009, 0.009, 0.009),
        this.obstacleMaterial
      );
      this.obstacle3 = new Obstacle(
        this.resources.items.ObstacleLegLiverHammer,
        new Vector3(0, 0, -10 * 20),
        new Vector3(0.009, 0.009, 0.009),
        this.obstacleMaterial
      );
      this.obstacle4 = new Obstacle(
        this.resources.items.ObstacleLiverAxe,
        new Vector3(0, 0, -14 * 20),
        new Vector3(0.009, 0.009, 0.009),
        this.obstacleMaterial
      );
      this.obstacles.push(this.obstacle3);
      this.obstacles.push(this.obstacle4);
      this.obstacles.push(this.obstacle2);
      this.obstacles.push(this.obstacle1);
      const trackLength = 15;
      this.sideWall = new SideWalls(-trackLength * 20, this.wallMaterial);
      this.track = new GameTrack(trackLength, this.pathMaterial);
      this.player = new Player(
        this.playerMaterial,
        this.playerContactPathMaterial
      );
      this.ramp = new Ramps(
        this.resources.items.Ramp1,
        new Vector3(0, 0, 0),
        new Vector3(0.03, 0.03, 0.03),
        -1 * trackLength
      );

      this.gemBlk = new GemsBlock();
      this.gemBlk = new HealthBallsBlock();
      this.controls = new Movement();
      this.endBlock = new EndBlock(
        -trackLength * 20 + 7,
        this.wallMaterial,
        this.scoreX1Material,
        this.scoreX5Material
      );
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
