import Experience from "../Experience.js";

import { AmbientLight, DirectionalLight, Color, NearestFilter } from "three";

export default class Environment {
  constructor() {
    this.experience = new Experience();
    const { scene, resources, debug } = this.experience;
    this.scene = scene;
    this.resources = resources;
    this.debug = debug;
    // Debug
    if (this.debug.active) {
      this.debugFolder = this.debug.ui.addFolder("environment");
    }

    this.setSunLight();
    this.setEnvironment();
  }

  setSunLight() {
    this.ambient = new AmbientLight("#ffffff", 0.5);
    this.scene.add(this.ambient);
    this.sunLight = new DirectionalLight("#ffffff", 2);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.camera.far = 1000;
    this.sunLight.shadow.camera.left = 50;
    this.sunLight.shadow.camera.right = -50;
    this.sunLight.shadow.camera.top = 600;
    this.sunLight.shadow.camera.bottom = 0;
    this.sunLight.shadow.mapSize.set(2048, 2048);
    this.sunLight.shadow.bias = 0.0001;
    this.sunLight.position.set(0, 100, 0);
    this.scene.add(this.sunLight);

    // Debug
    if (this.debug.active) {
      this.debugFolder
        .add(this.sunLight, "intensity")
        .name("sunLightIntensity")
        .min(0)
        .max(10)
        .step(0.001);

      this.debugFolder
        .add(this.sunLight.position, "x")
        .name("sunLightX")
        .min(-5)
        .max(5)
        .step(0.001);

      this.debugFolder
        .add(this.sunLight.position, "y")
        .name("sunLightY")
        .min(-5)
        .max(5)
        .step(0.001);

      this.debugFolder
        .add(this.sunLight.position, "z")
        .name("sunLightZ")
        .min(-5)
        .max(5)
        .step(0.001);
    }
  }

  setEnvironment() {
    this.buildings = [];
    this.envMap = this.resources.items.environmentMapTexture;
    this.envMap.magFilter = NearestFilter;
    this.envMap.minFilter = NearestFilter;
    this.scene.background = this.resources.items.environmentMapTexture;
    this.building = this.resources.items.Buildings;
    const buildingGeometry = this.building.children[0].geometry;
    const buildingMaterial = this.building.children[0].material;
    this.building.geometry = null;
    this.building.material = null;
    const noOfBuildings = 500;
    for (let i = 0; i < noOfBuildings; i++) {
      const building = this.building.clone();
      this.building.traverse((child) => {
        if (child.isMesh) {
          child.geometry = buildingGeometry;
          child.material = buildingMaterial;
          child.material.transparent = false;
          child.material.alphaTest = 0.1;
          child.material.map = this.resources.items.BuildingsTexture;
          child.material.color = new Color(0xe70fff);
        }
      });
      building.scale.set(0.02, Math.random() / 10, 0.03);
      building.rotation.x = -Math.PI / 2;
      building.position.set(
        (Math.random() - 0.5) * 3000,
        -700 - Math.random() * 1000,
        (Math.random() - 1) * 5000
      );
      this.scene.add(building);
      this.buildings.push(building);
    }
  }
}
