import { World } from "cannon-es";
import EventEmitter from "./EventEmitter.js";

export default class Time extends EventEmitter {
  constructor() {
    super();

    // Setup
    this.start = performance.now();
    // this.start = Date.now();
    this.lastTime = this.start;
    this.elapsed = 0.0;
    this.delta = 1 / 60.0;
    this.frameTime = (this.start - this.lastTime) / 1000;

    window.requestAnimationFrame(() => {
      this.tick();
    });
  }

  tick() {
    // const currentTime = performance.now() / 1000;
    const currentTime = Date.now();
    this.delta = currentTime - this.lastTime;
    this.lastTime = currentTime;
    this.elapsed = this.lastTime - this.start;

    this.trigger("tick");

    window.requestAnimationFrame(() => {
      this.tick();
    });

    // if (this.frameTime > 0) {
    //   this.delta = Math.min(this.frameTime, this.delta);
    //   // this.physicsWorld.step(1 / 60, deltaTime, 3);
    //   this.frameTime -= this.delta;
    //   this.elapsed += this.delta;
    //   window.requestAnimationFrame(() => {
    //     this.tick();
    //   });
    // }
  }
}


/*
  t = 0.0;
  dt = 1/60.0;
  const newTime = performance.now();
  const frameTime = (newTime - currentTime) / 1000; // Convert to seconds
  currentTime = newTime;

  while (frameTime > 0) {
      const deltaTime = Math.min(frameTime, dt);
      world.step(deltaTime); // Use Cannon.js to update physics
      frameTime -= deltaTime;
      t += deltaTime;
  }

  // Update Three.js rendering based on Cannon.js simulation state
  // Update object positions, rotations, etc.

  renderer.render(scene, camera);
*/
