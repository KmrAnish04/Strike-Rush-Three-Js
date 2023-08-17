import Experience from "../../Experience.js";
import { getPhysicsBody } from "../../Utils/PhycisBodyHelper.js";
import { ShapeType } from "three-to-cannon";

import { Color } from "three";

export default class BallPinsObstacle {
  constructor(
    size,
    modelPostition,
    modelScaling,
    obstacleMaterial,
    pathObstacleMaterial
  ) {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.time = this.experience.time;
    this.debug = this.experience.debug;
    this.physicsWorld = this.experience.physicsWorld;
    this.obstacleMaterial = obstacleMaterial;

    this.positionX = modelPostition.x;
    this.positionY = modelPostition.y;
    this.positionZ = modelPostition.z;
    this.size = size;
    this.pathObstacleMaterial = pathObstacleMaterial;
    this.resource = this.resources.items.ObstacleBowlingPin;
    this.setUpBallPinsObstacle(modelScaling);
  }

  setUpBallPinsObstacle(modelScaling) {
    this.ballPinMeshes = this.createBallingPins(10, modelScaling);
    this.ballPinRigids = this.addPhysicsOnBallPins(this.ballPinMeshes);
    this.makePyramidPattern(this.size);
  }

  createBallingPins(noOfBallPins, modelScaling) {
    let ballPinsArr = [];
    let ballPinModel = this.resource.children[0];
    for (let ballPinCnt = 0; ballPinCnt < noOfBallPins; ballPinCnt++) {
      ballPinsArr.push(ballPinModel.clone());
    }
    ballPinsArr.forEach((model, index) => {
      model.material.color = new Color(0xffff00);
      model.scale.set(modelScaling.x, modelScaling.y, modelScaling.z);
      model.rotation.set(Math.PI / -2, 0, 0);
    });
    return ballPinsArr;
  }

  makePyramidPattern(size) {
    let rows = size;
    let cols = size;
    let gapX = 1;
    let gapY = 0.5;

    let StartX = this.positionX;
    let StartY = this.positionZ;

    let rowSideGap = 0;
    let idx = this.ballPinRigids.length - 1;

    for (let row = 0; row < rows; row++) {
      let tempX = StartX;
      tempX += rowSideGap;

      for (let col = 0; col < cols; col++) {
        let pin = this.ballPinRigids[idx];
        pin.position.set(tempX, this.positionY, StartY);
        this.ballPinMeshes[idx].position.copy(pin.position);
        this.ballPinMeshes[idx].quaternion.copy(pin.quaternion);
        this.scene.add(this.ballPinMeshes[idx]);
        this.physicsWorld.addBody(pin);
        tempX += gapX;
        idx--;
      }
      cols--;
      StartY += gapY;
      rowSideGap += 0.5;
    }
  }

  addPhysicsOnBallPins(ballPinArr) {
    let ballPinRigids = [];
    ballPinArr.forEach((ballPin) => {
      const rigidBody = getPhysicsBody(
        ballPin,
        ShapeType.BOX,
        this.obstacleMaterial,
        0.001
      );
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
