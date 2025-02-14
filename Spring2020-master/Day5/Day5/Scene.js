class Scene{
    gameObjects = [];
    

    constructor(){
        
    }
    draw(ctx, width, height){
        ctx.fillStyle = "#ADD8E6";
        ctx.fillRect(0,0,width, height)
        for(let i = 0; i < this.gameObjects.length; i++){
            let gameObject = this.gameObjects[i];
            gameObject.draw(ctx);
        }

    }
    update(){
        for(let i = 0; i < this.gameObjects.length; i++){
            let gameObject = this.gameObjects[i];
            gameObject.update();
        }
    }
}

export default Scene;

