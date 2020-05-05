import Behavior from "./Behavior.js"

class CircleBehavior extends Behavior{
    time = 0;
    position = 0;
    speed = 5;
    goingLeft = true;
    start(){
        this.gameObject.x = 0;
    }
    update(){
        window.addEventListener('keydown', function (a){
            jumpFunction();
        });
        this.time += 1;
        if(this.goingLeft){
            this.position -= this.speed;
        }
        else{
            this.position += this.speed;
        }

        if(this.position < 0){
            this.goingLeft = false;
        }
        if(this.position > 1080){
            this.goingLeft = true;
        }

        //this.gameObject.x = this.position;
        this.gameObject.x = Math.sin(this.time/25)*540+540;
    }
    jumpFunction()
    {
        let p = this.gameObject.y;
        for (let i = 0; i < 1000; i++)
        {
            this.gameObject.y -= 10;
        }
        while (this.gameObject.y != p)
        {
            this.gameObject.y += 10;
        }
    }

}

export default CircleBehavior;