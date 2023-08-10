import * as THREE from "three";
import Experience from "../../Experience.js";
import * as Physics from "cannon-es";
import { Vec3 } from "cannon-es";
import { getPhysicsBody } from "../../Utils/PhycisBodyHelper.js";
import { ShapeType } from "three-to-cannon";

export default class BallPinsObstacle {
  constructor(modelPostition, modelScaling, obstacleMaterial, positionZ) {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.time = this.experience.time;
    this.debug = this.experience.debug;
    this.physicsWorld = this.experience.physicsWorld;
    this.obstacleMaterial = obstacleMaterial;
    this.positionZ = positionZ;
    this.resource = this.resources.items.ObstacleBowlingPin;
    this.setUpBallPinsObstacle(modelPostition, modelScaling);
  }

  setUpBallPinsObstacle(modelPosition, modelScaling) {
    this.ballPins = this.createBallingPins(10, modelPosition, modelScaling);
    this.rigids = this.addPhysicsOnBallPins(this.ballPins);
    this.arrangePinsModel();
    this.arrangePinsRigidBodies(); // Making pattern of ballpins
  }

  createBallingPins(noOfBallPins, modelPosition, modelScaling) {
    let ballPinsArr = [];
    let ballPinModel = this.resource;
    ballPinModel.children.pop();
    for (let ballPinCnt = 0; ballPinCnt < noOfBallPins; ballPinCnt++) {
      ballPinsArr.push(ballPinModel.clone());
    }
    ballPinsArr.forEach((model, index) => {
      model.scale.set(modelScaling.x, modelScaling.y, modelScaling.z);
      model.position.set(
        modelPosition.x,
        modelPosition.y,
        modelPosition.z + index
      );
      model.rotation.set(Math.PI / -2, 0, 0);
    });
    return ballPinsArr;
  }

  arrangePinsRigidBodies() {
    const rows = 4;
    const cols = 4;
    const spacingX = 0.35;
    const spacingZ = 0.35;
    const startX = -(cols - 1) * spacingX * 0.5;
    const startZ = -(rows - 1) * spacingZ * 0.8;
    let idx = this.rigids.length - 1;
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols - row; col++) {
        const pin = this.rigids[idx];
        const x = -(startX + 1 + col * spacingX) * 2 + 1;
        const z = (startZ + row * spacingZ) * 2 - 1;
        pin.position.set(x, 0.71, z + this.positionZ);
        this.ballPins[idx].position.copy(pin.position);
        this.ballPins[idx].position.y = 0;
        idx--;
      }
    }
  }

  arrangePinsModel() {
    const pinsGroup = new THREE.Group();
    this.ballPins.forEach((pin) => {
      pinsGroup.add(pin);
    });
    this.scene.add(pinsGroup);
  }

  addPhysicsOnBallPins(ballPinArr) {
    let ballPinRigids = [];
    ballPinArr.forEach((ballPin) => {
      const rigidBody = getPhysicsBody(
        ballPin,
        ShapeType.BOX,
        this.obstacleMaterial,
        1
      );
      ballPinRigids.push(rigidBody);
      ballPin.position.copy(rigidBody.position);
      this.physicsWorld.addBody(rigidBody);
    });
    return ballPinRigids;
  }

  update() {
    for (let i = 0; i < this.ballPins.length; i++) {
      this.ballPins[i].position.copy(this.rigids[i].position);
      this.ballPins[i].quaternion.copy(this.rigids[i].quaternion);
    }
  }
}
