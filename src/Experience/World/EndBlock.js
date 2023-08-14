import {
  BoxGeometry,
  CylinderGeometry,
  Group,
  Mesh,
  MeshBasicMaterial,
} from "three";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import Experience from "../Experience";
import * as Physics from "cannon-es";
import { Body, Box, Vec3 } from "cannon-es";
import { getPhysicsBody } from "../Utils/PhycisBodyHelper";
import { ShapeType } from "three-to-cannon";

export default class EndBlock {
  constructor(positionZ, wallMaterial, scoreBoxMaterial) {
    this.experience = new Experience();
    this.resources = this.experience.resources;
    this.scene = this.experience.scene;
    this.endBlockGroup = new Group();
    this.physicsWorld = this.experience.physicsWorld;
    this.scoreBoxMaterial = scoreBoxMaterial;
    // this.scoreX5Material = scoreX5Material;
    this.physicsObjects = [];
    this.winBox = this.constructWinBox(positionZ, 0xff0000, -6.5, "1X");
    this.winBox = this.constructWinBox(positionZ, 0xfff44f, -3.25, "3X");
    this.winBox = this.constructWinBox(positionZ, 0x74b72e, 0, "5X");
    this.winBox = this.constructWinBox(positionZ, 0xfff44f, 3.25, "3X");
    this.winBox = this.constructWinBox(positionZ, 0xff0000, 6.5, "1X");
    this.contructLastBlock(positionZ, wallMaterial);
    this.scene.add(this.endBlockGroup);

    // this.gem = this.resources.items.GemBall;
  }

  constructWinBox(positionZ, color, positionX, score) {
    console.log("SCORE", score);
    const boxMesh = new Mesh(
      new BoxGeometry(3, 3, 4),
      new MeshBasicMaterial({ color: color })
    );
    const textGeometry = new TextGeometry(score, {
      font: this.resources.items.scoreFont,
      size: 1.5,
      height: 0.5,
    });
    textGeometry.center();
    const textMesh = new Mesh(
      textGeometry,
      new MeshBasicMaterial({ color: 0x000000 })
    );
    // textGeometry.position.y -= 1;
    const box = getPhysicsBody(boxMesh, ShapeType.BOX, this.scoreBoxMaterial, 0);
    this.scene.add(boxMesh, textMesh);
    this.physicsWorld.addBody(box);
    box.position.x = positionX;
    box.position.y = 2.6;
    box.position.z = positionZ + 2.3;
    boxMesh.position.copy(box.position);
    boxMesh.quaternion.copy(box.quaternion);
    textMesh.position.copy(boxMesh.position);
    textMesh.position.z += 2.1;
    textMesh.position.y += 2;
    // box.name = 'scoreBox';
    box.myData = { score: score }
    // this.scene.add(this.gem);
  }

  contructLastBlock(positionZ, wallMaterial) {
    this.wallMaterial = wallMaterial;
    const endWall = this.constructEndWall(11.5, positionZ);
    const walls = this.constructWalls(positionZ);
    const circularHit = this.constructCircularHit(17.5, positionZ);
    this.endBlockGroup.add(endWall, walls, circularHit);
  }

  constructEndWall(positionY, positionZ) {
    const width = 16;
    const height = 23;
    const depth = 1;
    const endWall = new Mesh(
      new BoxGeometry(width, height, depth),
      new MeshBasicMaterial({ color: "#e75480" })
    );
    const physicsEndWallBody = getPhysicsBody(
      endWall,
      ShapeType.BOX,
      this.wallMaterial
    );
    physicsEndWallBody.position.y = positionY;
    physicsEndWallBody.position.z = positionZ;
    endWall.position.copy(physicsEndWallBody.position);
    this.physicsWorld.addBody(physicsEndWallBody);
    return endWall;
  }

  constructCircularHit(positionY, positionZ) {
    const radiusTop = 1.2;
    const radiusBottom = 1.2;
    const height = 4;
    const numberOfSegments = 64;
    const circularHit = new Mesh(
      new CylinderGeometry(radiusTop, radiusBottom, height, numberOfSegments),
      new MeshBasicMaterial({ color: 0xe201c9 })
    );
    const physicsCircularHitBody = getPhysicsBody(
      circularHit,
      ShapeType.CYLINDER,
      this.wallMaterial
    );
    physicsCircularHitBody.quaternion.setFromAxisAngle(
      new Vec3(-1, 0, 0),
      Math.PI * 0.5
    );
    physicsCircularHitBody.position.y = positionY;
    physicsCircularHitBody.position.z = positionZ;
    circularHit.position.copy(physicsCircularHitBody.position);
    circularHit.quaternion.copy(physicsCircularHitBody.quaternion);
    this.physicsWorld.addBody(physicsCircularHitBody);
    return circularHit;
  }

  constructWalls(positionZ) {
    const wallsGroup = new Group();
    const leftWall = this.createLeftWall(positionZ);
    const rightWall = this.createRightWall(positionZ);
    const bottomWall = this.createBottomWall(positionZ);
    const leftDiagonalWall1 = this.createLeftDiagonalWall1(positionZ);
    const leftDiagonalWall2 = this.createLeftDiagonalWall2(positionZ);
    const rightDiagonalWall1 = this.createRightDiagonalWall1(positionZ);
    const rightDiagonalWall2 = this.createRightDiagonalWall2(positionZ);
    wallsGroup.add(
      leftWall,
      rightWall,
      bottomWall,
      leftDiagonalWall1,
      leftDiagonalWall2,
      rightDiagonalWall1,
      rightDiagonalWall2
    );
    return wallsGroup;
  }

