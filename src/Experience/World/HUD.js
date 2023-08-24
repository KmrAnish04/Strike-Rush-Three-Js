import { SRGBColorSpace, Sprite, SpriteMaterial } from "three";
import Experience from "../Experience";
import { gsap } from "gsap";

export default class HUD {
  constructor(gemsCollected) {
    this.experience = new Experience();
    const { resources, scene, camera } = this.experience;
    this.collected = gemsCollected;
    this.resources = resources;
    this.scene = scene;
    this.camera = camera.instance;
    this.gem = this.resources.items.HudGem;
    this.progressBarBackground = this.resources.items.ProgressBarBg;
    this.progressBarForeground = this.resources.items.ProgressBarFg;
    this.gem.colorSpace = SRGBColorSpace;

    this.createHUDUI();
    // this.gemCollectionNode();
  }

  gemCollectionNode() {
    const gem = new SpriteMaterial({ map: this.gem });
    const gemSprite = new Sprite(gem);
    gemSprite.scale.set(0.3, 0.3, 0.3);
    gemSprite.position.set(2.5, 2.5, -10);
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

    progressBarBgSprite.scale.set(1, 0.3, 0.3);
    progressBarBgSprite.position.set(1.6, 2.7, -11);

    progressBarFgSprite.scale.set(1, 0.3, 0);
    progressBarFgSprite.position.set(0, 2.5, -10);

    gsap.to(progressBarFgSprite.scale, { duration: 15, z: 0.3 });

    this.camera.add(progressBarFgSprite);
    this.camera.add(progressBarBgSprite);
  }

  createHUDUI() {
    const HUDUI = document.createElement("div");
    HUDUI.id = "hud-ui";

    const gemsCollectionContainer = this.createGemsCollectionContainer();
    const progressBarContainer = this.createProgressBarContainer();

    HUDUI.appendChild(gemsCollectionContainer);
    HUDUI.appendChild(progressBarContainer);
    document.body.appendChild(HUDUI);
  }

  createProgressBarContainer() {
    const progressBarContainer = document.createElement("div");
    progressBarContainer.className = "progressBarContainer";

    const progressBarCurrentLevel = document.createElement("div");
    progressBarCurrentLevel.className = "progressBarCurrentLevel";

    const progressBarCurrentLevelImg = document.createElement("img");
    progressBarCurrentLevelImg.src = "/textures/ProgressBarSmallTurquoise.png";
    progressBarCurrentLevelImg.className = "progressBarCurrentLevelImg";

    const currentLevel = document.createElement("label");
    currentLevel.textContent = "1";
    currentLevel.className = "currentLevel";

    progressBarCurrentLevel.appendChild(progressBarCurrentLevelImg);
    progressBarCurrentLevel.appendChild(currentLevel);

    const progressBarNextLevel = document.createElement("div");
    progressBarNextLevel.className = "progressBarNextLevel";

    const progressBarNextLevelImg = document.createElement("img");
    progressBarNextLevelImg.src = "/textures/ProgressBarSmallTurquoise.png";
    progressBarNextLevelImg.className = "progressBarNextLevelImg";

    const nextLevel = document.createElement("label");
    nextLevel.textContent = "2";
    nextLevel.className = "nextLevel";

    progressBarNextLevel.appendChild(progressBarNextLevelImg);
    progressBarNextLevel.appendChild(nextLevel);

    const progressBar = document.createElement("div");
    progressBar.className = "progressBar";

    const progressBarImg = document.createElement("img");
    progressBarImg.src = "/textures/LevelBarTurquoise.png";
    progressBarImg.className = "progressBarImg";

    progressBar.appendChild(progressBarImg);
    progressBarContainer.appendChild(progressBarCurrentLevel);
    progressBarContainer.appendChild(progressBar);
    progressBarContainer.appendChild(progressBarNextLevel);

    return progressBarContainer;
  }

  createGemsCollectionContainer() {
    const gemsCollectContainer = document.createElement("div");
    gemsCollectContainer.className = "gemsCollectContainer";

    const gemsCollectedBg = document.createElement("div");
    gemsCollectedBg.className = "gemsCollectedBg";

    const gemsCollectedBGImg = document.createElement("img");
    gemsCollectedBGImg.src = "/textures/ProgressBarBackground.png";
    gemsCollectedBGImg.className = "gemsCollectedBGImg";

    const gemsCollected = document.createElement("label");
    gemsCollected.className = "gemsCollected";
    gemsCollected.id = "gemsCollected";
    gemsCollected.textContent = 0;

    const gemsCollectImage = document.createElement("img");
    gemsCollectImage.src = "/textures/GemBlue.png";
    gemsCollectImage.className = "gemsCollectImage";

    gemsCollectedBg.appendChild(gemsCollectedBGImg);
    gemsCollectedBg.appendChild(gemsCollected);
    gemsCollectedBg.appendChild(gemsCollectImage);
    gemsCollectContainer.appendChild(gemsCollectedBg);
    return gemsCollectContainer;
  }
}
