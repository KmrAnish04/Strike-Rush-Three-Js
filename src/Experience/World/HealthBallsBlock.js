import Experience from "../Experience.js";

import { Mesh, MeshBasicMaterial, Group, BoxGeometry } from "three";
import { ShapeType } from "three-to-cannon";
import { getPhysicsBody } from "../Utils/PhycisBodyHelper.js";

export default class HealthBallsBlock {
  constructor(healthMaterial, blockPosition, noOfBallToPlace) {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.time = this.experience.time;
    this.debug = this.experience.debug;
    this.physicsWorld = this.experience.physicsWorld;
    this.resource = this.resources.items.HealthBall;
    this.healthMaterial = healthMaterial;

    this.creaditPoints = noOfBallToPlace; // The score user will get
    this.healthBlockGroup = new Group();
    this.healthBlockGroup.name = "Health-Add";
    const scoreBlock = this.createHealthBallsBlock(
      noOfBallToPlace,
      blockPosition
    );

    // The socreBlock position should always set like below, bcoz group and rigid bodies are two different objects
    this.healthBlockGroup.position.x =
      this.healthBlockGroup.position.x + blockPosition.x;
    scoreBlock.position.x = scoreBlock.position.x + blockPosition.x;

    this.healthBlockGroup.position.z =
      this.healthBlockGroup.position.z + blockPosition.z;
    scoreBlock.position.z = scoreBlock.position.z + blockPosition.z;
  }

  createBalls() {
    let model = this.resource.clone();
    model = model.children.shift();
    model.scale.set(0.007, 0.007, 0.007);
    this.healthBlockGroup.add(model);
    return model;
  }

  createHealthBallsBlock(size, positionToSetOn) {
    const gridSize = size; // Number of rows and columns
    const gap = 1; // Gap between spheres

    let startX = 0.5 - size / 2;
    let startY = positionToSetOn.y;
    let startZ = 0.5 - size / 2;

    for (let row = 0; row < gridSize; row++) {
      let tempx = startX;
      for (let col = 0; col < gridSize; col++) {
        const sphere = this.createBalls();
        sphere.position.set(tempx, startY, startZ);
        tempx += gap;
      }
      startZ += gap;
    }

    // Calculate the size of the grid based on spheres' positions
    const maxX = (gridSize - 1) * gap + 0.5;
    const maxY = 0.5; // Half of the sphere's diameter
    const maxZ = (gridSize - 1) * gap + 0.5;

    let mesh = new Mesh(
      new BoxGeometry(maxX, maxY, maxZ),
      new MeshBasicMaterial({ color: 0xff0000 })
    );
    let scoreCollider = getPhysicsBody(
      mesh,
      ShapeType.BOX,
      this.healthMaterial,
      0
    );

    scoreCollider.position.copy(this.healthBlockGroup.position);
    scoreCollider.position.y = positionToSetOn.y;
    scoreCollider.collisionResponse = 0;

    // Allocating the score for this block
    scoreCollider.myData = {
      score: this.creaditPoints * 2,
      scoreBlock: this.healthBlockGroup,
    };

    // Add to the worlds
    this.physicsWorld.addBody(scoreCollider);
    this.scene.add(this.healthBlockGroup);

    return scoreCollider;
  }
}
