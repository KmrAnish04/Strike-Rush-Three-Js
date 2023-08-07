import Experience from '../Experience.js'
import Environment from './Environment.js'
import GameTrack from './TrackPath.js'
import Obstacle from './Obstacles/Obstacle.js'
import { Vector3 } from 'three'
import BallPinsObstacle from './Obstacles/BallPinsObstacle.js'


export default class World {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        // Wait for resources
        this.resources.on('ready', () => {
            // Setup
            this.environment = new Environment()
            this.track = new GameTrack(10);
            // this.obs = new ArmLiverHammer(new Vector3(-5, 1.8, 0), new Vector3(0.009, 0.009, 0.009)); // Position, Scaling
            // this.obs = new LegLiverHammer(new Vector3(-5, 1.8, 0), new Vector3(0.009, 0.009, 0.009)); // Position, Scaling
            // this.obs = new LegLiverKnife(new Vector3(-5, 1.8, 0), new Vector3(0.009, 0.009, 0.009)); // Position, Scaling
            this.obstacle1 = new BallPinsObstacle(new Vector3(-5, 1.8, 0), new Vector3(0.009, 0.009, 0.009)); // Position, Scaling

        })
    }

    update() {
        // if (this.obstacle1) this.obstacle1.update()
    }
}
