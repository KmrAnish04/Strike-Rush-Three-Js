import Experience from "../Experience";

export default class EndGamePopup {
  constructor(collectedGems, totalCoins) {
    this.experience = new Experience();
    this.collectedGems = collectedGems;
    this.totalCoins = totalCoins;
    this.createPopup();
  }

  createPopup() {
    const endPopup = document.createElement("div");
    endPopup.className = "EndGamePopup";
    endPopup.id = "EndGamePopup";
    endPopup.classList.toggle("active");
    const endGamePopupBody = this.createPopupBody();
    endPopup.appendChild(endGamePopupBody);
    document.body.appendChild(endPopup);
  }

  createPopupBody() {
    const popupBody = document.createElement("div");
    popupBody.className = "EndGamePopupBody";
    popupBody.id = "EndGamePopupBody";
    this.createPopupBodyContent(popupBody);
    return popupBody;
  }

  createPopupBodyContent(popupBody) {
    //Section 1
    const section1 = document.createElement("div");
    section1.className = "section1";
    const homeButtonDiv = this.createHomeButton();
    const totalGemsCollected = this.createTotalGemsCollected();
    section1.appendChild(homeButtonDiv);
    section1.appendChild(totalGemsCollected);

    //Section 2
    const section2 = document.createElement("div");
    section2.className = "section2";
    const levelCompletedHeading = this.levelCompleted();
    const gemsCollected = this.createGemsCollected();
    section2.appendChild(levelCompletedHeading);
    section2.appendChild(gemsCollected);

    //Section 3
    const section3 = document.createElement("div");
    section3.className = "section3";
    const rotater = this.createRotater();
    section3.appendChild(rotater);

    //Section 4
    const section4 = document.createElement("div");
    section4.className = "section4";
    const videoAd = this.doubleGemsVideoAd();
    const nextButton = this.createNextButton();
    section4.appendChild(videoAd);
    section4.appendChild(nextButton);

    //Appending in Popup Body
    popupBody.appendChild(section1);
    popupBody.appendChild(section2);
    popupBody.appendChild(section3);
    popupBody.appendChild(section4);
  }

  createHomeButton() {
    const homeButtonDiv = document.createElement("div");
    homeButtonDiv.className = "homeButtonDiv";
    homeButtonDiv.id = "homeButtonDiv";

    const homeButton = document.createElement("div");
    homeButton.className = "homeButton";
    homeButton.id = "homeButton";

    const homeButtonImage = document.createElement("img");
    homeButtonImage.className = "homeButtonImage";
    homeButtonImage.id = "homeButtonImage";
    homeButtonImage.src = "/textures/ButtonSquareGreen.png";

    const homeImage = document.createElement("img");
    homeImage.className = "homeImage";
    homeImage.id = "homeImage";
    homeImage.src = "/textures/MainMenuGreen.png";

    // homeButtonImage.appendChild(homeImage)
    homeButton.appendChild(homeImage);
    homeButton.appendChild(homeButtonImage);

    homeButton.addEventListener("click", () => {
      console.log("Home Clicked");
    });

    homeButtonDiv.appendChild(homeButton);
    return homeButtonDiv;
  }

  createTotalGemsCollected() {
    const totalGemsCollectedDiv = document.createElement("div");
    totalGemsCollectedDiv.className = "totalGemsCollectedDiv";
    totalGemsCollectedDiv.id = "totalGemsCollectedDiv";

    const background = document.createElement("img");
    background.className = "GemsCountBackground";
    background.id = "Background";
    background.src = "/textures/ProgressBarBackground.png";

    const totalGemsCollected = document.createElement("img");
    totalGemsCollected.className = "totalGemsCollected";
    totalGemsCollected.id = "totalGemsCollected";
    totalGemsCollected.src = "/textures/GemBlue.png";

    const totalGemsLabel = document.createElement("label");
    totalGemsLabel.className = "totalGemsLabel";
    totalGemsLabel.id = "totalGemsLabel";
    totalGemsLabel.textContent = `${this.totalCoins}`;

    totalGemsCollectedDiv.appendChild(background);
    totalGemsCollectedDiv.appendChild(totalGemsLabel);
    totalGemsCollectedDiv.appendChild(totalGemsCollected);

    return totalGemsCollectedDiv;
  }

