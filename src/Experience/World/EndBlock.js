import {
  BoxGeometry,
  CylinderGeometry,
  Group,
  Mesh,
  MeshBasicMaterial,
} from "three";
import Experience from "../Experience";
import * as Physics from "cannon-es";

export default class EndBlock {
  constructor(positionZ) {
    this.experience = new Experience();
    this.resources = this.experience.resources;
    this.scene = this.experience.scene;
    this.endBlockGroup = new Group();
    this.physicsWorld = this.experience.physicsWorld;
    // this.wings = this.resources.items.Wings.scene;
    // this.wings.traverse((child) => {
    //   if (child instanceof Mesh) {
    //     child.material.tranparent = false;
    //     child.material.depthWrite = true;
    //     child.material.alphaTest = 0.8;
    //   }
    // });
    // console.log(this.wings);
    this.contructLastBlock();
    this.endBlockGroup.position.z = positionZ;
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

  contructLastBlock() {
    const endWall = this.constructEndWall();
    const walls = this.constructWalls();
    const circularHit = this.constructCircularHit();

    this.createPhysicsWorldEndWall();
    // this.physicsWorld.addBody(physicsEndWall);
    // const wings = this.constructWings();
    this.endBlockGroup.add(endWall, walls, circularHit);
  }
  createPhysicsWorldEndWall() {
    const defaultMaterial = new Physics.Material("Default");
    const defaultContactMaterial = new Physics.ContactMaterial(
      defaultMaterial,
      defaultMaterial,
      { friction: 0.1, restitution: 0.7 }
    );
    this.physicsWorld.addContactMaterial(defaultContactMaterial);
    const endWallShape = new Physics.Box(new Physics.Vec3(5, 11.5, 0.5));
    const endWallBody = new Physics.Body({ shape: endWallShape });
    this.physicsWorld.addBody(endWallBody);
  }
  constructEndWall() {
    const endWall = new Mesh(
      new BoxGeometry(10, 23, 1),
      new MeshBasicMaterial({ color: 0xe47dd2 })
    );
    endWall.position.y = 10;
    return endWall;
  }

  constructCircularHit() {
    const circularHit = new Mesh(
      new CylinderGeometry(1.2, 1.2, 4, 64),
      new MeshBasicMaterial({ color: 0xe201c9 })
    );
    circularHit.rotation.x = -(Math.PI / 180) * 90;
    circularHit.position.y = 16;
    return circularHit;
  }

  constructWalls() {
    const wallsGroup = new Group();
    const leftWall = new Mesh(
      new BoxGeometry(1, 23, 4),
      new MeshBasicMaterial({ color: 0xe8e8e7 })
    );
    leftWall.position.x = -5.5;
    leftWall.position.y = 10;
    leftWall.position.z = 1.5;

    const rightWall = new Mesh(
      new BoxGeometry(1, 23, 4),
      new MeshBasicMaterial({ color: 0xe8e8e7 })
    );
    rightWall.position.x = 5.5;
    rightWall.position.y = 10;
    rightWall.position.z = 1.5;

    const bottomWall = new Mesh(
      new BoxGeometry(12, 1, 4),
      new MeshBasicMaterial({ color: 0xe8e8e7 })
    );
    bottomWall.position.y = -0.4;
    bottomWall.position.z = 1.5;

    const leftDiagonalWall1 = new Mesh(
      new BoxGeometry(4, 1, 4),
      new MeshBasicMaterial({ color: 0xe8e8e7 })
    );
    leftDiagonalWall1.rotation.z = (Math.PI / 180) * 45;
    leftDiagonalWall1.position.set(-4, 11.3, 1.5);
    const leftDiagonalWall2 = new Mesh(
      new BoxGeometry(4, 1, 4),
      new MeshBasicMaterial({ color: 0xe8e8e7 })
    );
    leftDiagonalWall2.rotation.z = -(Math.PI / 180) * 45;
    leftDiagonalWall2.position.set(-4, 13.5, 1.5);

    const rightDiagonalWall1 = new Mesh(
      new BoxGeometry(4, 1, 4),
      new MeshBasicMaterial({ color: 0xe8e8e7 })
    );
    rightDiagonalWall1.rotation.z = -(Math.PI / 180) * 45;
    rightDiagonalWall1.position.set(4, 11.3, 1.5);
    const rightDiagonalWall2 = new Mesh(
      new BoxGeometry(4, 1, 4),
      new MeshBasicMaterial({ color: 0xe8e8e7 })
    );
    rightDiagonalWall2.rotation.z = (Math.PI / 180) * 45;
    rightDiagonalWall2.position.set(4, 13.5, 1.5);

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
}
