import { Color } from "three";
import Experience from "../Experience";
import { getPhysicsBody } from "../Utils/PhycisBodyHelper";
import { ShapeType } from "three-to-cannon";
import { Vec3 } from "cannon-es";

export default class CenterRamp {
  constructor(rampMaterial, position) {
    this.experience = new Experience();
    this.position = position;
    this.resources = this.experience.resources;

    this.rampModel = this.resources.items.CenterRamp.children[0];
    this.rampModelTexture = this.resources.items.CenterRampTexture;
    this.rampMaterial = rampMaterial;

    this.physicsWorld = this.experience.physicsWorld;
    this.scene = this.experience.scene;
    this.setModel(position);
  }
  setModel(position) {
    this.scene.add(this.rampModel);
    this.rampModel.material.map = this.rampModelTexture;
    this.rampModel.material.color = new Color(0xf1eb9c);

    this.rampBody = getPhysicsBody(
      this.rampModel,
      ShapeType.MESH,
      this.rampMaterial
    );

    this.rampBody.quaternion.setFromAxisAngle(new Vec3(1, 0, 0), -Math.PI / 2);
    this.rampBody.position.set(position.x, position.y, position.z);

    this.rampModel.position.copy(this.rampBody.position);
    this.rampModel.quaternion.copy(this.rampBody.quaternion);
    this.physicsWorld.addBody(this.rampBody);
  }
}
