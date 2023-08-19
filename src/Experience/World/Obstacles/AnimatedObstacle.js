import Experience from "../../Experience.js";
import { getPhysicsBody } from "../../Utils/PhycisBodyHelper.js";
import { ShapeType } from "three-to-cannon";

import { Vector3, AnimationMixer } from "three";

export default class AnimatedObstacle {
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
    this.model.position.set(modelPosition.x, modelPosition.y, modelPosition.z);

    this.model.children.forEach((child) => {
      child.castShadow = true;
      this.meshesArray.push(child);

      // Assuming getPhysicsBody takes modelPosition and modelScaling as parameters
      const rigidBody = getPhysicsBody(
        child,
        ShapeType.MESH,
        this.obstacleMaterial,
        0
      );

      // Add the rigid body to the physics world
      this.rigidBodiesArray.push(rigidBody);
      this.physicsWorld.addBody(rigidBody);

      // Position the physics body based on the mesh's world position
      // rigidBody.position.copy(child.getWorldPosition(new Vector3()));
      rigidBody.quaternion.copy(child.quaternion);
    });

    this.scene.add(this.model);

    this.playAnimation();
  }

  playAnimation() {
    this.animation = this.model.animations[0];
    this.mixer = new AnimationMixer(this.model);
    let action = this.mixer.clipAction(this.animation);
    action.play();
  }

  update() {
    this.mixer.update(this.time.delta * 0.001);

    for (let i = 0; i < this.rigidBodiesArray.length; i++) {
      const physicsBody = this.rigidBodiesArray[i];
      const mesh = this.meshesArray[i];
      physicsBody.position.copy(mesh.getWorldPosition(new Vector3()));
      physicsBody.quaternion.copy(mesh.quaternion);
    }
  }
}
