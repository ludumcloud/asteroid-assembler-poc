/**
 * Asteroid rock entity
 */
game.AsteroidEntity = me.Entity.extend({

    /**
     * constructor
     */
    init:function (x, y) {
        // call the constructor
        this._super(me.Entity, 'init', [x, y , {
            image : 'rock',
            height : 32,
            width : 32
        }]);
    },

    /**
     * update the entity
     */
    update : function (dt) {
        this.body.vel.x = -10;
        this.body.vel.y = 0;

        if (me.input.isKeyPressed("up")) {
            this.body.vel.y += 5;
        }
        if (me.input.isKeyPressed("down")) {
            this.body.vel.y -= 5;
        }

        // apply physics to the body (this moves the entity)
        this.body.update(dt);

        // handle collisions against other shapes
        me.collision.check(this);

        // return true if we moved or if the renderable was updated
        return (this._super(me.Entity, 'update', [dt]) || this.body.vel.x !== 0 || this.body.vel.y !== 0);
    },

   /**
     * colision handler
     * (called when colliding with other objects)
     */
    onCollision : function (response, other) {
        // Make all other objects solid
        return true;
    }
});
