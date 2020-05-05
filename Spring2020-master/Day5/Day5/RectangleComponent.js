import Component from "./Component.js"

class RectangleComponent extends Component{
    width;
    height;
    fill;
    stroke;
    constructor(width, height, fill, stroke){
        super();
        this.width = width;
        this.height = height;
        this.fill = fill;
        this.stroke = stroke;
    }
    draw(ctx){
        ctx.save();
        ctx.translate(0, 0);
        ctx.fillStyle = this.fill;
        ctx.strokeStyle = this.stroke;
        ctx.fillRect(0,0, this.width, this.height);
        ctx.strokeRect(0, 0, this.width, this.height);
        ctx.restore();
    }
    update(){

    }
}

export default RectangleComponent;