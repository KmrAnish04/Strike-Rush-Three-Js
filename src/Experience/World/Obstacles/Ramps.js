import { Mesh, BoxGeometry, MeshBasicMaterial } from "three";
import Experience from "../../Experience.js";
import * as Physics from "cannon-es";
import { Vec3 } from "cannon-es";
import { threeToCannon, ShapeType } from 'three-to-cannon';
import { getPhysicsBody } from "../../Utils/PhycisBodyHelper.js";

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
        lampObject.position.set(lampModel.position.x, lampModel.position.y + 0.91, lampModel.position.z - 3 + positionZ)
        lampObject.quaternion.setFromAxisAngle(
            new Physics.Vec3(1, 0, 0),
            Math.PI * 1.15
        );
        this.scene.add(lampObject)

        this.model.position.z = -6 + positionZ
        this.model.quaternion.copy(lampObject.quaternion)
        this.model.quaternion.setFromAxisAngle(new Physics.Vec3(0, 1, 0), Math.PI)
        this.physicsWorld.addBody(getPhysicsBody(lampObject, ShapeType.BOX));
    }
}

