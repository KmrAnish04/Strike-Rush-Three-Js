import { Mesh, BoxGeometry, MeshBasicMaterial } from "three";
import Experience from "../../Experience.js";
import * as Physics from "cannon-es";
import { Vec3 } from "cannon-es";
import { threeToCannon, ShapeType } from "three-to-cannon";
import { getPhysicsBody } from "../../Utils/PhycisBodyHelper.js";

export default class Ramps {
  constructor(rampType, modelPostition, modelScaling, positionZ, rampMaterial) {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.time = this.experience.time;
    this.debug = this.experience.debug;
    this.physicsWorld = this.experience.physicsWorld;
    this.rampMaterial = rampMaterial;
    this.resource = rampType;
    this.setModel(modelScaling, positionZ);
  }

  setModel(modelScaling, positionZ) {
    this.model = this.resource;
    this.model.children[0].scale.set(
      modelScaling.x + 0.02,
      modelScaling.y,
      modelScaling.z
    );

    const rigidBody = getPhysicsBody(
      this.model.children[0],
      ShapeType.HULL,
      this.rampMaterial,
      0
    );
    rigidBody.quaternion.setFromAxisAngle(new Physics.Vec3(0, 1, 0), Math.PI);
    rigidBody.position.z = positionZ;
    this.model.children[0].position.copy(rigidBody.position);
    this.model.children[0].quaternion.copy(rigidBody.quaternion);

    this.physicsWorld.addBody(rigidBody);
    this.scene.add(this.model);
    // this.addPhysicsProperties(rigidBody, positionZ);
  }

  addPhysicsProperties(lampModel, positionZ) {
    // const rampObject = new Mesh(
    //   new BoxGeometry(6, 1, 7),
    //   new MeshBasicMaterial({ color: 0xffff00 })
    // );
    // rampObject.position.set(
    //   lampModel.position.x,
    //   lampModel.position.y + 0.91,
    //   lampModel.position.z - 3 + positionZ
    // );
    rampObject.quaternion.setFromAxisAngle(
      new Physics.Vec3(1, 0, 0),
      Math.PI * 1.15
    );
    this.scene.add(rampObject);

    this.model.position.z = -6 - positionZ;
    this.model.quaternion.copy(rampObject.quaternion);
    this.model.quaternion.setFromAxisAngle(new Physics.Vec3(0, 1, 0), Math.PI);
    this.physicsWorld.addBody(
      getPhysicsBody(rampObject, ShapeType.BOX, this.rampMaterial)
    );
  }
}
