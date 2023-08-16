import { Mesh, MeshBasicMaterial, Group } from "three";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import * as THREE from "three";
import Experience from "../Experience.js";

import { getPhysicsBody } from "../Utils/PhycisBodyHelper.js";
import { ShapeType } from "three-to-cannon";
import { gsap } from "gsap";
import EndGamePopup from "./EndGamePopUp.js";

export default class Player2 {
  constructor(playerMaterial, options) {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.resource = this.resources.items.HealthBall;
    this.time = this.experience.time;
    this.debug = this.experience.debug;
    this.physicsWorld = this.experience.physicsWorld;
    this.obstacleMaterial = playerMaterial;
    this.camera = this.experience.camera.instance;
    this.endAnimation = false;
    this.gemModel = this.resources.items.GemBall;
    this.gemCollected = 0;
    // this.camera.position.z = -350;
    // this.camera.position.y = 12;
    // this.camera.position.x -= 10

    this.RigidBodiesArr = [];
    this.bodyMeshesArr = [];
    this.sphereRadius = 0.3;
    this.headBody = null;
    this.isReachedDestination = false; // weather player reached to endblock or not

    this.createPlayer(3);
    this.headBody = this.RigidBodiesArr[0];
    this.registerEvents();
    this.checkCollision();
    this.playerBallCnt = this.createPlayerCntText(
      this.RigidBodiesArr.length.toString()
    );
    // this.direction = new THREE.Vector3(0, 0, 0);
  }

  createPlayer(noOfBalls) {
    let size = 0.4;
    this.mass = 2; // Ball Mass
    let space = 1 * size;
    let n = noOfBalls;

    // Create Mesh for rigidbodies
    const sphereMesh = this.resource;

    // Create this.RigidBodiesArr and connect them with hinge constraints
    for (let i = 0; i < n; i++) {
      let spMsh = sphereMesh.clone();
      spMsh = spMsh.children.shift();
      spMsh.scale.set(0.007, 0.007, 0.007);
      spMsh.material.map = null;

      const sphereBody = getPhysicsBody(
        spMsh,
        ShapeType.SPHERE,
        this.obstacleMaterial,
        this.mass
      );
      // sphereBody.collisionFilterGroup = options.filterGroup;
      // sphereBody.collisionFilterMask = options.filterMask;
      // console.log("sphereBody filters ", options.filterGroup, options.filterMask)

      sphereBody.linearDamping = 0;
      sphereBody.angularDamping = 0;

      sphereBody.position.set(
        0,
        2,
        -((n - i) * (size * 2 + 2 * space) + size * 2 + space) + 1
      );

      this.bodyMeshesArr.push(spMsh);
      this.RigidBodiesArr.push(sphereBody);

      // Visulaize the bodies
      this.scene.add(spMsh);
      this.physicsWorld.addBody(sphereBody);
    }
  }

  createPlayerCntText(count) {
    let ballCnt = new Group();

    // create text
    let textGeometry = new TextGeometry(count, {
      font: this.resources.items.scoreFont,
      size: 0.6,
      height: 0.6,
    });
    textGeometry.center();
    let textMesh = new Mesh(
      textGeometry,
      new MeshBasicMaterial({ color: 0xffffff })
    );
    textMesh.position.z = 0.3;
    textMesh.position.y = 0.2;
    // textMesh.rotation.y = -Math.PI;
    // textMesh.lookAt(
    //   this.camera.position.x,
    //   this.camera.position.y,
    //   this.camera.position.z
    // );
    textMesh.rotation.x = (Math.PI / 180) * -15;
    // crete text base
    let textBaseMesh = new Mesh(
      new RoundedBoxGeometry(1.1, 1.1, 1, 10, 0.2),
      new MeshBasicMaterial({ color: "#FF10F0" })
    );
    textBaseMesh.lookAt(
      this.camera.position.x,
      this.camera.position.y,
      this.camera.position.z
    );
    textBaseMesh.position.y = 0.1;

    ballCnt.add(textMesh);
    ballCnt.add(textBaseMesh);
    ballCnt.position.y = 2;
    this.scene.add(ballCnt);

    return ballCnt;
  }

