const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = canvas.width = 1920;
const CANVAS_HEIGHT = canvas.height = 1080;
let gameSpeed = 5;

const backgroundLayer1 = new Image();
backgroundLayer1.src = "./Background Assets/layer1.png";
const backgroundLayer2 = new Image();
backgroundLayer2.src = "./Background Assets/layer2.png";
const backgroundLayer3 = new Image();
backgroundLayer3.src = "./Background Assets/layer3.png";
const backgroundLayer4 = new Image();
backgroundLayer4.src = "./Background Assets/layer4.png";
const backgroundLayer5 = new Image();
backgroundLayer5.src = "./Background Assets/layer5.png";
const backgroundLayer6 = new Image();
backgroundLayer6.src = "./Background Assets/layer6.png";
const backgroundLayer7 = new Image();
backgroundLayer7.src = "./Background Assets/layer7.png";
const backgroundLayer8 = new Image();
backgroundLayer8.src = "./Background Assets/layer8.png";
const backgroundLayer9 = new Image();
backgroundLayer9.src = "./Background Assets/layer9.png";
const backgroundLayer10 = new Image();
backgroundLayer10.src = "./Background Assets/layer10.png";

class Layer {
    constructor(image, speedModifier) {
        this.x = 0;
        this.y = 0;
        this.width = 1920;
        this.height = 1080;
        this.image = image;
        this.speedModifier = speedModifier;
        this.speed = gameSpeed * this.speedModifier;
    }
    update() {
        this.speed = gameSpeed * this.speedModifier;
        if (this.x <= -this.width) {
            this.x = 0;
        }
        this.x = this.x - this.speed;
    }
    draw() {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
    }
}

const layers = [
    { layer: new Layer(backgroundLayer1, 0.2) },
    { layer: new Layer(backgroundLayer2, 0.4) },
    { layer: new Layer(backgroundLayer3, 0.6) },
    { layer: new Layer(backgroundLayer4, 0.8) },
    { layer: new Layer(backgroundLayer5, 1) },
    { layer: new Layer(backgroundLayer6, 1.2) },
    { layer: new Layer(backgroundLayer7, 1.4) },
    { layer: new Layer(backgroundLayer8, 1.6) },
    { layer: new Layer(backgroundLayer9, 1.8) },
    { layer: new Layer(backgroundLayer10, 2) }
]

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    layers.forEach(({ layer }) => {
        layer.update()
        layer.draw()
    })
    requestAnimationFrame(animate);
}
animate();