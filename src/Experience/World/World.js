import Experience from "../Experience.js";
import Environment from "./Environment.js";
import GameTrack from "./TrackPath.js";
import Player from "./Player.js";
import Movement from "./Movement.js";
import EndBlock from "./EndBlock.js";

export default class World {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    // Wait for resources
    this.resources.on("ready", () => {
      // Setup
      this.environment = new Environment();
      const trackLength = 2;
      this.track = new GameTrack(trackLength);
      this.player = new Player();
      this.controls = new Movement();
      this.endBlock = new EndBlock(-trackLength * 20 + trackLength);
    });
  }

  update() {
    if (this.controls) this.controls.update();
  }
}
