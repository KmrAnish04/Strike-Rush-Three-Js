import Experience from "../Experience.js";
import { getPhysicsBody } from "../Utils/PhycisBodyHelper.js";
import { ShapeType } from "three-to-cannon";

import {
  BoxGeometry,
  MeshStandardMaterial,
  Mesh,
  SRGBColorSpace,
  RepeatWrapping,
  Color,
} from "three";

export default class GameTrack {
  constructor(trackLength = 5, pathMaterial) {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.physicsWorld = this.experience.physicsWorld;
    this.pathMaterial = pathMaterial;
    this.setTextures();
    this.setMaterial();
    this.setUpTrack(trackLength);
  }

  setGeometry() {
    this.width = 10;
    this.height = 1;
    this.depth = 20;
    let geometry = new BoxGeometry(this.width, this.height, this.depth);
    return geometry;
  }

  setTextures() {
    this.textures = {};
    this.groundTexture = this.resources.items.groundTexture;
    this.groundTexture.colorSpace = SRGBColorSpace;
    this.groundTexture.wrapS = RepeatWrapping;
    this.groundTexture.wrapT = RepeatWrapping;
  }

  setMaterial() {
    this.material = new MeshStandardMaterial({
      map: this.groundTexture,
    });
  }

  setMesh(geometry) {
    let mesh = new Mesh(geometry, this.material);
    this.scene.add(mesh);
    return mesh;
  }

  setUpTrack(noOfTiles) {
    this.trackTiles = [];
    let tileGeometry = this.setGeometry();
    let tileMesh = this.setMesh(tileGeometry);
    let tileRigidBody = this.addPhysicsProperties(tileMesh);
    tileRigidBody.position.set(0, 0 - 0.5, 0);
    tileMesh.position.copy(tileRigidBody.position);
    this.trackTiles.push(tileRigidBody);
    noOfTiles--;

    for (let tileNum = 0; tileNum < noOfTiles; tileNum++) {
      tileGeometry = this.setGeometry();
      tileMesh = this.setMesh(tileGeometry);
      console.log(tileMesh);
      if (tileNum % 2 == 0) tileMesh.material.color = new Color(0x888888);
      // else tileMesh.material.color = new Color(0xffffff)
      tileRigidBody = this.addPhysicsProperties(tileMesh);

      let lastTilePos = this.trackTiles[this.trackTiles.length - 1];
      // console.log(lastTilePos);
      tileRigidBody.position.set(0, 0 - 0.5, lastTilePos.position.z - 20);
      tileMesh.position.copy(tileRigidBody.position);
      this.trackTiles.push(tileRigidBody);
    }
  }

  addPhysicsProperties(object) {
    //Physics
    const rigidBody = getPhysicsBody(
      object,
      ShapeType.BOX,
      this.pathMaterial,
      0
    );

    this.physicsWorld.addBody(rigidBody);
    return rigidBody;
  }
}
