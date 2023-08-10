import { Body, Box, ContactMaterial, Material, Sphere, Vec3 } from "cannon-es";
import Experience from "../Experience";
import { SphereGeometry, MeshBasicMaterial, Mesh, Group } from "three";
import { gsap } from "gsap";
import { getPhysicsBody } from "../Utils/PhycisBodyHelper";
import { ShapeType } from "three-to-cannon";
export default class Player {
  constructor(playerMaterial, playerContactPathMaterial) {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.time = this.experience.time;
    this.playerMaterial = playerMaterial;
    this.playerContactPathMaterial = playerContactPathMaterial;
    this.camera = this.experience.camera.instance;
    this.cameraControls = this.experience.camera.controls;
    this.physicsWorld = this.experience.physicsWorld;
    this.physicsWorld.addContactMaterial(this.playerContactPathMaterial);
    this.gemModel = this.experience.resources.items.Gem;
    this.meshes = [];
    this.rigidBodies = [];
    this.createPlayer();
    this.checkCollision();
  }

  checkCollision() {
    if (this.rigidBodies[0]) {
      this.rigidBodies[0].addEventListener("collide", (collide) => {
        const bodyType = collide.body.material.name;
        if (bodyType === "health") {
          this.updateTail();
        }
        if (bodyType === "gem") {
          // console.log("gem collided:", collide.body);
          // let myGem = this.gemModel.clone();
          // myGem.children.pop();

          // let newPos = collide.body.position;
          // console.log("jjj: ", this.rigidBodies[0])
          // // myGem.position.set(new Vec3(newPos.x, newPos.y + 4, newPos.z))
          // myGem.position.x = newPos.x;
          // myGem.position.y = newPos.y + 5;
          // myGem.position.z = newPos.z;
          // myGem.rotation.set(-Math.PI / 2, 0, 0)

          // myGem.scale.set(0.007, 0.007, 0.007);

          // this.scene.add(myGem)
          console.log("bodytype: ", collide.body)
          collide.body.position.y += 4
          // collide.body.scale.set(3, 3, 3)
          // collide.body.quaternion.setFromAxisAngle(new Vec3(1, 0, 0), -Math.PI * 5);

          // const animationDuration = 1; // Animation duration in seconds
          // gsap.to(collide.body.scale, {
          //   x: 2, // Scale factor along the x-axis
          //   y: 2, // Scale factor along the y-axis
          //   z: 2, // Scale factor along the z-axis
          //   duration: animationDuration,
          //   onUpdate: () => {
          //     renderer.render(scene, camera);
          //   },
          //   onComplete: () => {
          //     // Animation complete callback
          //   },
          // });
          // this.scene.remove(this.rigidBodies[0])
          // this.physicsWorld.removeBody(this.rigidBodies[0])
          // this.physicsWorld.removeBody(collide.body)
          // this.physicsWorld.removeBody(collide.body);
          // this.physicsWorld.removeBody(collide.contact.bj);
        }
        console.log(bodyType);
      });
    }
  }

  moveDirection(e) {
    for (let i = 0; i < this.rigidBodies.length; i++) {
      this.rigidBodies[i].position.x = e.x * 4;
    }
  }
  giveVelocity() {
    for (let i = 0; i < this.rigidBodies.length; i++) {
      this.rigidBodies[i].velocity.z = -5;
      this.rigidBodies[i].velocity.y = -  0.5;
    }
  }
  updateTail() {
    const radius = 0.5;
    const widthSegments = 32;
    const heightSegments = 32;
    const newBall = new Mesh(
      new SphereGeometry(radius, widthSegments, heightSegments),
      new MeshBasicMaterial({ color: 0x0086ff })
    );
    const rigidBody = getPhysicsBody(
      newBall,
      ShapeType.SPHERE,
      this.playerMaterial,
      1
    );
    rigidBody.position.z =
      this.rigidBodies[this.rigidBodies.length - 1].position.z + 1.1;
    rigidBody.position.y = 2;
    newBall.position.copy(rigidBody.position);
    this.meshes.push(newBall);
    this.physicsWorld.addBody(rigidBody);
    this.rigidBodies.push(rigidBody);
    this.scene.add(newBall);
  }
  removeVelocity() {
    for (let i = 0; i < this.rigidBodies.length; i++) {
      this.rigidBodies[i].velocity.z = 0;
      this.rigidBodies[i].velocity.y = 0;
    }
  }
  update() {
    for (let i = 0; i < this.meshes.length; i++) {
      this.meshes[i].position.copy(this.rigidBodies[i].position);
    }
    if (this.camera.position.z > -350) {
      this.camera.lookAt(
        0,
        this.meshes[0].position.y,
        this.meshes[0].position.z
      );
      window.removeEventListener("mousemove", (e) => {
        console.log(e);
      });
      // this.cameraControls.target.set(this.meshes[0].position);
      // this.camera.position.z -= 0.25;
    }
    this.giveVelocity();
    this.camera.lookAt(this.meshes[0].position);
  }

  createPlayer() {
    const radius = 0.5;
    const widthSegments = 32;
    const heightSegments = 32;
    let firstBall = new Mesh(
      new SphereGeometry(radius, widthSegments, heightSegments),
      new MeshBasicMaterial({ color: 0x0086ff })
    );
    this.meshes.push(firstBall);
    const rigidBody = getPhysicsBody(
      firstBall,
      ShapeType.SPHERE,
      this.playerMaterial,
      2
    );
    this.rigidBodies.push(rigidBody);
    this.scene.add(firstBall);
    rigidBody.position.set(0, 1, 1);
    firstBall.position.copy(rigidBody.position);
    this.physicsWorld.addBody(rigidBody);
  }
}
