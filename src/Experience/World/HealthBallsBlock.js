import { Mesh, SphereGeometry, MeshBasicMaterial } from "three";
import { Vec3 } from "cannon-es";
import { threeToCannon, ShapeType } from 'three-to-cannon';
import { getPhysicsBody } from "../Utils/PhycisBodyHelper.js";
import Experience from "../Experience.js";

export default class HealthBallsBlock {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.time = this.experience.time;
        this.debug = this.experience.debug;
        this.physicsWorld = this.experience.physicsWorld;
        this.resource = this.resources.items.HealthBall;

        this.createHealthBallsBlock(5, new Vec3(1.5, 0.25, -70))

    }

    createBalls(modelPosition) {

        let model = this.resource.clone();
        console.log("Health ball: ", model)
        model.children.pop()

        model.children[0].scale.set(0.007, 0.007, 0.007)
        model.children[0].position.set(modelPosition.x, modelPosition.y, modelPosition.z)

        let rigidBody = getPhysicsBody(model.children[0], ShapeType.SPHERE);
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

    createHealthBallsBlock(size, positionToSetOn) {
        let gapX = 0.7; // Horizontal Gap b/w rows
        let gapZ = 2; // Vertical Gap b/w cols

        let startX = positionToSetOn.x - 5;
        let startY = positionToSetOn.y;
        let startZ = positionToSetOn.z - 5;

        for (let row = 1; row <= size; row++) {
            let rowX = startX;
            for (let col = 1; col <= size; col++) {
                console.log("creating daimond")
                let pos = new Vec3(rowX + gapX, startY, startZ);
                this.createBalls(pos);
                rowX = pos.x + gapX;
                // startY = pos.y;
            }
            startZ += gapZ;
        }
    }

}