import { BoxGeometry, MeshStandardMaterial, Mesh, SRGBColorSpace, RepeatWrapping } from 'three'
import Experience from '../Experience.js'

export default class GameTrack {
    constructor(trackLenght = 5) {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        console.log("SetttingUp Track!");
        this.setTextures();
        this.setMaterial()
        this.setUpTrack(trackLenght)
    }

    setGeometry() {
        let geometry = new BoxGeometry(10, 20, 1);
        return geometry;
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

    setMesh(geometry) {
        let mesh = new Mesh(geometry, this.material)
        mesh.rotation.x = - Math.PI * 0.5
        mesh.position.y = mesh.position.y - 0.5;
        // this.mesh.receiveShadow = true
        this.scene.add(mesh)
        return mesh;
    }

    setUpTrack(noOfTiles) {
        this.trackTiles = [];
        let tile = this.setMesh(this.setGeometry());
        this.trackTiles.push(tile);
        noOfTiles--;
        for (let tileNum = 0; tileNum < noOfTiles; tileNum++) {
            let tile = this.setMesh(this.setGeometry());
            let lastTilePos = this.trackTiles[this.trackTiles.length - 1].position.z
            tile.position.z = lastTilePos - 20;
            this.trackTiles.push(tile);
        }
    }
}