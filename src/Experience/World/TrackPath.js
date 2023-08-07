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
    this.setMaterial();
    this.setUpTrack(trackLength);
  }

  setGeometry() {
    let geometry = new BoxGeometry(10, 20, 1);
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
    });
  }

  setMesh(geometry) {
    let mesh = new Mesh(geometry, this.material);
    mesh.rotation.x = -Math.PI * 0.5;
    mesh.position.y = mesh.position.y - 0.5;
    this.scene.add(mesh);
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
