import * as THREE from "three";
import Experience from "../../Experience.js";

export default class BallPinsObstacle {
  constructor(modelPostition, modelScaling) {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.time = this.experience.time;
    this.debug = this.experience.debug;

    // Resource
    this.resource = this.resources.items.ObstacleBowlingPin;
    console.log(modelPostition);
    this.setUpBallPinsObstacle(modelPostition, modelScaling);
  }

  setUpBallPinsObstacle(modelPosition, modelScaling) {
    let ballPins = this.createBallingPins(10, modelPosition, modelScaling);
    this.arrangePins(ballPins); // Making pattern of ballpins
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

  arrangePins(ballPinsArr) {
    const pinsGroup = new THREE.Group();

    const rows = 4; // Number of rows
    const cols = 4; // Number of columns

    const spacingX = 0.35; // Horizontal distance between pins
    const spacingZ = 0.35; // Vertical distance between pins

    const startX = -(cols - 1) * spacingX * 0.5;
    const startZ = -(rows - 1) * spacingZ * 0.8;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols - row; col++) {
        const pin = ballPinsArr.pop();
        const x = -(startX + 1 + col * spacingX) * 2 + 1;
        const z = (startZ + row * spacingZ) * 2 - 1;
        pin.position.set(x, 0, z);
        pinsGroup.add(pin);
      }
    }
    pinsGroup.position.x = -1.8;
    pinsGroup.rotation.y = (Math.PI / 180) * 225;
    this.scene.add(pinsGroup);
  }
  update() {}
}
