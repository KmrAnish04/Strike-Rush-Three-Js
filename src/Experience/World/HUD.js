import {
  LinearMipMapNearestFilter,
  SRGBColorSpace,
  Sprite,
  SpriteMaterial,
} from "three";
import Experience from "../Experience";

export default class HUD {
  constructor() {
    this.experience = new Experience();
    this.resources = this.experience.resources;
    this.scene = this.experience.scene;
    this.camera = this.experience.camera.instance;
    this.gem = this.resources.items.HudGem;
    this.progressBarBackground = this.resources.items.ProgressBarBg;
    this.progressBarForeground = this.resources.items.ProgressBarFg;
    this.gem.colorSpace = SRGBColorSpace;
    this.gem.minFilter = LinearMipMapNearestFilter;
    this.gem.magFilter = LinearMipMapNearestFilter;
    this.gemCollectionNode();
    // this.progressBarNode();
  }

  gemCollectionNode() {
    const gem = new SpriteMaterial({ map: this.gem });
    const gemSprite = new Sprite(gem);
    gemSprite.scale.set(0.3, 0.3, 0.3);
    gemSprite.position.set(1, 2.5, -10);
    this.camera.add(gemSprite);
  }

  progressBarNode() {
    const progressBarBackground = new SpriteMaterial({
      map: this.progressBarBackground,
    });
    const progressBarForeground = new SpriteMaterial({
      map: this.progressBarForeground,
    });
    const progressBarBgSprite = new Sprite(progressBarBackground);
    const progressBarFgSprite = new Sprite(progressBarForeground);
    progressBarBgSprite.scale.set(0.3, 0.3, 0.3);
    progressBarFgSprite.position.set(1, 1, -1);
    progressBarFgSprite.scale.set(0.3, 0.3, 0.3);
    this.camera.add(progressBarFgSprite, progressBarBgSprite);
  }
}
