import Component from "./Component.js"

class RectangleComponent extends Component{
    /* a retangle has a width, height, stroke, and fill */
    constructor(width, height, fill, stroke){
        super();
        this.width = width;
        this.height = height;
        this.fill = fill;
        this.stroke = stroke;
    }
    draw(ctx){
        /* draw a rectangle centered about 0,0 */
    }
}

export default RectangleComponent;