import Experience from "../Experience";
import { SphereGeometry, MeshBasicMaterial, Mesh } from "three";
export default class Player {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.setPlayer();
  }
  setPlayer() {
    this.player = new Mesh(
      new SphereGeometry(0.4, 32, 32),
      new MeshBasicMaterial({ color: 0x0086ff })
    );
    this.player.position.set(0, 1, 0);
    this.scene.add(this.player);
  }
}
