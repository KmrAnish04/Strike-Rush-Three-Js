import Experience from "../Experience";

export default class HUD {
  constructor() {
    this.experience = new Experience();
    this.resources = this.experience.resources;
  }
}
