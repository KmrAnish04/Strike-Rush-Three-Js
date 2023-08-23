import Experience from "./Experience.js";

export default class Renderer {
  constructor() {
    this.experience = new Experience();
    const { canvas, sizes, scene, camera } = this.experience;
    this.canvas = canvas;
    this.sizes = sizes;
    this.scene = scene;
    this.camera = camera;

    this.setInstance();
  }

  setInstance() {
    const loadThree = () => import("three");

    // When you need to use the component, call the function
    loadThree().then((module) => {
      this.instance = new module.WebGLRenderer({
        canvas: this.canvas,
        antialias: true,
      });
      this.instance.useLegacyLights = true;
      this.instance.toneMapping = module.CineonToneMapping;
      this.instance.toneMappingExposure = 1.75;
      this.instance.shadowMap.enabled = true;
      this.instance.shadowMap.type = module.PCFSoftShadowMap;
      this.instance.setClearColor("#f47de9");
      this.instance.setSize(this.sizes.width, this.sizes.height);
      this.instance.setPixelRatio(Math.min(this.sizes.pixelRatio, 2));
    });
  }

  resize() {
    this.instance.setSize(this.sizes.width, this.sizes.height);
    this.instance.setPixelRatio(Math.min(this.sizes.pixelRatio, 2));
  }

  update() {
    if (this.instance) this.instance.render(this.scene, this.camera.instance);
  }
}
