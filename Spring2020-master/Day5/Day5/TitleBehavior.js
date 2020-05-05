import Behavior from "./Behavior.js"
import TextComponent from "./TextComponent.js"

class TitleBehavior extends Behavior{
    
    start(){

    }

    update(){
        this.gameObject.getComponent(TextComponent).text = "JumpBall";
    }

}

export default TitleBehavior;