  registerEvents() {
    window.addEventListener("mousemove", (event) => {
      // Calculate mouse position in normalized device coordinates (-1 to 1)
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

      if (this.headBody && !this.isReachedDestination) {
        this.headBody.position.x = mouseX * 3;
        this.RigidBodiesArr.forEach((body, index) => {
          if (index > 0) {
            gsap.to(this.RigidBodiesArr[index].position, {
              duration: 0.1,
              x: this.RigidBodiesArr[index - 1].position.x,
            });
          }
        });
      }
    });
  }

  checkCollision() {
    this.RigidBodiesArr.forEach((rigidBody) => {
      rigidBody.addEventListener("collide", (collide) => {
        const bodyType = collide.body.material.name;

        switch (bodyType) {
          case "health": {
            console.log("score added", collide.body);
            collide.body.collisionFilterMask = 0; // dont take collision again with already collided body
            this.addPlayerBalls(collide.body.myData.score);
            this.scene.remove(collide.body.myData.scoreBlock);
            this.physicsWorld.removeBody(collide.body);

            // Update Ball Text
            this.scene.remove(this.playerBallCnt);
            this.playerBallCnt = this.createPlayerCntText(
              this.RigidBodiesArr.length.toString()
            );
            break;
          }
          case "gem": {
            console.log("Gem Collected: ", collide.body);
            ++this.gemCollected;
            console.log("GEM COLLECTED", this.gemCollected);
            // Gem Animation
            // const timeline = gsap.timeline();
            // timeline
            //     .to(collide.body.position, { duration: 0.3, y:7})
            //     .to(collide.body.scale, { duration: 1, x: 0.02, y: 0.02, z: 0.02 }) // Scale in
            //     .to(collide.body.scale, { duration: 0.8, x: 0.015, y: 0.015, z: 0.015 }) // Scale out
            //     .to(collide.body.position, { duration: 10, x: window.innerWidth - 500, y: window.innerHeight })

            // Play Gem Collect Animation
            gsap.to(collide.body.position, { duration: 0.3, y: 7 });
            gsap.to(collide.body.position, {
              delay: 1,
              duration: 10,
              x: window.innerWidth - 500,
              y: window.innerHeight,
            });

            break;
          }
          case "obstacle": {
            console.log("Collided with obstacle");
            collide.body.collisionFilterMask = 0;
            if (this.RigidBodiesArr.length) {
              this.removePlayerBalls(); // Subtracting Player's Health by removing the balls
            } else {
              console.log("*********** Game Stopped ************");
            }

            this.scene.remove(this.playerBallCnt);
            this.playerBallCnt = this.createPlayerCntText(
              this.RigidBodiesArr.length.toString()
            );

            break;
          }
          case "ramp": {
            this.isReachedDestination = true;
            this.scene.remove(this.playerBallCnt);

            for (let i = 0; i < this.RigidBodiesArr.length; i++) {
              gsap.to(this.RigidBodiesArr[i].velocity, {
                duration: 1,
                x: -1 + (0.3 * i) / 2,
                y: 6,
                z: -20 - i * 2,
              });
            }
            1;
            break;
          }
          case "scoreBox": {
            console.log(collide.target);
            ++this.gemCollected;
            console.log("GEM COLLECTED", this.gemCollected);
            collide.target.collisionFilterMask = 0;

            let gemCollected = this.gemModel.clone().children.shift();
            gemCollected.position.set(
              Math.random() * (6.2 - -6.2) + -6.2,
              collide.body.position.y + 5,
              collide.body.position.z
            );
            console.log("END SCORE ADDED");
            this.scene.add(gemCollected);

            // Gem Animation
            const timeline = gsap.timeline();
            timeline
              .to(gemCollected.scale, {
                duration: 1,
                x: 0.02,
                y: 0.02,
                z: 0.02,
              }) // Scale in
              .to(gemCollected.scale, {
                duration: 0.8,
                x: 0.015,
                y: 0.015,
                z: 0.015,
              }) // Scale out
              .to(gemCollected.position, {
                duration: 10,
                x: window.innerWidth - 500,
                y: window.innerHeight,
              });
            setTimeout(() => {
              this.endGamePopup = new EndGamePopup(this.gemCollected, 2002);
            }, 5000);
            break;
          }
        }
      });
    });
  }

