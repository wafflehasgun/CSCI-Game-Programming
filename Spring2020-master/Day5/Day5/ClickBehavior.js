import Behavior from "./Behavior.js"

export default class ClickBehavior extends Behavior{
    
    start(){
        
    }
    update(){
       
    }

    onMouseOver(){
        console.log("Mouse Over");
    }

    onMouseDown(){
        console.log("Mouse down");
        this.gameObject.x += 100;
        this.gameObject.y += 100;
    }
}