  createLeftWall(positionZ) {
    const width = 1;
    const height = 23;
    const depth = 4;
    const leftWall = new Mesh(
      new BoxGeometry(width, height, depth),
      new MeshBasicMaterial({ color: 0xe8e8e7 })
    );
    //Physics
    const rigidBody = getPhysicsBody(
      leftWall,
      ShapeType.BOX,
      this.wallMaterial
    );
    rigidBody.position.x = -8.5;
    rigidBody.position.y = 11.5;
    rigidBody.position.z = 1.5 + positionZ;
    leftWall.position.copy(rigidBody.position);
    this.physicsWorld.addBody(rigidBody);
    return leftWall;
  }

  createRightWall(positionZ) {
    const width = 1;
    const height = 23;
    const depth = 4;
    const rightWall = new Mesh(
      new BoxGeometry(width, height, depth),
      new MeshBasicMaterial({ color: 0xe8e8e7 })
    );
    const rigidBody = getPhysicsBody(
      rightWall,
      ShapeType.BOX,
      this.wallMaterial
    );
    rigidBody.position.x = 8.5;
    rigidBody.position.y = 11.5;
    rigidBody.position.z = 1.5 + positionZ;
    rightWall.position.copy(rigidBody.position);
    this.physicsWorld.addBody(rigidBody);
    return rightWall;
  }

  createBottomWall(positionZ) {
    const width = 12;
    const height = 1;
    const depth = 4;
    const bottomWall = new Mesh(
      new BoxGeometry(width, height, depth),
      new MeshBasicMaterial({ color: 0xe8e8e7 })
    );
    const rigidBody = getPhysicsBody(
      bottomWall,
      ShapeType.BOX,
      this.wallMaterial
    );
    rigidBody.position.y = -0.4;
    rigidBody.position.z = 1.5 + positionZ;
    bottomWall.position.copy(rigidBody.position);
    this.physicsWorld.addBody(rigidBody);
    return bottomWall;
  }

  createLeftDiagonalWall1(positionZ) {
    const width = 4;
    const height = 1;
    const depth = 4;
    const leftDiagonalWall1 = new Mesh(
      new BoxGeometry(width, height, depth),
      new MeshBasicMaterial({ color: 0xe8e8e7 })
    );
    //Physics
    const rigidBody = getPhysicsBody(
      leftDiagonalWall1,
      ShapeType.BOX,
      this.wallMaterial
    );
    rigidBody.quaternion.setFromAxisAngle(
      new Physics.Vec3(0, 0, 1),
      Math.PI * 0.25
    );
    rigidBody.position.set(-7.5, 12.8, 1.5 + positionZ);
    leftDiagonalWall1.position.copy(rigidBody.position);
    leftDiagonalWall1.quaternion.copy(rigidBody.quaternion);
    this.physicsWorld.addBody(rigidBody);
    return leftDiagonalWall1;
  }

  createLeftDiagonalWall2(positionZ) {
    const width = 4;
    const height = 1;
    const depth = 4;
    const leftDiagonalWall2 = new Mesh(
      new BoxGeometry(width, height, depth),
      new MeshBasicMaterial({ color: 0xe8e8e7 })
    );
    const rigidBody = getPhysicsBody(
      leftDiagonalWall2,
      ShapeType.BOX,
      this.wallMaterial
    );
    rigidBody.quaternion.setFromAxisAngle(
      new Physics.Vec3(0, 0, 1),
      Math.PI * 0.75
    );
    rigidBody.position.set(-7.5, 15, 1.5 + positionZ);
    leftDiagonalWall2.position.copy(rigidBody.position);
    leftDiagonalWall2.quaternion.copy(rigidBody.quaternion);
    this.physicsWorld.addBody(rigidBody);
    return leftDiagonalWall2;
  }

  createRightDiagonalWall1(positionZ) {
    const width = 4;
    const height = 1;
    const depth = 4;
    const rightDiagonalWall1 = new Mesh(
      new BoxGeometry(width, height, depth),
      new MeshBasicMaterial({ color: 0xe8e8e7 })
    );
    //Physics
    const rigidBody = getPhysicsBody(
      rightDiagonalWall1,
      ShapeType.BOX,
      this.wallMaterial
    );
    rigidBody.quaternion.setFromAxisAngle(
      new Physics.Vec3(0, 0, 1),
      Math.PI * 0.25
    );
    rigidBody.position.set(7.5, 15, 1.5 + positionZ);
    rightDiagonalWall1.position.copy(rigidBody.position);
    rightDiagonalWall1.quaternion.copy(rigidBody.quaternion);
    this.physicsWorld.addBody(rigidBody);
    return rightDiagonalWall1;
  }

  createRightDiagonalWall2(positionZ) {
    const width = 4;
    const height = 1;
    const depth = 4;
    const rightDiagonalWall2 = new Mesh(
      new BoxGeometry(width, height, depth),
      new MeshBasicMaterial({ color: 0xe8e8e7 })
    );
    //Physics
    const rigidBody = getPhysicsBody(
      rightDiagonalWall2,
      ShapeType.BOX,
      this.wallMaterial
    );
    rigidBody.quaternion.setFromAxisAngle(
      new Physics.Vec3(0, 0, 1),
      Math.PI * 0.75
    );
    rigidBody.position.set(7.5, 12.8, 1.5 + positionZ);
    rightDiagonalWall2.position.copy(rigidBody.position);
    rightDiagonalWall2.quaternion.copy(rigidBody.quaternion);
    this.physicsWorld.addBody(rigidBody);
    return rightDiagonalWall2;
  }
}