  // Subtracting Player Health by removing the player balls
  removePlayerBalls() {
    this.headBody = this.RigidBodiesArr[1];
    const rigidBody = this.RigidBodiesArr.shift();
    const mesh = this.bodyMeshesArr.shift();

    rigidBody.collisionResponse = 0;
    rigidBody.collisionFilterMask = 0;
    rigidBody.collisionFilterGroup = 0;
    this.scene.remove(mesh);

    // Remove the rigid body from the Cannon.js physics world
    // this.physicsWorld.removeBody(rigidBody);
    // console.log("remove : ", this.RigidBodiesArr, rigidBody);
    rigidBody.position.y += 10;
    rigidBody.position.x += 100;
    console.log("rmoved", rigidBody);

    // New head
    this.headBody = this.RigidBodiesArr[0];

    // Dispose of the mesh's geometry and material to free up resources
    mesh.geometry.dispose();
    mesh.material.dispose();
  }

  createBodyMesh() {
    // Create Mesh for rigidbodies
    // const sphereGeometry = new SphereGeometry(0.5, 32, 32);
    // const sphereMaterial = new MeshBasicMaterial({ color: 0xff0000 });

    let spMsh = this.resource.clone();
    spMsh = spMsh.children.shift();
    spMsh.scale.set(0.007, 0.007, 0.007);
    // const sphereMesh = new Mesh(sphereGeometry, sphereMaterial);
    return spMsh;
  }

  addPhysicsToBodyMesh(bodyMesh) {
    let spMsh = bodyMesh;
    const sphereBody = getPhysicsBody(
      spMsh,
      ShapeType.SPHERE,
      this.obstacleMaterial,
      this.mass
    );

    sphereBody.linearDamping = 0;
    sphereBody.angularDamping = 0;

    return sphereBody;
  }

  endCameraAnimation() {
    gsap.to(this.camera.position, {
      duration: 1,
      onStart: () => {
        this.camera.lookAt(0, 5.75, -400);
      },
      z: this.camera.position.z - 60,
    });
    this.endAnimation = true;
  }

  addPlayerBalls(noOfBallsToAdd) {
    for (let i = 0; i < noOfBallsToAdd; i++) {
      let bodyMesh = this.createBodyMesh();
      let rigidBody = this.addPhysicsToBodyMesh(bodyMesh);

      rigidBody.position.x = this.headBody.position.x - 1;
      rigidBody.position.y = this.headBody.position.y;

      gsap.to(rigidBody.position, {
        duration: 0.3,
        x: this.headBody.position.x,
      });

      this.bodyMeshesArr.push(bodyMesh);
      this.RigidBodiesArr.push(rigidBody);

      // Visulaize the bodies
      this.scene.add(bodyMesh);
      this.physicsWorld.addBody(rigidBody);
    }
  }

  update() {
    // Update snake's head position based on this.direction
    if (this.headBody && !this.isReachedDestination) {
      this.headBody.velocity.z = -15;
      this.playerBallCnt.position.x = this.headBody.position.x;
      this.playerBallCnt.position.z = this.headBody.position.z;
    }
    for (
      let body = 1;
      body < this.RigidBodiesArr.length && !this.isReachedDestination;
      body++
    ) {
      this.RigidBodiesArr[body].position.z =
        this.RigidBodiesArr[body - 1].position.z + 2;
    }

    // Update Three.js sphere positions based on physics simulation
    for (let i = 0; i < this.RigidBodiesArr.length; i++) {
      const sphereBody = this.RigidBodiesArr[i];
      const sphereMesh = this.bodyMeshesArr[i];
      sphereMesh.position.copy(sphereBody.position);
      sphereMesh.quaternion.copy(sphereBody.quaternion);
    }

    if (this.RigidBodiesArr.length && !this.isReachedDestination) {
      this.camera.position.set(
        0,
        this.RigidBodiesArr[0].position.y + 20,
        this.RigidBodiesArr[0].position.z + 60
      );
      this.camera.lookAt(
        0,
        this.RigidBodiesArr[0].position.y,
        this.RigidBodiesArr[0].position.z
      );
    } else {
      if (!this.endAnimation) {
        this.endCameraAnimation();
      }
    }
  }
}
