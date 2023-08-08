import {
  BoxGeometry,
  CylinderGeometry,
  Group,
  Mesh,
  MeshBasicMaterial,
} from "three";
import Experience from "../Experience";
import * as Physics from "cannon-es";
import { Vec3 } from "cannon-es";

export default class EndBlock {
  constructor(positionZ) {
    this.experience = new Experience();
    this.resources = this.experience.resources;
    this.scene = this.experience.scene;
    this.endBlockGroup = new Group();
    this.physicsWorld = this.experience.physicsWorld;
    this.physicsObjects = [];
    this.winBox = this.resources.items.WinBox;
    this.winBox.scene.scale.set(0.005, 0.015, 0.013);
    this.constructWinBox(positionZ);
    this.contructLastBlock(positionZ);
    this.scene.add(this.endBlockGroup);
  }

  constructWings() {
    const wingsGroup = new Group();
    const leftWing = this.wings.clone();
    const rightWing = this.wings.clone();
    leftWing.position.x = -2;
    rightWing.position.x = 2;
    leftWing.position.z = 4;
    leftWing.position.y = 4;
    wingsGroup.add(leftWing);
    wingsGroup.add(rightWing);
    return wingsGroup;
  }
  constructWinBox(positionZ) {
    const newBox1 = this.winBox.scene.clone();
    newBox1.position.x = 2.5;
    newBox1.position.y = 0.5;
    newBox1.position.z = positionZ + 4;
    newBox1.rotation.y = (Math.PI / 180) * 90;
    const newBox2 = this.winBox.scene.clone();
    newBox2.position.x = -2.5;
    newBox2.position.y = 0.5;
    newBox2.position.z = positionZ + 4;
    newBox2.rotation.y = (Math.PI / 180) * 90;
    this.scene.add(newBox1, newBox2);
  }
  contructLastBlock(positionZ) {
    this.physicsMaterial = new Physics.Material("Default");
    this.physicsContactMaterial = new Physics.ContactMaterial(
      this.physicsMaterial,
      this.physicsMaterial,
      { friction: 0.1, restitution: 0.7 }
    );
    this.physicsWorld.addContactMaterial(this.physicsContactMaterial);
    const endWall = this.constructEndWall(10, positionZ);
    const walls = this.constructWalls(positionZ);
    const circularHit = this.constructCircularHit(
      16,
      positionZ,
      -(Math.PI / 180) * 90
    );
    this.endBlockGroup.add(endWall, walls, circularHit);
  }

  constructEndWall(positionY, positionZ) {
    const width = 10;
    const height = 23;
    const depth = 1;
    const endWall = new Mesh(
      new BoxGeometry(width, height, depth),
      new MeshBasicMaterial({ color: 0xffff00 })
    );
    //Physics Wall
    const physicsEndWallShape = new Physics.Box(
      new Vec3(width / 2, height / 2, depth / 2)
    );
    const physicsEndWallBody = new Physics.Body({
      shape: physicsEndWallShape,
      mass: 0,
      allowSleep: false,
      material: this.physicsMaterial,
    });
    physicsEndWallBody.position.y = positionY;
    physicsEndWallBody.position.z = positionZ;
    endWall.position.copy(physicsEndWallBody.position);
    this.physicsWorld.addBody(physicsEndWallBody);
    return endWall;
  }

  constructCircularHit(positionY, positionZ, rotationX) {
    const radiusTop = 1.2;
    const radiusBottom = 1.2;
    const height = 4;
    const numberOfSegments = 64;
    const circularHit = new Mesh(
      new CylinderGeometry(radiusTop, radiusBottom, height, numberOfSegments),
      new MeshBasicMaterial({ color: 0xe201c9 })
    );
    const physicsCircularHitShape = new Physics.Cylinder(
      radiusTop,
      radiusBottom,
      height,
      numberOfSegments
    );
    const physicsCircularHitBody = new Physics.Body({
      shape: physicsCircularHitShape,
      mass: 0,
      allowSleep: false,
      material: this.physicsMaterial,
    });
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
    const rigidBodyShape = new Physics.Box(
      new Vec3(width / 2, height / 2, depth / 2)
    );
    const rigidBody = new Physics.Body({
      shape: rigidBodyShape,
      mass: 0,
      allowSleep: false,
      material: this.physicsMaterial,
    });
    rigidBody.position.x = -5.5;
    rigidBody.position.y = 10;
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
    //Physics
    const rigidBodyShape = new Physics.Box(
      new Vec3(width / 2, height / 2, depth / 2)
    );
    const rigidBody = new Physics.Body({
      shape: rigidBodyShape,
      mass: 0,
      allowSleep: false,
      material: this.physicsMaterial,
    });
    rigidBody.position.x = 5.5;
    rigidBody.position.y = 10;
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
    //Physics
    const rigidBodyShape = new Physics.Box(
      new Vec3(width / 2, height / 2, depth / 2)
    );
    const rigidBody = new Physics.Body({
      shape: rigidBodyShape,
      mass: 0,
      allowSleep: false,
      material: this.physicsMaterial,
    });
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
    const rigidBodyShape = new Physics.Box(
      new Vec3(width / 2, height / 2, depth / 2)
    );
    const rigidBody = new Physics.Body({
      shape: rigidBodyShape,
      mass: 0,
      allowSleep: false,
      material: this.physicsMaterial,
    });
    rigidBody.quaternion.setFromAxisAngle(
      new Physics.Vec3(0, 0, 1),
      Math.PI * 0.25
    );
    rigidBody.position.set(-4, 11.3, 1.5 + positionZ);
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
    //Physics
    const rigidBodyShape = new Physics.Box(
      new Vec3(width / 2, height / 2, depth / 2)
    );
    const rigidBody = new Physics.Body({
      shape: rigidBodyShape,
      mass: 0,
      allowSleep: false,
      material: this.physicsMaterial,
    });
    rigidBody.quaternion.setFromAxisAngle(
      new Physics.Vec3(0, 0, 1),
      Math.PI * 0.75
    );
    rigidBody.position.set(-4, 13.5, 1.5 + positionZ);
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
    const rigidBodyShape = new Physics.Box(
      new Vec3(width / 2, height / 2, depth / 2)
    );
    const rigidBody = new Physics.Body({
      shape: rigidBodyShape,
      mass: 0,
      allowSleep: false,
      material: this.physicsMaterial,
    });
    rigidBody.quaternion.setFromAxisAngle(
      new Physics.Vec3(0, 0, 1),
      Math.PI * 0.25
    );
    rigidBody.position.set(4, 13.5, 1.5 + positionZ);
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
    const rigidBodyShape = new Physics.Box(
      new Vec3(width / 2, height / 2, depth / 2)
    );
    const rigidBody = new Physics.Body({
      shape: rigidBodyShape,
      mass: 0,
      allowSleep: false,
      material: this.physicsMaterial,
    });
    rigidBody.quaternion.setFromAxisAngle(
      new Physics.Vec3(0, 0, 1),
      Math.PI * 0.75
    );
    rigidBody.position.set(4, 11.3, 1.5 + positionZ);
    rightDiagonalWall2.position.copy(rigidBody.position);
    rightDiagonalWall2.quaternion.copy(rigidBody.quaternion);
    this.physicsWorld.addBody(rigidBody);
    return rightDiagonalWall2;
  }
}
