import Experience from "../Experience";
import { getPhysicsBody } from "../Utils/PhycisBodyHelper";
import { ShapeType } from "three-to-cannon";

import { BoxGeometry, DoubleSide, Mesh, MeshStandardMaterial } from "three";

export default class SideWalls {
  constructor(tracklength, wallMaterial) {
    this.experience = new Experience();
    this.physicsWorld = this.experience.physicsWorld;
    this.scene = this.experience.scene;
    this.trackLength = tracklength;
    this.wallMaterial = wallMaterial;
    this.constructSideWalls();
  }

  constructSideWalls() {
    const width = 0.5;
    const height = 1;
    const depth = this.trackLength;
    const pathWidth = 10;
    const leftWallMesh = this.constructWallMesh(width, height, depth);
    const rightWallMesh = this.constructWallMesh(width, height, depth);
    const leftWallBody = getPhysicsBody(
      leftWallMesh,
      ShapeType.BOX,
      this.wallMaterial
    );
    const rightWallBody = getPhysicsBody(
      rightWallMesh,
      ShapeType.BOX,
      this.wallMaterial
    );
    leftWallBody.position.set(
      -pathWidth / 2 - width / 2,
      -0.1,
      10 + this.trackLength / 2
    );
    rightWallBody.position.set(
      pathWidth / 2 + width / 2,
      -0.1,
      10 + this.trackLength / 2
    );
    leftWallMesh.position.copy(leftWallBody.position);
    rightWallMesh.position.copy(rightWallBody.position);
    this.physicsWorld.addBody(leftWallBody);
    this.physicsWorld.addBody(rightWallBody);
    this.scene.add(leftWallMesh, rightWallMesh);
  }

  constructWallMesh(width, height, depth) {
    const wall = new Mesh(
      new BoxGeometry(width, height, depth),
      new MeshStandardMaterial({ color: 0xe459d2, side: DoubleSide })
    );
    wall.receiveShadow = true;
    return wall;
  }
}
