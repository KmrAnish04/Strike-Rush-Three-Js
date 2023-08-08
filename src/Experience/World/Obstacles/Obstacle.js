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
  constructor(obstacleType, modelPostition, modelScaling) {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.time = this.experience.time;
    this.debug = this.experience.debug;
    this.physicsWorld = this.experience.physicsWorld;
    this.physicsMaterial = new Material("Default");
    this.obstacleMaterial = new Material("Obstacle");
    this.obstacleContactMaterial = new ContactMaterial(
      this.obstacleMaterial,
      this.physicsMaterial,
      { friction: 1, restitution: 0.7 }
    );
    this.physicsWorld.addContactMaterial(this.obstacleContactMaterial);
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
        let faces = [],
          vertices = [];
        child.castShadow = true;
    
        // const geometry = child.geometry;
        // console.log(geometry);
        // for (let i = 0; i < geometry.vertices.length; i++) {
        //   const x = scale.x * geometry.vertices[i].x;
        //   const y = scale.y * geometry.vertices[i].y;
        //   const z = scale.z * geometry.vertices[i].z;
        //   vertices.push(new CANNON.Vec3(x, y, z));
        // }
        // for (let i = 0; i < geometry.faces.length; i++) {
        //   let a = geometry.faces[i].a;
        //   let b = geometry.faces[i].b;
        //   let c = geometry.faces[i].c;
        //   faces.push([a, b, c]);
        // }
        // const shape = new ConvexPolyhedron(vertices, faces);
        // const rigidBody = new Body({ mass: 0, shape: shape });
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
  }
}
