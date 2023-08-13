import { Mesh, SphereGeometry, MeshBasicMaterial, Group, BoxGeometry } from "three";
import { Box, Vec3 } from "cannon-es";
import { threeToCannon, ShapeType } from "three-to-cannon";
import { getPhysicsBody } from "../Utils/PhycisBodyHelper.js";
import Experience from "../Experience.js";

export default class HealthBallsBlock {
  constructor(healthMaterial, positionZ) {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.time = this.experience.time;
    this.debug = this.experience.debug;
    this.physicsWorld = this.experience.physicsWorld;
    this.resource = this.resources.items.HealthBall;
    this.healthMaterial = healthMaterial;
    this.positionZ = positionZ;
    this.creaditPoints = 2; // The no. of score user will get
    this.healthBlockGroup = new Group();
    this.healthBlockGroup.name = 'Health-Add';
    const scoreBlock = this.createHealthBallsBlock(3, new Vec3(0, 0.5, -15));

    // The socreBlock position should always set like below, bcoz group and rigid bodies are two different objects
    this.healthBlockGroup.position.z = this.healthBlockGroup.position.z + this.positionZ;
    scoreBlock.position.z = scoreBlock.position.z + this.positionZ;
    console.log("grup: ", this.healthBlockGroup)

    // let mesh = new Mesh(new BoxGeometry(5,1,5), new MeshBasicMaterial({color: 0xff0000}))
    // scoreCollider = getPhysicsBody(mesh, ShapeType.Mesh, this.healthMaterial, 0);
    // scoreCollider.position.y = 0.25;
    // scoreCollider.position.z = positionZ;
    // scoreCollider.collisionResponse = 0;
    // this.scene.add(mesh);
  }

  createBalls() {
    let model = this.resource.clone();
    model = model.children.shift();
    model.scale.set(0.007, 0.007, 0.007);
    this.healthBlockGroup.add(model)
    return model;
  }

  createHealthBallsBlock(size, positionToSetOn) {
    
    const gridSize = size; // Number of rows and columns
    // let gapX = 0.7; // Horizontal Gap b/w rows
    // let gapZ = 2; // Vertical Gap b/w cols
    const gap = 1; // Gap between spheres

    let startX = positionToSetOn.x - (gridSize/2);
    let startY = positionToSetOn.y;
    let startZ = positionToSetOn.z - (gridSize/2);
    
    for (let row = 0; row < gridSize; row++) {
      let tempx = startX;
      for (let col = 0; col < gridSize; col++) {
          const sphere = this.createBalls(new Vec3(0,0,0))
          sphere.position.set(tempx, startY, startZ);
          tempx += gap;
      }
      startZ += gap;
    }

    // Calculate the size of the grid based on spheres' positions
    const maxX = (gridSize - 1) * gap;
    const maxY = 0.5; // Half of the sphere's diameter
    const maxZ = (gridSize - 1) * gap;

    let mesh = new Mesh(new BoxGeometry(maxX+0.5,maxY,maxZ+0.5), new MeshBasicMaterial({color: 0xff0000}))
    let scoreCollider = getPhysicsBody(mesh, ShapeType.Mesh, this.healthMaterial, 0);

    scoreCollider.position.copy(this.healthBlockGroup.position)

    // Neutralizing the postions of rigidbody and hearthBlockGroup, In other words, we are maintaining the position ratios
    // (Bcoz: hearthBlockGroup Position{0,0,0} = scoreCollider Position{-0.5, 0.5, -15.5})
    scoreCollider.position.x -= 0.5;
    scoreCollider.position.y += 0.5;
    scoreCollider.position.z -= 15.5;

    console.log("group: ", this.healthBlockGroup.position, scoreCollider.position)
    scoreCollider.collisionResponse = 0;

    // Allocating the score for this block
    scoreCollider.myData = {score: this.creaditPoints}

    // Add to the worlds
    this.physicsWorld.addBody(scoreCollider)
    this.scene.add(this.healthBlockGroup);

    return scoreCollider;
  }
}
