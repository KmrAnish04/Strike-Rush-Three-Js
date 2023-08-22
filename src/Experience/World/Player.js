import Experience from "../Experience.js";
import EndGamePopup from "./EndGamePopUp.js";
import { getPhysicsBody } from "../Utils/PhycisBodyHelper.js";
import { ShapeType } from "three-to-cannon";

import {
  Mesh,
  MeshBasicMaterial,
  Group,
  PlaneGeometry,
  SpriteMaterial,
  Sprite,
  Color,
} from "three";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { gsap } from "gsap";
import Constants, { COLLISION_BODIES } from "./Constants.js";
import { Vec3 } from "cannon-es";

export default class Player {
  constructor(playerMaterial, options) {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.time = this.experience.time;
    this.debug = this.experience.debug;
    this.physicsWorld = this.experience.physicsWorld;
    this.camera = this.experience.camera.instance;
    this.playerMaterial = playerMaterial;
    this.endAnimation = false;
    this.PlayerBallModel = this.resources.items.HealthBall;
    this.gemModel = this.resources.items.GemBall;
    this.gemCollected = 0;

    this.RigidBodiesArr = [];
    this.bodyMeshesArr = [];
    this.sphereRadius = 0.3;
    this.headBody = null;
    this.isReachedDestination = false; // weather player reached to endblock or not

    this.createPlayer(7);
    this.headBody = this.RigidBodiesArr[0];
    this.registerEvents();
    // this.checkCollision();
    this.playerBallCnt = this.createPlayerCntText(
      this.RigidBodiesArr.length.toString()
    );
    this.createHudGem();
    const rotations = 7200;
    for (let ball of this.bodyMeshesArr) {
      gsap.to(ball.rotation, { duration: 20, x: (Math.PI / 180) * rotations });
    }
  }

  createScoreText(score) {
    // Score Popups
    const textGeometry = new TextGeometry(score, {
      font: this.resources.items.scoreFont,
      size: 0.7,
      height: 0.1,
      fontWeight: 200,
    });
    textGeometry.center();
    const textMesh = new Mesh(
      textGeometry,
      new MeshBasicMaterial({ color: 0x000000 })
    );

    textMesh.position.x = this.headBody.position.x;
    textMesh.position.z = this.headBody.position.z;
    textMesh.position.y = 0;

    this.scene.add(textMesh);
    textMesh.material.transparent = true;
    gsap
      .to(textMesh.position, {
        duration: 0.2,
        y: Math.random() + 5,
        x: Math.random() * (3.2 - -3.2) + -3.2,
      })
      .then(() => {
        gsap
          .to(textMesh.material, {
            duration: 0.4,
            opacity: 0,
          })
          .then(() => {
            textGeometry.dispose();
            textMesh.material.dispose();
            this.scene.remove(textMesh);
          });
      });
  }

  createPlayer(noOfBalls) {
    let size = 0.4;
    this.mass = 2; // Ball Mass
    let space = 1 * size;

    // Create Mesh for rigidbodies
    for (let i = 0; i < noOfBalls; i++) {
      let spMsh = this.createBodyMesh();
      const sphereBody = this.addPhysicsToBodyMesh(spMsh);
      sphereBody.name = i;
      sphereBody.position.set(
        0,
        2,
        -((noOfBalls - i) * (size * 2 + 2 * space) + size * 2 + space) + 1
      );

      // Storing the references of body mesh and rigidbodies for future use
      this.bodyMeshesArr.push(spMsh);
      this.RigidBodiesArr.push(sphereBody);

      // add to the world to visulaize the bodies
      this.scene.add(spMsh);
      this.physicsWorld.addBody(sphereBody);
      this.checkCollisionForBody(sphereBody);
    }
  }

