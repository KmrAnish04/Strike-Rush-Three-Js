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
import playerBalls from "./playerBalls.js";
import Player2 from "./Player2.js";

const COLLISION_GROUPS = {
  PLAYER_GROUP: 1,
  GEMS_GROUP: 2,
};

export default class World {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.physicsWorld = this.experience.physicsWorld;
    this.objectsToUpdate = [];
    // Wait for resources
    this.resources.on("ready", () => {
      // Setup
      this.environment = new Environment();
      this.playerMaterial = new Material("player");
      this.healthMaterial = new Material("health");
      this.pathMaterial = new Material("path");
      this.wallMaterial = new Material("wall");
      this.rampMaterial = new Material("ramp");
      this.gemMaterial = new Material("gem");
      this.obstacleMaterial = new Material("obstacle");
      this.scoreX1Material = new Material("score1");
      this.scoreX5Material = new Material("score5");
      this.scoreBoxMaterial = new Material("scoreBox");

      const trackLength = 20;
      this.playerContactPathMaterial = new ContactMaterial(
        this.playerMaterial,
        this.pathMaterial,
        { friction: 0, restitution: 0 }
      );
      this.playerContactObstacleMaterial = new ContactMaterial(
        this.playerMaterial,
        this.obstacleMaterial,
        { friction: 1, restitution: 0 }
      );

      this.pathObstacleMaterial = new ContactMaterial(
        this.obstacleMaterial,
        this.pathMaterial,
        { friction: 1, restitution: 0 }
      );
      this.playerContactRampMaterial = new ContactMaterial(
        this.playerMaterial,
        this.rampMaterial,
        { friction: 0, restitution: 0 }
      );
      this.endWallPlayerContact = new ContactMaterial(
        this.playerMaterial,
        this.wallMaterial,
        { restitution: 0 }
      );


      this.physicsWorld.addContactMaterial(this.playerContactPathMaterial);
      this.physicsWorld.addContactMaterial(this.playerContactObstacleMaterial);
      this.physicsWorld.addContactMaterial(this.pathObstacleMaterial);

      // this.obstacle1 = new BallPinsObstacle(0,
      //   new Vector3(-2, 0, -20),
      //   new Vector3(0.009, 0.009, 0.009),
      //   this.obstacleMaterial,
      //   this.pathObstacleMaterial,
      //   -trackLength * 4
      // );
      // this.obstacle2 = new Obstacle(
      //   this.resources.items.ObstacleArmLiverHammer,
      //   new Vector3(-4.5, 0, -6 * 20),
      //   new Vector3(0.009, 0.009, 0.009),
      //   this.obstacleMaterial
      // );
      // this.obstacle3 = new Obstacle(
      //   this.resources.items.ObstacleLegLiverHammer,
      //   new Vector3(0, 0, -10 * 20),
      //   new Vector3(0.009, 0.009, 0.009),
      //   this.obstacleMaterial
      // );
      this.obstacle5 = new Obstacle(
        this.resources.items.SpinnerObstacle,
        new Vector3(-5, 0.5, -10 * 20),
        new Vector3(0.009, 0.009, 0.009),
        this.obstacleMaterial
      );

      this.obstacle4 = new Obstacle(
        this.resources.items.ObstacleLiverAxe,
        new Vector3(-3.5, 2, -4 * 20),
        new Vector3(0.001, 0.001, 0.001),
        this.obstacleMaterial
      );
      // this.objectsToUpdate.push(this.obstacle3);
      this.objectsToUpdate.push(this.obstacle4);
      this.objectsToUpdate.push(this.obstacle5);
      // this.objectsToUpdate.push(this.obstacle2);
      // this.objectsToUpdate.push(this.obstacle1);
      this.sideWall = new SideWalls(-trackLength * 20, this.wallMaterial);
      this.track = new GameTrack(trackLength, this.pathMaterial);
      // this.player = new Player(
      //   this.playerMaterial,
      //   this.playerContactPathMaterial
      // );
      this.ramp = new Ramps(
        this.resources.items.Ramp1,
        new Vector3(0, 0, -3),
        new Vector3(0.05, 0.05, 0.05),
        -16 * trackLength,
        this.rampMaterial
      );

      this.gemsBlock = new GemsBlock(this.gemMaterial, -trackLength * 2, {
        filterGroup: COLLISION_GROUPS.GEMS_GROUP,
        filterMask: COLLISION_GROUPS.PLAYER_GROUP,
      });
      this.objectsToUpdate.push(this.gemsBlock);
      // this.healthBlock = new HealthBallsBlock(
      //   this.healthMaterial,
      //   -trackLength * 7
      // );
      // this.controls = new Movement();
      // this.PlayerObj = new playerBalls(this.playerMaterial, this.playerContactPathMaterial);
      this.PlayerObj = new Player2(this.playerMaterial, { filterGroup: COLLISION_GROUPS.PLAYER_GROUP, filterMask: COLLISION_GROUPS.GEMS_GROUP });
      this.endBlock = new EndBlock(
        -trackLength * 20 + 7,
        this.wallMaterial,
        this.scoreBoxMaterial
      );
    });
  }

  update() {
    if (this.controls) this.controls.update();
    if (this.PlayerObj) this.PlayerObj.update();
    for (const obstacle in this.objectsToUpdate) {
      if (this.objectsToUpdate[obstacle]) {
        this.objectsToUpdate[obstacle].update();
      }
    }
  }
}
