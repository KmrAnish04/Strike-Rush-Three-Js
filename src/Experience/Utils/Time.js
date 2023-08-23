import EventEmitter from "./EventEmitter.js";

export default class Time extends EventEmitter {
  constructor() {
    super();

    // Setup
    this.start = performance.now();
    this.lastTime = this.start;
    this.elapsed = 0;
    this.delta = 16;

    window.requestAnimationFrame(() => {
      this.tick();
    });
  }

  tick() {
    const currentTime = performance.now() / 1000;
    this.delta = currentTime - this.lastTime;
    this.lastTime = currentTime;
    this.elapsed = this.lastTime - this.start;

    this.trigger("tick");

    window.requestAnimationFrame(() => {
      this.tick();
    });
  }
}
