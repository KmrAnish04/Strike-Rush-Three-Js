import * as THREE from 'three'
import Experience from '../../Experience.js'

export default class ArmLiverAxe {
    constructor(modelPostition, modelScaling) {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.time = this.experience.time
        this.debug = this.experience.debug

        // Resource
        this.resource = this.resources.items.ObstacleLiverAxe
        console.log(modelPostition);
        this.setModel(modelPostition, modelScaling);



        // Debug
        // if (this.debug.active) {
        //     this.debugFolder = this.debug.ui.addFolder('fox')
        // }
    }

    setModel(modelPosition, modelScaling) {
        this.model = this.resource
        this.model.scale.set(modelScaling.x, modelScaling.y, modelScaling.z);
        this.model.position.set(modelPosition.x, modelPosition.y, modelPosition.z);
        this.scene.add(this.model)
        console.log("this is : ", this.model)
        this.model.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.castShadow = true
            }
        })
        this.playAnimation()
    }
    playAnimation() {
        this.animation = this.model.animations[0];
        this.mixer = new THREE.AnimationMixer(this.model);
        const action = this.mixer.clipAction(this.animation);
        action.play();
    }

    update() {
        this.mixer.update(this.time.delta * 0.001)
    }
}