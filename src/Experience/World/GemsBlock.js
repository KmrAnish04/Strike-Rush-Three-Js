import * as THREE from "three";
import Experience from "../../Experience.js";
import * as Physics from "cannon-es";
import { Vec3 } from "cannon-es";

export default class GemsBlock {
    constructor(modelPostition, modelScaling) {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.time = this.experience.time;
        this.debug = this.experience.debug;
        this.physicsWorld = this.experience.physicsWorld;
        this.resource = this.resources.items.GemBall;

    }

    createGemBall() {
        const radius = 0.4;
        const widthSegments = 32;
        const heightSegments = 32;
        // this.player = new Group();
        const gemBall = new Mesh(
            new SphereGeometry(radius, widthSegments, heightSegments),
            new MeshBasicMaterial({ color: 0x0086ff })
        );
        // this.player.add(firstBall);

        //Adding Physics Properties
        const shape = new Sphere(0.4);
        const gemBallMaterial = new Physics.Material("GemBallMaterial");

        rigidBody = new Body({
            shape: shape,
            mass: 10,
            material: gemBallMaterial,
        });

        rigidBody.position.set(0, 1, 0);
        // this.tail.push(this.rigidBody);
        this.physicsWorld.addBody(this.rigidBody);
        gemBall.position.copy(rigidBody.position);
        this.scene.add(gemBall);

        return rigidBody;
    }

    createGemBlock(size, positionToSetOn){
        let gapX = 0.5; // Horizontal Gap b/w rows
        let gapY = 0.5; // Vertical Gap b/w cols
        for(let row=1; row<=size; row++){
            for(let col=1; col<=size; col++){

            }
        }
    }

}