  createPlayerCntText(count) {
    let ballCnt = new Group();

    // create text
    let textGeometry = new TextGeometry(count, {
      font: this.resources.items.scoreFont,
      size: 0.7,
      height: 0.6,
    });
    textGeometry.center();
    let textMesh = new Mesh(
      textGeometry,
      new MeshBasicMaterial({ color: 0xffffff })
    );
    textMesh.position.z = 0.4;
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
    // window.addEventListener("mou");
    window.addEventListener("mousemove", (event) => {
      // Calculate mouse position in normalized device coordinates (-1 to 1)
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

      const min = -2.7;
      const max = 2.7;
      // Clamp number between two values with the following line:
      const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

      if (this.headBody && !this.isReachedDestination) {
        this.headBody.position.x = mouseX * 4;
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

  createHudGem() {
    const gemSpriteMaterial = new SpriteMaterial({
      map: this.resources.items.HudGem,
      // color: 0xffffff,
      // transparent: true,
    });
    this.hudGem = new Sprite(gemSpriteMaterial);
    this.hudGem.scale.set(1, 1, 1);
    this.scene.add(this.hudGem);
    this.hudGem.position.z = this.camera.position.x + 12;
    this.hudGem.position.y = this.camera.position.y + 14;
    this.hudGem.position.x = this.camera.position.z - 74;
  }

  checkCollisionForBody(rigidBody) {
    rigidBody.addEventListener("collide", (collide) => {
      const bodyType = collide.body.material.name;

      switch (bodyType) {
        case COLLISION_BODIES.HEALTH: {
          console.log("score added", collide.body);
          collide.body.collisionFilterMask = 0; // dont take collision again with already collided body
          console.log("before", this.headBody, this.RigidBodiesArr);

          this.addPlayerBalls(collide.body.myData.score);
          console.log("all balls: ", this.RigidBodiesArr);
          this.scene.remove(collide.body.myData.scoreBlock);
          this.physicsWorld.removeBody(collide.body);

          this.createScoreText(`+${collide.body.myData.score.toString()}`);
          // Update Ball Text
          this.scene.remove(this.playerBallCnt);
          this.playerBallCnt = this.createPlayerCntText(
            this.RigidBodiesArr.length.toString()
          );
          break;
        }
        case COLLISION_BODIES.GEM: {
          ++this.gemCollected;
          this.createScoreText("+1");
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
            delay: 0.3,
            duration: 0.4,
            x: this.camera.position.x + 12,
            y: this.camera.position.y - 2,
            z: this.camera.position.z - 74,
          });

          // this.endGamePopup()

          break;
        }
        case COLLISION_BODIES.OBSTACLE: {
          console.log("Collided with obstacle");
          collide.body.collisionFilterMask = 0;
          if (this.RigidBodiesArr.length) {
            // gsap.delayedCall(5, this.removePlayerBalls());
            this.removePlayerBalls(); // Subtracting Player's Health by removing the balls
            this.headBody = this.RigidBodiesArr[0];
            console.log("muyHead: ", this.headBody);
          } else {
            this.endGamePopup();
            console.log("*********** Game Stopped ************");
          }

          this.scene.remove(this.playerBallCnt);
          this.playerBallCnt = this.createPlayerCntText(
            this.RigidBodiesArr.length.toString()
          );

          break;
        }
        case COLLISION_BODIES.ENDRAMP: {
          this.isReachedDestination = true;
          this.scene.remove(this.playerBallCnt);
          this.endCameraAnimation();
          for (let i = 0; i < this.RigidBodiesArr.length; i++) {
            gsap.to(this.camera.rotation, {
              duration: 1.5,
              x: this.camera.rotation.x + (Math.PI / 180) * 15,
              z: 0,
            });
            gsap
              .to(this.RigidBodiesArr[i].velocity, {
                duration: 0.6,
                x: -1 + (0.3 * i) / 2,
                y: 8.5,
                z: -18 - i * 2,
              })
              .then(() => {
                gsap
                  .to(this.RigidBodiesArr[i].velocity, {
                    duration: 2,
                    x: 0,
                    y: -0.5,
                    z: 0,
                  })
                  .then(() => (this.RigidBodiesArr[i].mass = 0.07));
              });
          }
          1;
          break;
        }
        case COLLISION_BODIES.SCOREBOX: {
          const impact = collide.contact.getImpactVelocityAlongNormal();
          if (impact > 0.7) {
            ++this.gemCollected;
            console.log("RIGID BODY", collide.body);
            const collectedBall = this.RigidBodiesArr.findIndex(
              (item) => item.name === collide.target.name
            );
            // if (collectedBall) this.RigidBodiesArr[collectedBall];
            let gemCollected = this.gemModel.clone().children.shift();
            gemCollected.position.set(
              Math.random() * (6.2 - -6.2) + -6.2,
              collide.body.position.y + 5,
              collide.body.position.z
            );

            this.scene.add(gemCollected);

            // Gem Animation

            const timeline = gsap.timeline();
            timeline
              .to(gemCollected.position, {
                duration: 0.3,
                y: collide.target.position.y + Math.random() * 5,
              })
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
                duration: 1,
                x: this.camera.position.x + 12,
                y: this.camera.position.y + 14,
                z: this.camera.position.z - 74,
              })
              .then(() => {
                gemCollected.material.dispose();
                gemCollected.geometry.dispose();
                this.scene.remove(gemCollected);
              });
          }
          collide.body.position.set(900, 200, 0);
          break;
        }
      }
    });
  }

