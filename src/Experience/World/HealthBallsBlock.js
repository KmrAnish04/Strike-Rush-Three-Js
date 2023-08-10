import { Mesh, SphereGeometry, MeshBasicMaterial } from "three";
import { Vec3 } from "cannon-es";
import { threeToCannon, ShapeType } from "three-to-cannon";
import { getPhysicsBody } from "../Utils/PhycisBodyHelper.js";
import Experience from "../Experience.js";

export default class HealthBallsBlock {
  constructor(healthMaterial, positionZ) {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.time = this.experience.time;
    this.debug = this.experience.debug;
    this.physicsWorld = this.experience.physicsWorld;
    this.resource = this.resources.items.HealthBall;
    this.healthMaterial = healthMaterial;
    this.positionZ = positionZ;
    this.createHealthBallsBlock(5, new Vec3(1.5, 0.25, 0));
  }

  createBalls(modelPosition) {
    let model = this.resource.clone();
    
    model = model.children.shift();

    model.scale.set(0.007, 0.007, 0.007);
    model.position.set(modelPosition.x, modelPosition.y, modelPosition.z);

    let rigidBody = getPhysicsBody(
      model,
      ShapeType.SPHERE,
      this.healthMaterial,
      0
    );
    rigidBody.position.y = 1;
    model.position.copy(rigidBody.position);
    model.quaternion.copy(rigidBody.quaternion);

    this.scene.add(model);
    this.physicsWorld.addBody(rigidBody);

    return rigidBody;
  }

  createHealthBallsBlock(size, positionToSetOn) {
    let gapX = 0.7; // Horizontal Gap b/w rows
    let gapZ = 2; // Vertical Gap b/w cols

    let startX = positionToSetOn.x - 5;
    let startY = positionToSetOn.y;
    let startZ = positionToSetOn.z - 5 + this.positionZ;

    for (let row = 1; row <= size; row++) {
      let rowX = startX;
      for (let col = 1; col <= size; col++) {
        console.log("creating daimond");
        let pos = new Vec3(rowX + gapX, startY, startZ);
        this.createBalls(pos);
        rowX = pos.x + gapX;
        // startY = pos.y;
      }
      startZ += gapZ;
    }
  }
}
