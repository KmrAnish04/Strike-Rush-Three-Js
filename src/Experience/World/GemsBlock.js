import Experience from "../Experience.js";

import { Vec3 } from "cannon-es";
import { ShapeType } from "three-to-cannon";
import { getPhysicsBody } from "../Utils/PhycisBodyHelper.js";

export default class GemsBlock {
  constructor(noOfGemLines, gemMaterial, positionZ, options, position) {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.time = this.experience.time;
    this.debug = this.experience.debug;
    this.physicsWorld = this.experience.physicsWorld;
    this.resource = this.resources.items.GemBall;
    this.gemMaterial = gemMaterial;
    this.positionZ = positionZ;
    this.diamondsMeshes = [];
    this.diamondsBodies = [];
    this.options = options;
    this.createGemBlock(noOfGemLines, position);
  }

  createGemBalls(modelPosition) {
    const clonedModel = this.resource.clone();
    const model = clonedModel.children.shift();
    model.castShadow = true;
    this.diamondsMeshes.push(model);
    model.scale.set(0.007, 0.007, 0.007);
    model.position.set(modelPosition.x, modelPosition.y, modelPosition.z);
    let rigidBody = getPhysicsBody(model, ShapeType.HULL, this.gemMaterial, 0);
    rigidBody.collisionResponse = 0;
    rigidBody.quaternion.setFromAxisAngle(new Vec3(1, 0, 0), -Math.PI * 0.5);
    model.quaternion.copy(rigidBody.quaternion);
    rigidBody.quaternion.copy(model.quaternion);
    this.diamondsBodies.push(rigidBody);
    this.scene.add(model);
    this.physicsWorld.addBody(rigidBody);

    return rigidBody;
  }

  createGemBlock(size, positionToSetOn) {
    let gapX = 1; // Horizontal Gap b/w rows
    let gapZ = 4; // Vertical Gap b/w cols

    let startX = positionToSetOn.x - 5;
    let startY = positionToSetOn.y;
    let startZ = positionToSetOn.z - 5 + this.positionZ;

    for (let row = 1; row <= size; row++) {
      let rowX = startX;
      for (let col = 1; col <= size; col++) {
        let pos = new Vec3(rowX + gapX, startY, startZ);
        this.createGemBalls(pos);
        rowX = pos.x + gapX;
      }
      startZ += gapZ;
    }
  }

  update() {
    for (let i = 0; i < this.diamondsMeshes.length; i++) {
      this.diamondsMeshes[i].position.copy(this.diamondsBodies[i].position);
      this.diamondsMeshes[i].quaternion.copy(this.diamondsBodies[i].quaternion);
    }
  }
}
