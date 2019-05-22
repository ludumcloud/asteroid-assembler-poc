game.PlayScreen = me.ScreenObject.extend({

    /**
     *  action to perform on state change
     */
    onResetEvent: function() {
        // reset the score
        game.data.score = 0;

        me.game.world.addChild(new me.ColorLayer("background", "#220000"), 0);

        this.playerShip = new game.ShipContainer();
        this.playerShip.resetShip();
        me.game.world.addChild(this.playerShip, 1);

        this.asteroidSpawner = new game.AsteroidSpawner();
        me.game.world.addChild(this.asteroidSpawner);

        this.spaceDuster = new me.ParticleEmitter(me.game.viewport.getWidth() - 20, 0);
        this.spaceDuster.height = me.game.viewport.getHeight();
        this.spaceDuster.width = 20;
        this.spaceDuster.wind = -0.1;
        this.spaceDuster.gravity = 0;
        this.spaceDuster.angle = Math.PI;
        this.spaceDuster.speed = 10;
        this.spaceDuster.totalParticles = 100;
        this.spaceDuster.minLife = 3000;
        this.spaceDuster.maxLife = 7000;
        me.game.world.addChild(this.spaceDuster);
        this.spaceDuster.streamParticles();
        // Add our HUD to the game world, add it last so that this is on top of the rest.
        // Can also be forced by specifying a "Infinity" z value to the addChild function.
        this.HUD = new game.HUD.Container();
        me.game.world.addChild(this.HUD, 10);

        me.input.bindKey(me.input.KEY.UP, "up");
        me.input.bindKey(me.input.KEY.DOWN, "down");
        me.input.bindKey(me.input.KEY.W, "up");
        me.input.bindKey(me.input.KEY.S, "down");
    },

    /**
     *  action to perform when leaving this screen (state change)
     */
    onDestroyEvent: function() {
        this.spaceDuster.stopStream();
        me.game.world.removeChild(this.spaceDuster);

        // remove the HUD from the game world
        me.game.world.removeChild(this.HUD);
        me.game.world.removeChild(this.playerShip);
        me.game.world.removeChild(this.asteroidSpawner);


        me.input.unbindKey(me.input.KEY.UP);
        me.input.unbindKey(me.input.KEY.DOWN);
        me.input.unbindKey(me.input.KEY.W);
        me.input.unbindKey(me.input.KEY.S);
    }
});
