import {
    Mesh,
    SphereGeometry,
    MeshBasicMaterial
} from "three";
import * as THREE from 'three'
import Experience from "../Experience.js";


import {
    getPhysicsBody
} from "../Utils/PhycisBodyHelper.js";
import {
    ShapeType
} from "three-to-cannon";
import {
    Vec3,
    HingeConstraint,
    PointToPointConstraint,
    LockConstraint,
    Material,
    DistanceConstraint
} from "cannon-es";
// import CANNON from "cannon";
import { gsap } from "gsap";




export default class playerBalls {
    constructor(ballMaterial, playerContactPathMaterial) {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.time = this.experience.time;
        this.debug = this.experience.debug;
        this.physicsWorld = this.experience.physicsWorld;
        this.playerMaterial = ballMaterial;
        // this.playerContactPathMaterial = playerContactPathMaterial;
        // this.physicsWorld.addContactMaterial(this.playerContactPathMaterial);
        this.camera = this.experience.camera.instance;;



        this.headBody = null;
        this.sphereRigids = [];
        this.sphereMeshes = [];
        this.sphereRadius = 0.3;
        this.numShere = 20;


        // Create a Three.js sphere mesh
        const sphereGeometry = new SphereGeometry(this.sphereRadius, 32, 32);
        const sphereMaterial = new MeshBasicMaterial({
            color: 0xff0000
        });
        const sphereMesh = new Mesh(sphereGeometry, sphereMaterial);

        // Create this.sphereRigids and connect them with hinge constraints
        for (let i = 0; i < this.numShere; i++) {
            let newSphere = sphereMesh.clone()
            const sphereBody = getPhysicsBody(newSphere, ShapeType.SPHERE, this.playerMaterial, i == 0 ? 1 : 1);

            this.sphereRigids.push(sphereBody);
            this.sphereMeshes.push(newSphere)

            // Add the body to the world
            this.physicsWorld.addBody(sphereBody);

            // Add the mesh to the scene
            this.scene.add(newSphere);


            // Position the this.sphereRigids
            sphereBody.position.set(0, 3, (i * 2 * this.sphereRadius));

            // Create hinge constraint for connecting this.sphereRigids
            if (i > 0) {
                const prevSphere = this.sphereRigids[i - 1];

                // ******* Hinge Constraint *******
                const pivotA = new Vec3(0, 0, 0); // Pivot point on the current sphere
                const pivotB = new Vec3(0, 0, 0); // Pivot point on the previous sphere
                const axis = new Vec3(0, 0, 0); // Axis of rotation

                const hingeConstraint = new HingeConstraint(sphereBody, prevSphere, {
                    pivotA,
                    pivotB,
                    axis,
                    collideConnected: true, // Prevent connected bodies from colliding
                });
                // hingeConstraint.enableMotor();
                // hingeConstraint.motorSpeed = 0;


                // ******* P2P Constraint *******
                // const pivotA = new Vec3(0, 0, 0); // Pivot point on the current sphere
                // const pivotB = new Vec3(0, 0, 0); // Pivot point on the previous sphere
                // const p2pConstraint = new PointToPointConstraint(sphereBody, pivotA, prevSphere, pivotB);


                // ******* Distance Constraint *******
                // const maxDistance = 2 * this.sphereRadius; // Maximum distance between sphereRigids
                // const distanceConstraint = new DistanceConstraint(sphereBody, prevSphere, maxDistance);


                // --> Add the constraint to the world
                this.physicsWorld.addConstraint(hingeConstraint);
                // this.physicsWorld.addConstraint(p2pConstraint);
                // this.physicsWorld.addConstraint(distanceConstraint);
            }
            else { this.headBody = sphereBody }

            // Set initial this.direction
            this.direction = new THREE.Vector3(0, 0, 0); // Direction of player
        }

        this.registerEvents(); // Touch and Mouse Events
        this.checkCollision();
    }


