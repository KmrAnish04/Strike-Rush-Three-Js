import * as THREE from "three";
import Experience from "../../Experience.js";

import { getPhysicsBody } from "../../Utils/PhycisBodyHelper.js";
import { ShapeType } from "three-to-cannon";


export default class Obstacle {
  constructor(obstacleType, modelPostition, modelScaling, obstacleMaterial) {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.time = this.experience.time;
    this.debug = this.experience.debug;
    this.physicsWorld = this.experience.physicsWorld;
    this.obstacleMaterial = obstacleMaterial;

    // Resource
    this.resource = obstacleType.clone();
    this.rigidBodiesArray = [];
    this.meshesArray = [];
    this.setModel(modelPostition, modelScaling);
  }

  setModel(modelPosition, modelScaling) {
    this.model = this.resource;
    // this.model
    // this.model.position.set(modelPosition.x, modelPosition.y + 10, modelPosition.z + 140);
    this.model.position.set(0, 10, 0);
    console.log("modeliii: ", this.model)
    // this.model.scale.set(modelScaling.x, modelScaling.y, modelScaling.z);
    this.model.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        console.log("livere: ", child)
        child.castShadow = true;
        this.meshesArray.push(child);
        const rigidBody = getPhysicsBody(child, ShapeType.HULL, this.obstacleMaterial, 0);

        console.log("hiiiimmmm: ", this.model.getWorldPosition(child.position))
        console.log("hiiiimmmmsss : ", child.position);
        // let iii = (this.model.getWorldPosition(child.position));
        rigidBody.position.copy(this.model.getWorldPosition(child.position))


        child.quaternion.copy(rigidBody.quaternion)
        this.rigidBodiesArray.push(rigidBody);

        this.physicsWorld.addBody(rigidBody);
      }
      this.scene.add(this.model);

    });
    this.playAnimation();
  }
  playAnimation() {
    this.animation = this.model.animations[0];
    this.mixer = new THREE.AnimationMixer(this.model);
    const action = this.mixer.clipAction(this.animation);
    action.play();
  }

  update() {
    this.mixer.update(this.time.delta * 0.001);
    for (let i = 0; i < this.rigidBodiesArray.length; i++) {
      this.rigidBodiesArray[i].position.copy(this.meshesArray[i].position);
      this.rigidBodiesArray[i].quaternion.copy(this.meshesArray[i].quaternion);
    }
  }
}
