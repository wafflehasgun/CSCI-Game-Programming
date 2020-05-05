class Scene{
    /* Hold a reference to the scene graph */
    

    constructor(){
        
    }
    draw(ctx, width, height){
        /* clear the playing area */

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

