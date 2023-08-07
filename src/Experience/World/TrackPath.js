import { BoxGeometry, MeshStandardMaterial, Mesh, SRGBColorSpace, RepeatWrapping } from 'three'
import Experience from '../Experience.js'

export default class GameTrack {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        console.log("Settting Track!");
        this.setGeometry()
        this.setTextures();
        this.setMaterial()
        this.setMesh()
    }

    setGeometry() {
        this.geometry = new BoxGeometry(10, 100, 0.5);
    }

    setTextures() {
        this.textures = {}

        this.woodTexture = this.resources.items.trackTexture;
        this.woodTexture.colorSpace = SRGBColorSpace
        this.woodTexture.repeat.set(1.5, 1.5)
        this.woodTexture.wrapS = RepeatWrapping
        this.woodTexture.wrapT = RepeatWrapping

        // this.textures.color = this.resources.items.grassColorTexture
        // this.textures.normal = this.resources.items.grassNormalTexture
        // this.textures.normal.repeat.set(1.5, 1.5)
        // this.textures.normal.wrapS = THREE.RepeatWrapping
        // this.textures.normal.wrapT = THREE.RepeatWrapping
    }

    setMaterial() {
        this.material = new MeshStandardMaterial({
            map: this.woodTexture,
            normalMap: this.textures.normal
        })
    }

    setMesh() {
        this.mesh = new Mesh(this.geometry, this.material)
        this.mesh.rotation.x = - Math.PI * 0.5
        // this.mesh.receiveShadow = true
        this.scene.add(this.mesh)
    }
}