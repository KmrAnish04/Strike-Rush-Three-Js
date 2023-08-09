import { Body, Box, ContactMaterial, Material, Sphere, Vec3 } from "cannon-es";
import Experience from "../Experience";
import { SphereGeometry, MeshBasicMaterial, Mesh, Group } from "three";
export default class Player {
  constructor(playerMaterial, playerContactPathMaterial) {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.time = this.experience.time;
    this.playerMaterial = playerMaterial;
    this.playerContactPathMaterial = playerContactPathMaterial;
    this.added = false;
    this.camera = this.experience.camera.instance;
    this.physicsWorld = this.experience.physicsWorld;
    this.physicsWorld.addContactMaterial(this.playerContactPathMaterial);
    this.tail = [];
    this.setPlayer();
    this.checkCollision();
  }

  checkCollision() {
    if (this.tail[0]) {
      console.log("Working");
      this.tail[0].addEventListener("collide", (collide) => {
        console.log(collide);
        const bodyA = collide.bodyA;
        const bodyB = collide.bodyB;
        console.log(
          "Collision Detected of BodyA: ",
          bodyA,
          " with BodyB: ",
          bodyB
        );
      });
    }
  }

  setPlayer() {
    const radius = 0.4;
    const widthSegments = 32;
    const heightSegments = 32;
    this.player = new Group();
    const firstBall = new Mesh(
      new SphereGeometry(radius, widthSegments, heightSegments),
      new MeshBasicMaterial({ color: 0x0086ff })
    );
    this.player.add(firstBall);
    //Physics
    const shape = new Sphere(0.4);
    this.rigidBody = new Body({
      shape: shape,
      mass: 10,
      material: this.playerContactPathMaterial,
    });
    this.rigidBody.position.set(0, 1, 0);
    this.tail.push(this.rigidBody);
    this.physicsWorld.addBody(this.rigidBody);
    this.player.position.copy(this.rigidBody.position);
    this.scene.add(this.player);
  }

  moveDirection(e) {
    for (let i = 0; i < this.tail.length; i++) {
      this.tail[i].position.x = e.x * 4;
      this.tail[i].velocity.z = -1;
      // this.player.children[i].position.copy(this.tail[i].position);
      this.tail[i].position.y = 1;
    }
  }

  updateTail() {
    const radius = 0.4;
    const widthSegments = 32;
    const heightSegments = 32;
    const newBall = new Mesh(
      new SphereGeometry(radius, widthSegments, heightSegments),
      new MeshBasicMaterial({ color: 0x0086ff })
    );
    const shape = new Sphere(0.4);
    const rigidBody = new Body({
      shape: shape,
      mass: 10,
      collisionResponse: (e) => {
        console.log(e);
      },
    });
    rigidBody.position.z = this.tail[this.tail.length - 1].position.z + 0.85;
    newBall.position.copy(rigidBody.position);
    this.physicsWorld.addBody(rigidBody);
    this.tail.push(rigidBody);
    this.player.add(newBall);
  }

  update() {
    const deltaTime = this.time.delta;
    for (let i = 0; i < this.tail.length; i++) {
      this.tail[i].position.z -= 0.05 * deltaTime;
    }
    // this.camera.position.z -= 0.05 * deltaTime;
    for (let i = 0; i < this.tail.length; i++) {
      this.player.children[i].position.copy(this.tail[i].position);
      this.tail[i].position.y = 1;
      this.player.children[i].position.y = 0;
    }
    // this.camera.lookAt(
    //   0,
    //   this.player.children[0].position.y,
    //   this.player.children[0].position.z
    // );
  }
}
