import {
    Mesh, SphereGeometry, MeshBasicMaterial
} from "three";

// import * as Physics from "cannon-es";
import { Vec3 } from "cannon-es";
import { threeToCannon, ShapeType } from 'three-to-cannon';
import { getPhysicsBody } from "../Utils/PhycisBodyHelper.js";
import Experience from "../Experience.js";

export default class GemsBlock {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.time = this.experience.time;
        this.debug = this.experience.debug;
        this.physicsWorld = this.experience.physicsWorld;
        this.resource = this.resources.items.GemBall;

        this.createGemBlock(5, new Vec3(0, 0.25, -50))

    }

    createGemBalls(modelPosition) {

        let model = this.resource.clone();
        model.children.pop()
        console.log("diamon: ", model.children[0])

        model.children[0].scale.set(0.007, 0.007, 0.007)
        model.children[0].position.set(modelPosition.x, modelPosition.y, modelPosition.z)

        let rigidBody = getPhysicsBody(model.children[0], ShapeType.HULL);
        rigidBody.quaternion.setFromAxisAngle(
            new Vec3(1, 0, 0),
            -Math.PI * 0.5
        );
        model.children[0].quaternion.copy(rigidBody.quaternion)
        rigidBody.quaternion.copy(model.children[0].quaternion)

        this.scene.add(model)
        this.physicsWorld.addBody(rigidBody);

        return rigidBody;
    }

    createGemBlock(size, positionToSetOn) {
        let gapX = 1; // Horizontal Gap b/w rows
        let gapZ = 4; // Vertical Gap b/w cols

        let startX = positionToSetOn.x - 5;
        let startY = positionToSetOn.y;
        let startZ = positionToSetOn.z - 5;

        for (let row = 1; row <= size; row++) {
            let rowX = startX;
            for (let col = 1; col <= size; col++) {
                console.log("creating daimond")
                let pos = new Vec3(rowX + gapX, startY, startZ);
                this.createGemBalls(pos);
                rowX = pos.x + gapX;
                // startY = pos.y;
            }
            startZ += gapZ;
        }
    }

}