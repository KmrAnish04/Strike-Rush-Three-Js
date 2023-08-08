import { Mesh, BoxGeometry, MeshBasicMaterial } from "three";
import Experience from "../../Experience.js";
import * as Physics from "cannon-es";
import { Vec3 } from "cannon-es";


export default class Ramps {
    constructor(rampType, modelPostition, modelScaling, positionZ) {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.time = this.experience.time;
        this.debug = this.experience.debug;
        this.physicsWorld = this.experience.physicsWorld;

        // Resource
        this.resource = rampType;
        console.log(modelPostition);
        this.setModel(modelPostition, modelScaling, positionZ)
    }


    setModel(modelPosition, modelScaling, positionZ) {
        this.model = this.resource;
        this.model.scale.set(modelScaling.x, modelScaling.y, modelScaling.z);
        this.model.position.set(modelPosition.x, modelPosition.y, modelPosition.z);
        // this.model.rotation.set(Math.PI / 2, 0, 0)
        this.scene.add(this.model);
        this.addPhysicsProperties(this.model, positionZ)
        console.log("modellapm", this.model)
    }

    addPhysicsProperties(lampModel, positionZ) {
        const lampObject = new Mesh(
            new BoxGeometry(6, 1, 7),
            new MeshBasicMaterial({ color: 0xffff00 })
        );
        const physicsMaterial = new Physics.Material("Default");
        //Physics
        const rigidBodyShape = new Physics.Box(new Vec3(3, 0.5, 3.5));
        const rigidBody = new Physics.Body({
            shape: rigidBodyShape,
            mass: 0,
            allowSleep: false,
            material: physicsMaterial,
        });

        rigidBody.velocity.x = 100;
        // ballPinRigids.push(rigidBody);
        // lampObject.position.set(10, 10, 10)
        // rigidBody.position.x = lampModel.position.x;
        // rigidBody.position.y = lampModel.position.y;
        // rigidBody.position.z = lampModel.position.z;
        rigidBody.position.set(lampModel.position.x, lampModel.position.y + 0.91, lampModel.position.z - 3 + positionZ)
        lampObject.position.copy(rigidBody.position)
        this.scene.add(lampObject)
        rigidBody.quaternion.setFromAxisAngle(
            new Physics.Vec3(1, 0, 0),
            Math.PI * 1.15
        );
        this.model.position.z = -6 + positionZ
        this.model.quaternion.copy(rigidBody.quaternion)
        this.model.quaternion.setFromAxisAngle(new Physics.Vec3(0, 1, 0), Math.PI)
        lampObject.quaternion.copy(rigidBody.quaternion)
        // rigidBody.position.set(-4, 13.5, 1.5 + positionZ);
        // leftDiagonalWall2.position.copy(rigidBody.position);
        // leftDiagonalWall2.quaternion.copy(rigidBody.quaternion);
        this.physicsWorld.addBody(rigidBody);
    }
}

