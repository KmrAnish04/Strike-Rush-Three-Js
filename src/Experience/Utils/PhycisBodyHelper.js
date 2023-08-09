import * as Physics from "cannon-es";
import { threeToCannon, ShapeType } from 'three-to-cannon';

export function getPhysicsBody(lampObject, shapeType) {

    const physicsMaterial = new Physics.Material("Default");

    const quaternion1 = lampObject.quaternion.clone();
    lampObject.quaternion.set(0, 0, 0, 1);
    let result;
    if (shapeType)
        result = threeToCannon(lampObject, { type: shapeType });
    else
        result = threeToCannon(lampObject);

    const { shape, offset, quaternion } = result;

    const physicsBody = new Physics.Body({
        mass: 0,
        allowSleep: false,
        material: physicsMaterial,
    });
    physicsBody.addShape(shape, offset, quaternion)
    physicsBody.velocity.x = 100;

    lampObject.quaternion.copy(quaternion1);
    physicsBody.position.copy(lampObject.position)
    physicsBody.quaternion.copy(lampObject.quaternion)

    return physicsBody;
}


