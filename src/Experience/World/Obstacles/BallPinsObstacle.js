import * as THREE from "three";
import Experience from "../../Experience.js";
import * as Physics from "cannon-es";
import { Vec3 } from "cannon-es";
import { getPhysicsBody } from "../../Utils/PhycisBodyHelper.js";
import { ShapeType } from "three-to-cannon";

export default class BallPinsObstacle {
  constructor(size, modelPostition, modelScaling, obstacleMaterial, pathObstacleMaterial, positionZ) {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.time = this.experience.time;
    this.debug = this.experience.debug;
    this.physicsWorld = this.experience.physicsWorld;
    this.obstacleMaterial = obstacleMaterial;
    this.positionZ = positionZ;
    this.size = size;
    this.pathObstacleMaterial = pathObstacleMaterial;
    this.resource = this.resources.items.ObstacleBowlingPin;
    this.setUpBallPinsObstacle(modelPostition, modelScaling);
  }

  setUpBallPinsObstacle(modelPosition, modelScaling) {
    this.ballPinMeshes = this.createBallingPins(10, modelPosition, modelScaling);
    this.ballPinRigids = this.addPhysicsOnBallPins(this.ballPinMeshes);
    this.makePyramidPattern();
  }

  createBallingPins(noOfBallPins, modelPosition, modelScaling) {
    let ballPinsArr = [];
    let ballPinModel = this.resource.children[0];
    for (let ballPinCnt = 0; ballPinCnt < noOfBallPins; ballPinCnt++) { ballPinsArr.push(ballPinModel.clone()); }
    ballPinsArr.forEach((model, index) => {
      model.scale.set(modelScaling.x, modelScaling.y, modelScaling.z);
      model.rotation.set(Math.PI / -2, 0, 0);
    });
    return ballPinsArr;
  }

  makePyramidPattern() {
    let rows = 4;
    let cols = 4;
    let gapX = 0.5;
    let gapY = 0.5;

    let StartX = 0;
    let StartY = this.positionZ - 100;

    let firstColGap = 0.25;
    let idx = this.ballPinRigids.length - 1;

    for (let row = 0; row < rows; row++) {
      let tempX = StartX;
      if (row > 0) {
        tempX += firstColGap;
        firstColGap += 0.1 * row;
      }
      for (let col = 0; col < cols; col++) {
        let pin = this.ballPinRigids[idx];
        pin.position.set(tempX, 0.25, StartY);
        this.ballPinMeshes[idx].position.copy(pin.position);
        this.ballPinMeshes[idx].quaternion.copy(pin.quaternion)
        this.scene.add(this.ballPinMeshes[idx]);
        this.physicsWorld.addBody(pin);
        idx--;
        tempX += gapX;
      }
      StartY += gapY;
      cols--;
    }

  }

  addPhysicsOnBallPins(ballPinArr) {
    let ballPinRigids = [];
    ballPinArr.forEach((ballPin) => {
      const rigidBody = getPhysicsBody(ballPin, ShapeType.BOX, this.obstacleMaterial, 1);
      ballPinRigids.push(rigidBody);
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