  openPopup() {
    this.endGamePopup = new EndGamePopup(this.gemCollected, 2002);
  }

  removePlayerBalls() {
    // this.headBody = this.RigidBodiesArr[1];
    let rigidBody = this.RigidBodiesArr.shift();
    let mesh = this.bodyMeshesArr.shift();

    rigidBody.collisionResponse = 0;
    rigidBody.collisionFilterMask = 0;
    rigidBody.collisionFilterGroup = 0;
    // rigidBody.

    // Remove object from scene and Dispose of the mesh's geometry and material to free up resources
    this.scene.remove(mesh);
    mesh.geometry.dispose();
    mesh.material.dispose();

    // Remove the rigid body from the Physics World
    // this.physicsWorld.removeBody(rigidBody);
    console.log("headBody: ", this.RigidBodiesArr);

    // The below way of removing balls is temporary, we should remove it from scene like above, (bcox remove is giveing error so we are using on temoporary basis)

    // gsap.delayedCall(10, this.removeFromScene(mesh));
    // setTimeout(() => {
    //   this.removeFromScene(mesh);
    //   gsap.to(rigidBody.position, { duration: 0.3, x: rigidBody.position.x + 100, y: rigidBody.position.y + 10 });
    // }, 1000);
    rigidBody.position.y += 10;
    rigidBody.position.x += 100;
    console.log("rmoved", this.headBody);

    // New head
    // this.headBody = this.RigidBodiesArr[0];
  }

  removeFromScene(obj) {
    // Remove object from scene and Dispose of the mesh's geometry and material to free up resources
    this.scene.remove(obj);
    obj.geometry.dispose();
    obj.material.dispose();
  }

  createBodyMesh() {
    // Create Mesh for rigidbodies
    let spMsh = this.PlayerBallModel.clone();
    let sphereBody = spMsh.children.shift();
    sphereBody.scale.set(0.012, 0.012, 0.012);
    sphereBody.material.map = null;

    // const sphereMesh = new Mesh(sphereGeometry, sphereMaterial);
    return sphereBody;
  }

  addPhysicsToBodyMesh(bodyMesh) {
    let sphereBody = getPhysicsBody(
      bodyMesh,
      ShapeType.SPHERE,
      this.playerMaterial,
      this.mass
    );
    sphereBody.linearDamping = 0;
    sphereBody.angularDamping = 0;
    sphereBody.position.set(-4, 4, 0);
    sphereBody.fixedRotation = true;
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

      rigidBody.name = 4 + i;
      this.checkCollisionForBody(rigidBody);
      // Visulaize the bodies
      this.scene.add(bodyMesh);
      this.physicsWorld.addBody(rigidBody);

      this.bodyMeshesArr.push(bodyMesh);
      this.RigidBodiesArr.push(rigidBody);

      gsap.to(rigidBody.position, {
        duration: 0.3,
        x: this.headBody.position.x,
      });
      rigidBody.position.y = this.headBody.position.y;
    }
  }

  update() {
    // Update snake's head position based on this.direction
    if (this.headBody && !this.isReachedDestination) {
      this.headBody.velocity.z = -15;
      this.headBody.velocity.x = 0;
      if (this.headBody.velocity.z > -10) {
        this.headBody.velocity.z = -15;
      }
      this.playerBallCnt.position.x = this.headBody.position.x;
      this.playerBallCnt.position.z = this.headBody.position.z;
    }
    for (
      let body = 1;
      body < this.RigidBodiesArr.length && !this.isReachedDestination;
      body++
    ) {
      //
      this.RigidBodiesArr[body].velocity.x = 0;
      this.RigidBodiesArr[body].position.z =
        this.RigidBodiesArr[body - 1].position.z + 2;

      if (body > 0) {
        gsap.to(this.RigidBodiesArr[body].position, {
          duration: 0.1,
          x: this.RigidBodiesArr[body - 1].position.x,
        });
      }
    }

    // Update Three.js sphere positions based on physics simulation
    for (let i = 0; i < this.RigidBodiesArr.length; i++) {
      let sphereBody = this.RigidBodiesArr[i];
      let sphereMesh = this.bodyMeshesArr[i];
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
      this.hudGem.position.set(
        this.camera.position.x + 12,
        this.camera.position.y + 14,
        this.camera.position.z - 74
      );
    }
  }
}
