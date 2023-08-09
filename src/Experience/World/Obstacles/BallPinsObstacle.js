import * as THREE from "three";
import Experience from "../../Experience.js";
import * as Physics from "cannon-es";
import { Vec3 } from "cannon-es";

export default class BallPinsObstacle {
    constructor(modelPostition, modelScaling) {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.time = this.experience.time;
        this.debug = this.experience.debug;
        this.physicsWorld = this.experience.physicsWorld;

        // Resource
        this.resource = this.resources.items.ObstacleBowlingPin;
        console.log(modelPostition);
        this.setUpBallPinsObstacle(modelPostition, modelScaling);
        // this.animate();

    }

    setUpBallPinsObstacle(modelPosition, modelScaling) {
        this.ballPins = this.createBallingPins(10, modelPosition, modelScaling);
        this.rigids = this.addPhysicsOnBallPins(this.ballPins);
        this.arrangePinsModel()
        this.arrangePinsRigidBodies(); // Making pattern of ballpins
    }

    createBallingPins(noOfBallPins, modelPosition, modelScaling) {
        let ballPinsArr = [];
        let ballPinModel = this.resource;
        ballPinModel.children.pop();
        // const pinsGroup = new THREE.Group();
        for (let ballPinCnt = 0; ballPinCnt < noOfBallPins; ballPinCnt++) {
            ballPinsArr.push(ballPinModel.clone());
            // pinsGroup.add(ballPinModel.clone());
        }
        // this.scene.add(pinsGroup);
        ballPinsArr.forEach((model, index) => {
            model.scale.set(modelScaling.x, modelScaling.y, modelScaling.z);
            model.position.set(
                modelPosition.x,
                modelPosition.y,
                modelPosition.z + index
            );
            model.rotation.set(Math.PI / -2, 0, 0);
        });

        return ballPinsArr;
    }

    arrangePinsRigidBodies() {
        // const pinsGroup = new THREE.Group();

        const rows = 4; // Number of rows
        const cols = 4; // Number of columns

        const spacingX = 0.35; // Horizontal distance between pins
        const spacingZ = 0.35; // Vertical distance between pins

        const startX = -(cols - 1) * spacingX * 0.5;
        const startZ = -(rows - 1) * spacingZ * 0.8;

        let idx = this.rigids.length - 1;
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols - row; col++) {
                const pin = this.rigids[idx];
                const x = -(startX + 1 + col * spacingX) * 2 + 1;
                const z = (startZ + row * spacingZ) * 2 - 1;
                pin.position.set(x, 0.71, z);
                this.ballPins[idx].position.copy(pin.position)
                this.ballPins[idx].position.y = 0
                idx--;
                // pinsGroup.add(pin);
            }
        }
        // pinsGroup.position.x = -1.8;

        // pinsGroup.rotation.y = (Math.PI / 180) * 225;
        // this.scene.add(pinsGroup);
    }

    arrangePinsModel() {
        const pinsGroup = new THREE.Group();
        this.ballPins.forEach((pin) => {
            pinsGroup.add(pin);
        })
        this.scene.add(pinsGroup);
    }

    addPhysicsOnBallPins(ballPinArr) {
        let ballPinRigids = []
        console.log("hi", ballPinArr)
        ballPinArr.forEach((ballPin) => {
            console.log(ballPin.children[0]);
            //Physics
            const rigidBodyShape = new Physics.Cylinder(0.18, 0.18, 1.4, 64);
            const rigidBody = new Physics.Body({
                shape: rigidBodyShape,
                mass: 0,
                allowSleep: false,
                // material: this.physicsMaterial,
            });
            rigidBody.velocity.x = 10
            ballPinRigids.push(rigidBody);
            ballPin.position.copy(rigidBody.position)

            // rigidBody.quaternion.setFromAxisAngle(
            //     new Physics.Vec3(0, 0, 1),
            //     Math.PI * 0.75
            // );
            // rigidBody.position.set(-4, 13.5, 1.5 + positionZ);
            // leftDiagonalWall2.position.copy(rigidBody.position);
            // leftDiagonalWall2.quaternion.copy(rigidBody.quaternion);
            this.physicsWorld.addBody(rigidBody);
            // const initialVelocity = new Physics.Vec3(0, 10, 0); // Set initial velocity in the desired direction
            // rigidBody.velocity.copy(initialVelocity);
        })
        return ballPinRigids
        // return leftDiagonalWall2;
    }


    // animate();
    update() { // Step the Cannon.js physics simulation
        // const timeStep = 1 / 60; // Time step for physics simulation
        // this.physicsWorld.step(timeStep);
        for (let i = 0; i < this.ballPins.length; i++) {
            this.ballPins[i].position.copy(this.rigids[i].position);
            this.ballPins[i].position.y = 0
            // this.rigids[i].position.x += 1 * this.experience.time.delta / 1000
        }
        // Update Three.js mesh position based on Cannon.js body position


    }
}
