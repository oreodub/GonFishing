export default class Background {
  constructor(dimensions) {
    this.dimensions = dimensions;
  }

  animate(ctx) {
    this.drawBackground(ctx);
  }

  drawBackground(ctx) {
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
  }
}
