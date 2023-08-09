import * as THREE from "three";
import Experience from "../../Experience.js";
import {
  Body,
  ContactMaterial,
  ConvexPolyhedron,
  Material,
  Vec3,
} from "cannon-es";
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
    console.log(modelPostition);
    this.setModel(modelPostition, modelScaling);
  }

  setModel(modelPosition, modelScaling) {
    this.model = this.resource;
    this.model.scale.set(modelScaling.x, modelScaling.y, modelScaling.z);
    this.model.position.set(modelPosition.x, modelPosition.y, modelPosition.z);
    this.scene.add(this.model);
    this.model.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
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
  }
}
