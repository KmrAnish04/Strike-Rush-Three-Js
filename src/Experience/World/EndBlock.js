import Experience from "../Experience";
import WinBoxArr from "./Constants";
import { getPhysicsBody } from "../Utils/PhycisBodyHelper";
import { ShapeType } from "three-to-cannon";

import {
  BoxGeometry,
  CylinderGeometry,
  DoubleSide,
  Group,
  Mesh,
  MeshBasicMaterial,
  PlaneGeometry,
} from "three";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { Vec3, Material } from "cannon-es";

export default class EndBlock {
  constructor(positionZ, wallMaterial, scoreBoxMaterial) {
    this.experience = new Experience();
    this.resources = this.experience.resources;
    this.scene = this.experience.scene;
    this.endBlockGroup = new Group();
    this.physicsWorld = this.experience.physicsWorld;
    this.scoreBoxMaterial = scoreBoxMaterial;
    this.winBoxArray = WinBoxArr;
    // this.scoreX5Material = scoreX5Material;
    this.physicsObjects = [];
    // this.winBox = this.constructWinBox(positionZ, 0xff0000, -6.5, "1X");
    // this.winBox = this.constructWinBox(positionZ, 0xfff44f, -3.25, "3X");
    // this.winBox = this.constructWinBox(positionZ, 0x74b72e, 0, "5X");
    // this.winBox = this.constructWinBox(positionZ, 0xfff44f, 3.25, "3X");
    // this.winBox = this.constructWinBox(positionZ, 0xff0000, 6.5, "1X");
    this.contructLastBlock(positionZ, wallMaterial);
    this.scene.add(this.endBlockGroup);

    // this.gem = this.resources.items.GemBall;
  }

  contructLastBlock(positionZ, wallMaterial) {
    this.wallMaterial = wallMaterial;
    const endWall = this.constructEndWall(15, positionZ);
    const walls = this.constructWalls(positionZ);
    const circularHit = this.constructCircularHit(25, positionZ);
    this.endBlockGroup.add(endWall, walls, circularHit);
    this.constructWinBoxes(positionZ);
    this.constructWinBoxBoundry();
  }

  constructEndWall(positionY, positionZ) {
    const width = 22;
    const height = 35;
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
    physicsEndWallBody.position.y = positionY + 2.5;
    physicsEndWallBody.position.z = positionZ - 1;

    const physicsHiddenWallBody = getPhysicsBody(
      endWall,
      ShapeType.BOX,
      this.wallMaterial
    );
    physicsHiddenWallBody.position.y = positionY + 10;
    physicsHiddenWallBody.position.z = positionZ - 1;
    this.physicsWorld.addBody(physicsHiddenWallBody);
    endWall.position.copy(physicsEndWallBody.position);
    this.physicsWorld.addBody(physicsEndWallBody);
    return endWall;
  }

  constructCircularHit(positionY, positionZ) {
    const radiusTop = 1.3;
    const radiusBottom = 2;
    const height = 4;
    const numberOfSegments = 64;
    const circularHit = new Mesh(
      new CylinderGeometry(radiusTop, radiusBottom, height, numberOfSegments),
      new MeshBasicMaterial({ color: 0xe201c9 })
    );
    const physicsCircularHitBody = getPhysicsBody(
      circularHit,
      ShapeType.HULL,
      this.wallMaterial
    );
    physicsCircularHitBody.quaternion.setFromAxisAngle(
      new Vec3(-1, 0, 0),
      Math.PI * 0.5
    );
    physicsCircularHitBody.position.y = positionY - 1;
    physicsCircularHitBody.position.z = positionZ + 1.5;
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
    const height = 36;
    const depth = 5.5;
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
    rigidBody.position.x = -10.5;
    rigidBody.position.y = 17;
    rigidBody.position.z = 1.5 + positionZ;
    const hiddenBody = getPhysicsBody(
      leftWall,
      ShapeType.BOX,
      this.wallMaterial
    );
    hiddenBody.position.x = -10.5;
    hiddenBody.position.y = 24.5;
    hiddenBody.position.z = 1.5 + positionZ;
    leftWall.position.copy(rigidBody.position);
    this.physicsWorld.addBody(rigidBody);
    this.physicsWorld.addBody(hiddenBody);
    return leftWall;
  }

  createRightWall(positionZ) {
    const width = 1;
    const height = 36;
    const depth = 5.5;
    const rightWall = new Mesh(
      new BoxGeometry(width, height, depth),
      new MeshBasicMaterial({ color: 0xe8e8e7 })
    );
    const rigidBody = getPhysicsBody(
      rightWall,
      ShapeType.BOX,
      this.wallMaterial
    );
    rigidBody.position.x = 10.5;
    rigidBody.position.y = 17;
    rigidBody.position.z = 1.5 + positionZ;
    const hiddenBody = getPhysicsBody(
      rightWall,
      ShapeType.BOX,
      this.wallMaterial
    );
    hiddenBody.position.x = 10.5;
    hiddenBody.position.y = 24.5;
    hiddenBody.position.z = 1.5 + positionZ;
    rightWall.position.copy(rigidBody.position);
    this.physicsWorld.addBody(rigidBody);
    this.physicsWorld.addBody(hiddenBody);
    return rightWall;
  }

