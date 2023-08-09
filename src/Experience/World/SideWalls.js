import { BoxGeometry, DoubleSide, Mesh, MeshBasicMaterial } from "three";
import Experience from "../Experience";
import { Body, Box, Vec3 } from "cannon-es";

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
    const width = 1;
    const height = 5;
    const depth = this.trackLength;
    const pathWidth = 10;
    const leftWallMesh = this.constructWallMesh(width, height, depth);
    const rightWallMesh = this.constructWallMesh(width, height, depth);
    const leftWallBody = this.constructWallBody(
      width / 2,
      height / 2,
      depth / 2
    );
    const rightWallBody = this.constructWallBody(
      width / 2,
      height / 2,
      depth / 2
    );
    leftWallBody.position.x = -pathWidth / 2 - width / 2;
    leftWallBody.position.y = 0.4;
    leftWallMesh.position.copy(leftWallBody.position);
    rightWallBody.position.x = pathWidth / 2 + width / 2;
    rightWallBody.position.y = 0.4;
    rightWallMesh.position.copy(rightWallBody.position);
    this.physicsWorld.addBody(leftWallBody);
    this.physicsWorld.addBody(rightWallBody);
    this.scene.add(leftWallMesh, rightWallMesh);
  }

  constructWallMesh(width, height, depth) {
    const wall = new Mesh(
      new BoxGeometry(width, height, depth),
      new MeshBasicMaterial({ color: 0xffffff, side: DoubleSide })
    );
    return wall;
  }

  constructWallBody(width, height, depth) {
    const wallShape = new Box(new Vec3(width, height, depth));
    const wallBody = new Body({
      shape: wallShape,
      material: this.wallMaterial,
      mass: 0,
      allowSleep: false,
    });
    wallBody.position.z =  10 + this.trackLength / 2;
    return wallBody;
  }
}
