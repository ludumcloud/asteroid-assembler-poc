game.AsteroidSpawner = me.Container.extend({

  init : function () {
      this._super(me.Container, "init", []);
      this.timeSinceLastSpawn = 0;
  },

  update : function (dt) {
      this.timeSinceLastSpawn += dt;

      if (this.timeSinceLastSpawn > 1000) {
          this.timeSinceLastSpawn = 0;
          if (me.Math.random(0, 5) > 2) {
              let tempx = me.game.viewport.getWidth() - 32;
              let tempy = me.Math.random(32, me.game.viewport.getHeight() - 32);
              me.game.world.addChild(me.pool.pull("asteroid", tempx, tempy ), 2);
          }
      }
      return false;
  }
});