  createBottomWall(positionZ) {
    const width = 22;
    const height = 1;
    const depth = 5.5;
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
    const width = 6;
    const height = 1;
    const depth = 5.5;
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
    rigidBody.quaternion.setFromAxisAngle(new Vec3(0, 0, 1), Math.PI * 0.3);
    rigidBody.position.set(-8.7, 17.3, 1.5 + positionZ);
    leftDiagonalWall1.position.copy(rigidBody.position);
    leftDiagonalWall1.quaternion.copy(rigidBody.quaternion);
    this.physicsWorld.addBody(rigidBody);
    return leftDiagonalWall1;
  }

  createLeftDiagonalWall2(positionZ) {
    const width = 6;
    const height = 1;
    const depth = 5.5;
    const leftDiagonalWall2 = new Mesh(
      new BoxGeometry(width, height, depth),
      new MeshBasicMaterial({ color: 0xe8e8e7 })
    );
    const rigidBody = getPhysicsBody(
      leftDiagonalWall2,
      ShapeType.BOX,
      this.wallMaterial
    );
    rigidBody.quaternion.setFromAxisAngle(new Vec3(0, 0, 1), Math.PI * 0.7);
    rigidBody.position.set(-8.7, 21.6, 1.5 + positionZ);
    leftDiagonalWall2.position.copy(rigidBody.position);
    leftDiagonalWall2.quaternion.copy(rigidBody.quaternion);
    this.physicsWorld.addBody(rigidBody);
    return leftDiagonalWall2;
  }

  createRightDiagonalWall1(positionZ) {
    const width = 6;
    const height = 1;
    const depth = 5.5;
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
    rigidBody.quaternion.setFromAxisAngle(new Vec3(0, 0, 1), Math.PI * 0.3);
    rigidBody.position.set(8.7, 21.6, 1.5 + positionZ);
    rightDiagonalWall1.position.copy(rigidBody.position);
    rightDiagonalWall1.quaternion.copy(rigidBody.quaternion);
    this.physicsWorld.addBody(rigidBody);
    return rightDiagonalWall1;
  }

  createRightDiagonalWall2(positionZ) {
    const width = 6;
    const height = 1;
    const depth = 5.5;
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
    rigidBody.quaternion.setFromAxisAngle(new Vec3(0, 0, 1), Math.PI * 0.7);
    rigidBody.position.set(8.7, 17.3, 1.5 + positionZ);
    rightDiagonalWall2.position.copy(rigidBody.position);
    rightDiagonalWall2.quaternion.copy(rigidBody.quaternion);
    this.physicsWorld.addBody(rigidBody);
    return rightDiagonalWall2;
  }

  constructWinBoxes(positionZ) {
    for (let winBox of this.winBoxArray) {
      this.constructWinBlocks(
        winBox.isFrontWall,
        positionZ + winBox.positionZ - 0.7,
        winBox.positionY,
        winBox.color,
        winBox.positionX,
        winBox.score,
        winBox.rotationY,
        winBox.rotationX
      );
    }
  }
  constructWinBoxBoundry() {
    let boxMesh = new Mesh(
      new BoxGeometry(20, 15, 1),
      new MeshBasicMaterial({ color: "#e75480" })
    );
    let boxRigidBody = getPhysicsBody(
      boxMesh,
      ShapeType.BOX,
      new Material("default")
    );

    boxMesh.quaternion.copy(boxRigidBody.quaternion);
    boxMesh.position.copy(boxRigidBody.position);

    boxRigidBody.position.z = -388.5;
    boxRigidBody.position.y = 6.5;
    // this.scene.add(boxMesh);
    this.physicsWorld.addBody(boxRigidBody);
  }

  constructWinBlocks(
    isFrontWall,
    positionZ,
    positionY,
    color,
    positionX,
    score,
    rotationY,
    rotationX
  ) {
    const planeMesh = new Mesh(
      new BoxGeometry(4, 4, 0.3, 2, 2, 2),
      new MeshBasicMaterial({ color: color, side: DoubleSide })
    );

    const boxRigidBody = getPhysicsBody(
      planeMesh,
      ShapeType.BOX,
      this.scoreBoxMaterial,
      0
    );
    this.scene.add(planeMesh);
    this.physicsWorld.addBody(boxRigidBody);
    boxRigidBody.position.x = positionX;
    boxRigidBody.position.y = 2.6 + positionY;
    boxRigidBody.position.z = positionZ + 1.8;
    if (rotationY) {
      boxRigidBody.quaternion.setFromAxisAngle(new Vec3(0, 1, 0), Math.PI / 2);
    }
    if (rotationX) {
      boxRigidBody.quaternion.setFromAxisAngle(new Vec3(1, 0, 0), Math.PI / 2);
    }
    planeMesh.position.copy(boxRigidBody.position);
    planeMesh.quaternion.copy(boxRigidBody.quaternion);
    if (isFrontWall) {
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
      textMesh.position.copy(planeMesh.position);
      textMesh.position.z += 0.5;
      textMesh.position.y += 0;
      this.scene.add(textMesh);
    }
    boxRigidBody.myData = { score: score };
  }
}
