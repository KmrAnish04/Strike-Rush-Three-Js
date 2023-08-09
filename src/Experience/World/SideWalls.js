import { BoxGeometry, DoubleSide, Mesh, MeshBasicMaterial } from "three";
import Experience from "../Experience";
import { getPhysicsBody } from "../Utils/PhycisBodyHelper";
import { ShapeType } from "three-to-cannon";

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
    const height = 3;
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
      0.4,
      10 + this.trackLength / 2
    );
    rightWallBody.position.set(
      pathWidth / 2 + width / 2,
      0.4,
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
      new MeshBasicMaterial({ color: 0xffffff, side: DoubleSide })
    );
    return wall;
  }

}
