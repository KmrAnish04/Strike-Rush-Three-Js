import * as THREE from "three";
import Experience from "../../Experience.js";
import * as Physics from "cannon-es";
import { Vec3 } from "cannon-es";
import { getPhysicsBody } from "../../Utils/PhycisBodyHelper.js";
import { ShapeType } from "three-to-cannon";

export default class BallPinsObstacle {
  constructor(size, modelPostition, modelScaling, obstacleMaterial, positionZ) {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.time = this.experience.time;
    this.debug = this.experience.debug;
    this.physicsWorld = this.experience.physicsWorld;
    this.obstacleMaterial = obstacleMaterial;
    this.positionZ = positionZ;
    this.size = size;
    this.resource = this.resources.items.ObstacleBowlingPin;
    this.setUpBallPinsObstacle(modelPostition, modelScaling);
  }

  setUpBallPinsObstacle(modelPosition, modelScaling) {
    this.ballPinMeshes = this.createBallingPins(10, modelPosition, modelScaling);
    this.ballPinRigids = this.addPhysicsOnBallPins(this.ballPinMeshes);
    // this.arrangePinsModel();
    // this.arrangePinsRigidBodies(); // Making pattern of ballpins
  }

  // createMeshes(){
  //   this.ballPinMeshes = [];

  //   let ballPinModel = this.resource;
  //   ballPinModel.children.pop();
  // }

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
      this.scene.add(model);

    });
    return ballPinsArr;
  }

  arrangePinsRigidBodies() {
    const noOfRows = 4;
    const noOfCols = 4;

    const spacingX = 0.35;
    const spacingZ = 0.35;

    const startX = -(noOfCols - 1) * spacingX * 0.5;
    const startZ = -(noOfRows - 1) * spacingZ * 0.8;
    let idx = this.ballPinRigids.length - 1;

    for (let row = 0; row < noOfRows; row++) {
      for (let col = 0; col < noOfCols - row; col++) {
        const pin = this.ballPinRigids[idx];
        const x = -(startX + 1 + col * spacingX) * 2 + 1;
        const z = (startZ + row * spacingZ) * 2 - 1;
        pin.position.set(x, 0.71, z + this.positionZ);
        thi[idx].position.copy(pin.position);
        this.ballPinMeshes[idx].position.y = 0;
        idx--;
      }
    }
  }

  arrangePinsModel() {
    const pinsGroup = new THREE.Group();
    this.ballPinMeshes.forEach((pin) => {
      pinsGroup.add(pin);
    });
    this.scene.add(pinsGroup);
  }

  addPhysicsOnBallPins(ballPinArr) {
    let ballPinRigids = [];
    ballPinArr.forEach((ballPin) => {
      const rigidBody = getPhysicsBody(
        ballPin,
        ShapeType.MESH,
        this.obstacleMaterial,
        0.1
      );
      ballPinRigids.push(rigidBody);
      ballPin.position.copy(rigidBody.position);
      ballPin.quaternion.copy(rigidBody.quaternion)
      this.physicsWorld.addBody(rigidBody);
    });
    return ballPinRigids;
  }

  update() {
    for (let i = 0; i < this.ballPinMeshes.length; i++) {
      this.ballPinMeshes[i].position.copy(this.ballPinRigids[i].position);
      this.ballPinMeshes[i].quaternion.copy(this.ballPinRigids[i].quaternion);
    }
  }
}
