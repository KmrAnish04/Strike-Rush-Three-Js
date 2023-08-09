import * as THREE from "three";
import Experience from "../../Experience.js";
import {
  Body,
  ContactMaterial,
  ConvexPolyhedron,
  Material,
  Vec3,
} from "cannon-es";
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
    this.model = this.resource  ;
    this.model.scale.set(modelScaling.x, modelScaling.y, modelScaling.z);
    this.model.position.set(modelPosition.x, modelPosition.y, modelPosition.z);
    this.scene.add(this.model);
    this.model.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
        // this.meshesArray.push(child);
        // const rigidBody = getPhysicsBody(
        //   child,
        //   ShapeType.HULL,
        //   this.obstacleMaterial,
        //   0
        // );
        // this.rigidBodiesArray.push(rigidBody);
        // this.physicsWorld.addBody(rigidBody);
      }
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
    // for (let i = 0; i < this.rigidBodiesArray.length; i++) {
    //   this.meshesArray[i].position.copy(this.rigidBodiesArray[i].position);
    //   this.meshesArray[i].quaternion.copy(this.rigidBodiesArray[i].quaternion);
    // }
  }
}
