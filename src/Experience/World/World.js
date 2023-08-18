import Experience from "../Experience.js";
import Environment from "./Environment.js";
import GameTrack from "./TrackPath.js";
import Obstacle from "./Obstacles/Obstacle.js";
import { Vector3 } from "three";
import Player from "./Player.js";
import Movement from "./Movement.js";
import EndBlock from "./EndBlock.js";
import BallPinsObstacle from "./Obstacles/BallPinsObstacle.js";
import { ContactMaterial, Material, Vec3 } from "cannon-es";
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
        { restitution: 0, friction: 10 }
      );

      this.physicsWorld.addContactMaterial(this.playerContactPathMaterial);
      this.physicsWorld.addContactMaterial(this.playerContactObstacleMaterial);
      this.physicsWorld.addContactMaterial(this.pathObstacleMaterial);

      this.ballPinObs1 = new BallPinsObstacle(
        3,
        new Vector3(-3, 0, -trackLength * 6.5),
        new Vector3(0.009, 0.009, 0.009),
        this.obstacleMaterial,
        this.pathObstacleMaterial
      );

      this.ballPinObs2 = new BallPinsObstacle(
        1,
        new Vector3(2, 0, -trackLength * 9),
        new Vector3(0.009, 0.009, 0.009),
        this.obstacleMaterial,
        this.pathObstacleMaterial
      );

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
        new Vector3(5.2, -0.1, -5 * 20),
        new Vector3(0.009, 0.009, 0.009),
        this.obstacleMaterial
      );

      this.obstacle4 = new Obstacle(
        this.resources.items.ObstacleArmLiverHammer,
        new Vector3(-5.1, 0.3, -12 * 21),
        new Vector3(0.001, 0.001, 0.001),
        this.obstacleMaterial
      );

      this.sideWall = new SideWalls(-trackLength * 20, this.wallMaterial);
      this.track = new GameTrack(trackLength, this.pathMaterial);

      this.ramp = new Ramps(this.resources.items.Ramp1, new Vector3(0, 0, -3), new Vector3(0.05, 0.05, 0.05), -16 * trackLength, this.rampMaterial);

      this.gemsBlock = new GemsBlock(this.gemMaterial, -trackLength * 2, {
        filterGroup: COLLISION_GROUPS.GEMS_GROUP,
        filterMask: COLLISION_GROUPS.PLAYER_GROUP,
      });

      this.PlayerObj = new Player2(this.playerMaterial, {
        filterGroup: COLLISION_GROUPS.PLAYER_GROUP,
        filterMask: COLLISION_GROUPS.GEMS_GROUP,
      });
      this.healthBlock1 = new HealthBallsBlock(
        this.healthMaterial,
        new Vec3(4, 0.5, -150),
        1
      );
      this.healthBlock2 = new HealthBallsBlock(
        this.healthMaterial,
        new Vec3(4, 0.5, -250),
        2
      );
      this.healthBlock3 = new HealthBallsBlock(
        this.healthMaterial,
        new Vec3(-2, 0.5, -200),
        3
      );
      // this.healthBlock4 = new HealthBallsBlock(
      //   this.healthMaterial,
      //   new Vec3(2.5, 0.5, -80),
      //   4
      // );
      this.endBlock = new EndBlock(
        -trackLength * 20 + 7,
        this.endWallPlayerContact,
        this.scoreBoxMaterial
      );

      // Simulate the Physics World
      this.objectsToUpdate.push(this.obstacle4);
      this.objectsToUpdate.push(this.obstacle5);
      this.objectsToUpdate.push(this.gemsBlock);
      this.objectsToUpdate.push(this.ballPinObs1);
      this.objectsToUpdate.push(this.ballPinObs2);
      // this.objectsToUpdate.push(this.obstacle3);
      // this.objectsToUpdate.push(this.obstacle2);
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
