import { Mesh, SphereGeometry, MeshBasicMaterial } from "three";
import Experience from "../Experience.js";

import { getPhysicsBody } from "../Utils/PhycisBodyHelper.js";
import { ShapeType } from "three-to-cannon";
import { Vec3, HingeConstraint, PointToPointConstraint, LockConstraint, Material } from "cannon-es";



export default class playerBalls {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.time = this.experience.time;
        this.debug = this.experience.debug;
        this.physicsWorld = this.experience.physicsWorld;
        this.obstacleMaterial = new Material("base");
        this.camera = this.experience.camera.instance;
        ;
        // this.obstacleMaterial = obstacleMaterial;
        this.b1 = this.createPlayer();
        let b2 = this.createPlayer();
        let b3 = this.createPlayer();
        let b4 = this.createPlayer();

        this.b1.position.set(1, 5, 4);
        b2.position.set(1, 5, 3);
        b3.position.set(1, 5, 2);
        b4.position.set(1, 5, 1);
        // b1.velocity.x = 1;
        // b2.velocity.x = 1;


        var localPivotA = new Vec3(0, 0, 0);
        var localPivotB = new Vec3(0, 0, 0);
        var constraint1 = new LockConstraint(this.b1, b2);
        var constraint2 = new LockConstraint(b2, b3);
        var constraint3 = new LockConstraint(b3, b4);
        this.physicsWorld.addConstraint(constraint1);
        this.physicsWorld.addConstraint(constraint2);
        this.physicsWorld.addConstraint(constraint3);



        // var constraint1 = new PointToPointConstraint(this.b1, localPivotA, b2, localPivotB);
        // var constraint2 = new PointToPointConstraint(b2, localPivotA, b3, localPivotB);
        // var constraint3 = new PointToPointConstraint(b3, localPivotA, b4, localPivotB);
        // this.physicsWorld.addConstraint(constraint1);
        // this.physicsWorld.addConstraint(constraint2);
        // this.physicsWorld.addConstraint(constraint3);
        // b1.position.set(0, 0, 0);
        // this.addConstraintsTT(b1, b2)
        // this.addConstraintsTT(b2, b3)
        // this.addConstraintsTT(b3, b4)
        // this.camera.lookAt(this.b1.position)

        this.registerEvents();

    }

    registerEvents() {
        // window.addEventListener("touchmove", (e) => this.mousemove(e));
        window.addEventListener("mousemove", (e) => this.mousemove(e));
        // window.addEventListener("click", () => {
        //     if (!this.startGame) {
        //         this.startGame = true;
        //         this.player.giveVelocity()
        //     }
        // });
    }

    mousemove(event) {
        // if (this.startGame === true) {
        // this.mouse.x = (event.clientX / window.innerWidth - 0.5) * 2;
        // this.mouse.y = -(event.clientY / window.innerHeight - 0.5) * 2;
        // this.b1.velocity.z -= 0.1;
        this.b1.position.x = (event.clientX / window.innerWidth - 0.5) * 20;
        // }
    }

    createPlayer() {
        const radius = 0.5;
        const widthSegments = 32;
        const heightSegments = 32;
        let ball = new Mesh(
            new SphereGeometry(radius, widthSegments, heightSegments),
            new MeshBasicMaterial({ color: 0x0086ff })
        );
        // this.meshes.push(firstBall);
        const rigidBody = getPhysicsBody(ball, ShapeType.SPHERE, this.playerMaterial, 2);
        // this.rigidBodies.push(rigidBody);
        // rigidBody.position.set(0, 1, 1);
        ball.position.copy(rigidBody.position);
        this.scene.add(ball);
        this.physicsWorld.addBody(rigidBody);

        return rigidBody;
    }

    addConstraintsTT(body1, body2) {
        this.constraintLF = new HingeConstraint(
            body1,
            body2,
            {
                pivotA: new Vec3(-1, 0, -1),
                axisA: new Vec3(0, 0, 1),
            }
        )

        this.physicsWorld.addConstraint(this.constraintLF)
    }



    update() {
        // for (let i = 0; i < this.meshes.length; i++) {
        //     this.meshes[i].position.copy(this.rigidBodies[i].position);
        // }
        // if (this.camera.position.z > -350) {
        //     this.camera.lookAt(
        //         0,
        //         this.meshes[0].position.y,
        //         this.meshes[0].position.z
        //     );
        //     window.removeEventListener("mousemove", (e) => {
        //         console.log(e);
        //     });
        //     // this.cameraControls.target.set(this.meshes[0].position);
        //     // this.camera.position.z -= 0.25;
        // }
        // this.giveVelocity();
        // this.b1.position.x -= 5;
        this.b1.velocity.z -= 2;
        console.log("update")
        this.camera.lookAt(0, this.b1.position.y, this.b1.position.z);
        this.camera.position.set(0, this.b1.position.y + 50, this.b1.position.z + 50)
        // console.log("hiiiii")
    }
}

