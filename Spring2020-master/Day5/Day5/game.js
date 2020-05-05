import Scene from "./Scene.js";
import GameObject from "./GameObject.js"
import RectangleComponent from "./RectangleComponent.js"
import CircleComponent from "./CircleComponent.js"
import TextComponent from "./TextComponent.js"
import RectangleBehavior from "./RectangleBehavior.js";
import CircleBehavior from "./CircleBehavior.js";
import TextBehavior from "./TextBehavior.js";
import TitleBehavior from "./TitleBehavior.js";
//import ClickBehavior from "./ClickBehavior.js";


let sceneOne = new Scene();
let sceneTwo = new Scene();

//Scene 2
let startSquare = new GameObject(300,400);
sceneTwo.gameObjects.push(startSquare);
let startSquareComponent  = new RectangleComponent(400,100,"red","black");
let startSquareBehavior = new RectangleBehavior();
startSquare.addComponent(startSquareComponent);
startSquare.addComponent(startSquareBehavior);


let startTextTimer = new GameObject(425,460);
sceneTwo.gameObjects.push(startTextTimer);
let startTextComponent  = new TextComponent("10","30pt Times","yellow","blue");
let startTextBehavior = new TitleBehavior();
startTextTimer.addComponent(startTextComponent);
startTextTimer.addComponent(startTextBehavior);

//Scene 1
let rotatingSquare = new GameObject(0,1000);
sceneOne.gameObjects.push(rotatingSquare);
let rectangleComponent  = new RectangleComponent(1080,1000,"brown","black");
let rectangleBehavior = new RectangleBehavior();
rotatingSquare.addComponent(rectangleComponent);
rotatingSquare.addComponent(rectangleBehavior);
rectangleComponent  = new RectangleComponent(1080,20,"green","black");
rectangleBehavior = new RectangleBehavior();
rotatingSquare.addComponent(rectangleComponent);
rotatingSquare.addComponent(rectangleBehavior);

let groundOne = new GameObject(400,900);
sceneOne.gameObjects.push(groundOne);
rectangleComponent  = new RectangleComponent(100,100,"brown","black");
rectangleBehavior = new RectangleBehavior();
groundOne.addComponent(rectangleComponent);
groundOne.addComponent(rectangleBehavior);
rectangleComponent  = new RectangleComponent(100,20,"green","black");
rectangleBehavior = new RectangleBehavior();
groundOne.addComponent(rectangleComponent);
groundOne.addComponent(rectangleBehavior);

let groundTwo = new GameObject(700,800);
sceneOne.gameObjects.push(groundTwo);
rectangleComponent  = new RectangleComponent(100,100,"brown","black");
rectangleBehavior = new RectangleBehavior();
groundTwo.addComponent(rectangleComponent);
groundTwo.addComponent(rectangleBehavior);
rectangleComponent  = new RectangleComponent(100,20,"green","black");
rectangleBehavior = new RectangleBehavior();
groundTwo.addComponent(rectangleComponent);
groundTwo.addComponent(rectangleBehavior);

let groundThr = new GameObject(1000,700);
sceneOne.gameObjects.push(groundThr);
rectangleComponent  = new RectangleComponent(100,100,"brown","black");
rectangleBehavior = new RectangleBehavior();
groundThr.addComponent(rectangleComponent);
groundThr.addComponent(rectangleBehavior);
rectangleComponent  = new RectangleComponent(100,20,"green","black");
rectangleBehavior = new RectangleBehavior();
groundThr.addComponent(rectangleComponent);
groundThr.addComponent(rectangleBehavior);

let groundfour = new GameObject(700,600);
sceneOne.gameObjects.push(groundfour);
rectangleComponent  = new RectangleComponent(100,50,"brown","black");
rectangleBehavior = new RectangleBehavior();
groundfour.addComponent(rectangleComponent);
groundfour.addComponent(rectangleBehavior);
rectangleComponent  = new RectangleComponent(100,20,"green","black");
rectangleBehavior = new RectangleBehavior();
groundfour.addComponent(rectangleComponent);
groundfour.addComponent(rectangleBehavior);



let textTimer = new GameObject(300,50);
sceneOne.gameObjects.push(textTimer);
let textComponent  = new TextComponent("10","30pt Times","red");
let textBehavior = new TextBehavior();
textTimer.addComponent(textComponent);
textTimer.addComponent(textBehavior);

// textComponent  = new TextComponent("10","30pt Times","red","blue");
// textBehavior = new TextBehavior();
// textTimer.addComponent(textComponent);
// textTimer.addComponent(textBehavior);

// let livesText = new GameObject(50,50);
// sceneOne.gameObjects.push(livesText);
// let livesComponent = new TextComponent("10","30pt Times","red","blue");
// let livesBehavior = new Lives();
// livesText.addComponent(livesComponent);
// livesText.addComponent(livesBehavior);

let yellowCircle = new GameObject(100,950);
sceneOne.gameObjects.push(yellowCircle);
let circleComponent  = new CircleComponent(50,"yellow","black");
let circleBehavior = new CircleBehavior();
yellowCircle.addComponent(circleComponent);
yellowCircle.addComponent(circleBehavior);

//CLOUD CODE!!! COPY PASTE W THIS TO MAKE CLOUDS YOU DUMMY (sorry Prof Ricks if you see this that's meant for me)
let whiteCircle = new GameObject(70,110);
sceneOne.gameObjects.push(whiteCircle);
circleComponent  = new CircleComponent(30,"white","white");
whiteCircle.addComponent(circleComponent);
//
let whiteCircleTwo = new GameObject(100,90);
sceneOne.gameObjects.push(whiteCircleTwo);
circleComponent  = new CircleComponent(40,"white","white");
whiteCircleTwo.addComponent(circleComponent);
//
let whiteCircleThree = new GameObject(130,110);
sceneOne.gameObjects.push(whiteCircleThree);
circleComponent  = new CircleComponent(30,"white","white");
whiteCircleThree.addComponent(circleComponent);

// End Scene1

let currentScene = sceneOne;

let canv, ctx;

function main() {
    canv = document.querySelector("#canv");
    ctx = canv.getContext('2d');

    setInterval(gameLoop, 33);
}

function gameLoop() {
    update();
    draw(ctx);
}

function update() {
    currentScene.update();    
}

function draw(ctx) {
    currentScene.draw(ctx, canv.width, canv.height);
}



main();

