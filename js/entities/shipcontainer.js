game.ShipContainer = me.Container.extend({

  init : function () {
      this.parts = [];
      this.startx = 50;
      this.starty = me.game.viewport.getHeight() / 4;
      this._super(me.Container, "init", [this.startx, this.starty]);
  },

  resetShip : function() {
      [-1, 0, 1].forEach((y) => {
          [0, 1, 2, 3].forEach((x) => {
              this.addPart(x,y);
          });
      });
  },

  addPart : function(x, y) {
      let realy = this.indexConversion(y);
      console.log("adding part at " + [this.startx + (34*x), this.starty + (34*y)]);
      let tempPart = me.pool.pull("mainPlayer", this.startx + (34*x), this.starty + (34*y));
      if (!this.parts[realy]) {
          this.parts[realy] = [];
      }
      this.parts[realy][x] = tempPart;
      this.addChild(tempPart);
      this.updateChildBounds();
  },

  indexConversion : function(x) {
      if (x < 0) {
          // neg indexes map to odd # rows, -1 => 1, -2 => 3, etc.
          return ((x*-2) -1);
      } // else  x >= 0
      // pos indexes map to even # rows, 0 => 0, 1 => 2, 2 => 4
      return realx = x*2;
  }
});
