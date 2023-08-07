import Experience from "./Experience";
import { World } from "cannon-es";
export default class PhysicsWorld {
  constructor() {
    this.experience = new Experience();
    this.physicsWorld = new World();
  }
}
