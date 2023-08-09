import {
  BoxGeometry,
  MeshStandardMaterial,
  Mesh,
  SRGBColorSpace,
  RepeatWrapping,
  Color
} from "three";
import Experience from "../Experience.js";
import * as Physics from "cannon-es";
import { Vec3 } from "cannon-es";

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
    this.woodTexture = this.resources.items.groundTexture;
    this.woodTexture.colorSpace = SRGBColorSpace;
    this.woodTexture.wrapS = RepeatWrapping;
    this.woodTexture.wrapT = RepeatWrapping;
  }

  setMaterial() {
    this.material = new MeshStandardMaterial({
      map: this.woodTexture,
      // color: 0x666666,
      // normalMap: this.textures.normal,
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
    let tileRigidBody = this.addPhysicsProperties(tileGeometry);
    tileRigidBody.position.set(0, 0 - 0.5, 0);
    tileMesh.position.copy(tileRigidBody.position);
    this.trackTiles.push(tileRigidBody);
    noOfTiles--;

    for (let tileNum = 0; tileNum < noOfTiles; tileNum++) {
      tileGeometry = this.setGeometry();
      tileMesh = this.setMesh(tileGeometry);
      if (tileNum % 2 == 0) tileMesh.material.color = new Color(0x888888);
      // else tileMesh.material.color = new Color(0xffffff)
      tileRigidBody = this.addPhysicsProperties(tileGeometry);

      let lastTilePos = this.trackTiles[this.trackTiles.length - 1];
      console.log(lastTilePos);
      tileRigidBody.position.set(0, 0 - 0.5, lastTilePos.position.z - 20);
      tileMesh.position.copy(tileRigidBody.position);
      this.trackTiles.push(tileRigidBody);
    }
  }

  addPhysicsProperties(trackGeometry) {
    //Physics
    const rigidBodyShape = new Physics.Box(
      new Vec3(this.width / 2, this.height / 2, this.depth / 2)
    );
    const rigidBody = new Physics.Body({
      shape: rigidBodyShape,
      mass: 0,
      allowSleep: false,
      material: this.pathMaterial,
    });

    this.physicsWorld.addBody(rigidBody);
    return rigidBody;
  }
}