    registerEvents() {
        // this.sphereRigids[0].position.y = 5
        window.addEventListener('mousemove', (event) => {
            // Calculate mouse position in normalized device coordinates (-1 to 1)
            const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
            // console.log("mouse moving: ")
            // Update this.direction based on mouse movement
            // this.sphereRigids[0].velocity.copy(new Vec3(0, 0, -1))
            this.direction.set(mouseX, mouseY, 0).normalize();
            if (this.headBody) {
                this.headBody.velocity.x = this.direction.x * 2;
            }
        });
    }

    checkCollision() {

        if (this.sphereRigids.length > 0) {
            for (let i = 0; i < this.sphereRigids.length; i++) {

                this.sphereRigids[i].addEventListener("collide", (collide) => {
                    if (this.sphereRigids[i]) {

                        const bodyType = collide.body.material.name;
                        // console.log(bodyType);

                        if (bodyType === "health") { } //Add tail
                        else if (bodyType === "gem") {
                            // console.log("bodytype: ", collide.body)
                            // collide.body.position.y += 20
                            gsap.to(collide.body.position, { duration: 0.3, y: 7 })
                            console.log(collide.body);
                            gsap.to(collide.body.position, { delay: 1, duration: 10, x: window.innerWidth - 500, y: window.innerHeight })
                            // gsap.to(collide.body.position, { duration: 10, y: window.innerHeight })
                        }
                        else if (bodyType === "obstacle") {
                            // console.log("arrays: ", this.sphereRigids, this.sphereMeshes);
                            // console.log("index: ", this.sphereRigids.length - 1);

                            console.log("LENGHT", this.sphereRigids[0]);
                            if (this.sphereRigids[0].hasAnyEventListener()) {
                                this.sphereRigids[0].removeEventListener('collide', (e) => { console.log("XXXXXXXXXX", e); });

                            }
                            this.physicsWorld.constraints.shift()
                            this.removeRigidBodyAndMesh(0) // index=0 (Always remove from start)
                            // console.log("arrays: ", this.sphereRigids, this.sphereMeshes);
                            // console.log("hellow", this.physicsWorld.constraints.shift())
                            // let removeTHisBody = this.sphereRigids.pop();
                            // this.physicsWorld.removeBody(removeTHisBody);
                            // this.scene.remove(this.sphereMeshes.pop())
                            // this.numShere--;

                        }
                    }

                });
            }
        }
    }
    removeRigidBodyAndMesh(index) {
        if (index >= 0 && index < this.sphereRigids.length) {
            const rigidBody = this.sphereRigids[index];
            const mesh = this.sphereMeshes[index];

            // Remove the mesh from the Three.js scene
            this.scene.remove(mesh);

            // Remove the rigid body from the Cannon.js physics world
            // this.physicsWorld.removeBody(rigidBody);

            rigidBody.position.y += 10
            rigidBody.position.x += 100
            console.log("rmoved", rigidBody)


            // Remove the rigid body and mesh from their respective arrays
            this.sphereRigids.splice(index, 1);
            this.sphereMeshes.splice(index, 1);

            // New head
            this.headBody = this.sphereRigids[0];

            // Dispose of the mesh's geometry and material to free up resources
            mesh.geometry.dispose();
            mesh.material.dispose();
            this.numShere--;
        }
    }
    update() {

        if (this.sphereRigids.length) {
            this.headBody.velocity.z = -4;
            this.headBody.velocity.y = 0;

            // Update snake's head position based on this.direction
            // const headBody = this.sphereRigids[0];

            // Update Three.js sphere positions based on physics simulation
            // console.log("updating!!!")
            for (let i = 0; i < this.numShere; i++) {
                const sphereBody = this.sphereRigids[i];
                const sphereMesh = this.sphereMeshes[i];


                // if(i!=0)sphereBody.position.z = headBody.position.z;
                sphereMesh.position.copy(sphereBody.position);
                sphereMesh.quaternion.copy(sphereBody.quaternion);
            }

            this.camera.position.set(0, 30, this.headBody.position.z + 50)
            this.camera.lookAt(0, this.headBody.position.x, this.headBody.position.z)
        }
    }


}
