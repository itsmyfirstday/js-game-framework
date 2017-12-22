import { GameObject } from 'engine/library/objects';
import { Vector } from 'engine/library/maths';
import { Keyboard } from 'engine/library/input';
import { random } from 'engine/utility/utility';
import { Viewport } from 'engine/library/screen';

export class Ball extends GameObject {
    getElementDom() {
        const element = document.createElement('div');
        element.id = 'ball';

        return element;
    }

    onInstantiate() {
        this._velocity = new Vector(random(-4, 4), 4);
    }

    onUpdate(timestep) {
        this._velocity = Vector.origin;
        
        this.position = this.position.add(this._velocity);

        if(this.bounds.right >= Viewport.width || this.bounds.left <= 0) {
            this._velocity.x = -this._velocity.x;
        }
        if(this.bounds.bottom >= Viewport.height || this.bounds.top <= 0) {
            this._velocity.y = -this._velocity.y;
        }
    }
}