  levelCompleted() {
    const levelCompletedDiv = document.createElement("div");
    levelCompletedDiv.className = "levelCompletedDiv";
    levelCompletedDiv.id = "levelCompletedDiv";

    const levelCompleted = document.createElement("img");
    levelCompleted.className = "levelCompleted";
    levelCompleted.id = "levelCompleted";
    levelCompleted.src = "/textures/LevelCompleted.png";
    levelCompletedDiv.appendChild(levelCompleted);

    return levelCompletedDiv;
  }

  createGemsCollected() {
    const gemsCollectedDiv = document.createElement("div");
    gemsCollectedDiv.className = "gemsCollectedDiv";
    gemsCollectedDiv.id = "gemsCollectedDiv";

    const gemsCollectedLabel = document.createElement("label");
    gemsCollectedLabel.className = "gemsCollectedLabel";
    gemsCollectedLabel.id = "gemsCollectedLabel";
    // gemsCollectedLabel.textContent = `${this.collectedGems} X 1 = ${
    //   this.collectedGems * 1
    // } `;
    gemsCollectedLabel.textContent = "22 x 1 = 22";

    const gem = document.createElement("img");
    gem.className = "gem";
    gem.id = "gem";
    gem.src = "/textures/GemBlue.png";
    gemsCollectedDiv.appendChild(gemsCollectedLabel);
    gemsCollectedDiv.appendChild(gem);

    return gemsCollectedDiv;
  }

  createRotater() {
    const scoreIncreaserDiv = document.createElement("div");
    scoreIncreaserDiv.className = "scoreIncreaserDiv";
    scoreIncreaserDiv.id = "scoreIncreaserDiv";

    const scoreIncreaser = document.createElement("img");
    scoreIncreaser.className = "scoreIncreaser";
    scoreIncreaser.id = "scoreIncreaser";
    scoreIncreaser.src = "/textures/AdWheel.png";

    const scoreIncreaserPin = document.createElement("img");
    scoreIncreaserPin.className = "scoreIncreaserPin";
    scoreIncreaserPin.id = "scoreIncreaserPin";
    scoreIncreaserPin.src = "/textures/AdWheelArrow.png";

    scoreIncreaserDiv.appendChild(scoreIncreaser);
    scoreIncreaserDiv.appendChild(scoreIncreaserPin);

    return scoreIncreaserDiv;
  }

  doubleGemsVideoAd() {
    const doubleGemsDiv = document.createElement("div");
    doubleGemsDiv.className = "doubleGemsDiv";
    doubleGemsDiv.id = "doubleGemsDiv";

    const background = document.createElement("img");
    background.className = "videoBackground";
    background.id = "videoBackground";
    background.src = "/textures/ButtonRectangleLargeGreen.png";

    const video = document.createElement("img");
    video.className = "video";
    video.id = "video";
    video.src = "/textures/AdGreen.png";

    const collected = document.createElement("span");
    collected.className = "collectedGems";
    collected.id = "collectedGems";
    collected.textContent = `${this.collectedGems * 2}   `;

    const gem = document.createElement("img");
    gem.className = "gem";
    gem.id = "gem";
    gem.src = "/textures/Gem Blue.png";

    doubleGemsDiv.appendChild(background);
    doubleGemsDiv.appendChild(video);
    doubleGemsDiv.appendChild(collected);
    doubleGemsDiv.appendChild(gem);

    doubleGemsDiv.addEventListener("click", () => {
      console.log("DOUBLE GEMS CALL");
    });

    return doubleGemsDiv;
  }

  createNextButton() {
    const nextButtonDiv = document.createElement("div");
    nextButtonDiv.className = "nextButtonDiv";
    nextButtonDiv.id = "nextButtonDiv";

    const nextButton = document.createElement("button");
    nextButton.className = "nextButton";
    nextButton.id = "nextButton";
    nextButton.textContent = "NEXT";
    nextButton.addEventListener("click", () => {
      console.log("NEXT CALL");
    });

    nextButtonDiv.appendChild(nextButton);
    return nextButtonDiv;
  }
}
