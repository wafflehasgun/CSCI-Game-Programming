import Component from "./Component.js"

class TextComponent extends Component{
    text;
    font;
    fill;
    
    constructor(text, font, fill){
        super();
        this.text = text;
        this.font = font;
        this.fill = fill;
    }
    draw(ctx){
        ctx.save();
        ctx.fillStyle = this.fill;
        ctx.font = this.font;
        ctx.fillText(this.text,0,0);
        ctx.restore();
    }
    update(){

    }
}

export default TextComponent;