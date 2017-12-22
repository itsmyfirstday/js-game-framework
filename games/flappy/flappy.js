import { Game } from 'engine/game';
import { Plane } from 'games/flappy/components/plane';

import { GameObjectFactory } from 'engine/library/objects';
import { Vector } from 'engine/library/maths';
import { Viewport, Canvas } from 'engine/library/screen';
import { BoxCollider } from 'engine/library/collisions';

class FlappyGame extends Game {
    onStart() {
        const plane = GameObjectFactory.instantiate(Plane, {
            id: 'bat',
            dimensions: new Vector(50, 50),
            position: new Vector(50, 50),
            collider: BoxCollider,
        });
    }
}

const game = new FlappyGame();
game.initialise();