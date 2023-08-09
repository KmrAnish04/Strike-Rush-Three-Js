import {
  BoxGeometry,
  MeshStandardMaterial,
  Mesh,
  SRGBColorSpace,
  RepeatWrapping,
} from "three";
import Experience from "../Experience.js";
import * as Physics from "cannon-es";

export default class GameTrack {
  constructor(trackLength = 5) {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.physicsWorld = this.experience.physicsWorld;
    // this.setMaterial();
    this.setUpTrack(trackLength);
  }

  setGeometry() {
    this.width = 10;
    this.height = 20;
    this.depth = 1;
    let geometry = new BoxGeometry(this.width, this.height, this.depth);
    return geometry;
  }

  setTextures() {
    this.textures = {};
    this.woodTexture = this.resources.items.trackTexture;
    this.woodTexture.colorSpace = SRGBColorSpace;
    this.woodTexture.repeat.set(1.5, 1.5);
    this.woodTexture.wrapS = RepeatWrapping;
    this.woodTexture.wrapT = RepeatWrapping;
  }

  setMaterial() {
    this.material = new MeshStandardMaterial({
      color: 0x666666,
      normalMap: this.textures.normal
    });
  }

  setMesh(geometry) {
    let mesh = new Mesh(geometry, this.material);
    this.scene.add(mesh);
    mesh.rotation.x = -Math.PI * 0.5;
    mesh.position.y = mesh.position.y - 0.5;
    // const shape = new Physics.Box(
    //   new Physics.Vec3(this.width / 2, this.height / 2, this.depth / 2)
    // );
    // const body = new Physics.Body({ shape: shape, mass: 0 });
    // this.physicsWorld.addBody(body);
    return mesh;
  }

  setUpTrack(noOfTiles) {
    this.trackTiles = [];
    let tile = this.setMesh(this.setGeometry());
    this.trackTiles.push(tile);
    noOfTiles--;
    for (let tileNum = 0; tileNum < noOfTiles; tileNum++) {
      let tile = this.setMesh(this.setGeometry());
      let lastTilePos = this.trackTiles[this.trackTiles.length - 1].position.z;
      tile.position.z = lastTilePos - 20;
      this.trackTiles.push(tile);
    }
  }
}
