import Experience from "../../Experience.js";
import { ShapeType } from "three-to-cannon";
import { getPhysicsBody } from "../../Utils/PhycisBodyHelper.js";

import { Vec3 } from "cannon-es";
import { Color } from "three";

export default class Ramps {
  constructor(rampType, modelPostition, modelScaling, positionZ, rampMaterial) {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.time = this.experience.time;
    this.debug = this.experience.debug;
    this.physicsWorld = this.experience.physicsWorld;
    this.finishLine = this.resources.items.FinishLine;
    this.rampMaterial = rampMaterial;
    this.resource = rampType;
    this.setModel(modelScaling, positionZ);
  }

  setModel(modelScaling, positionZ) {
    this.model = this.resource;
    this.model.children[0].scale.set(
      modelScaling.x,
      modelScaling.y - 0.02,
      modelScaling.z
    );
    this.model.traverse((child) => {
      if (child.isMesh) child.material.map.flipY = false;
    });
    const rigidBody = getPhysicsBody(
      this.model.children[0],
      ShapeType.HULL,
      this.rampMaterial,
      0
    );
    rigidBody.quaternion.setFromAxisAngle(new Vec3(0, 1, 0), Math.PI);
    rigidBody.position.z = positionZ;
    this.model.children[0].material.color = new Color(0xeffd5f);
    this.model.children[0].position.copy(rigidBody.position);
    this.model.children[0].quaternion.copy(rigidBody.quaternion);

    this.physicsWorld.addBody(rigidBody);
    this.finishLine.scale.set(0.0145, 0.0145, 0.0145);
    this.finishLine.rotation.x = -Math.PI / 180 * 80;
    this.finishLine.position.z = positionZ + 12;
    this.finishLine.position.y = 3;
    this.scene.add(this.model, this.finishLine);
  }
}
