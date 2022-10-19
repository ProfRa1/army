var tiros1pistolanormal = 20;
var carregamento1pistolanormal = 100;
var osso1;
var fome1;
var morrendo1, morrendo2, morrendo3;
var vida1, vida2, vida3;
var sede1, agua, raio, cansado, pistola;
var agua1, osso, fome, morrendo, vida, sede;
var raio1;
var cansado1;
var pistola;
var pistola1;
function preload() {
    osso = loadImage("download (5)-6.png.png");
    fome = loadImage("download (5)-5.png.png");
    morrendo = loadImage("download (5)-4.png.png");
    vida = loadImage("download (5)-3.png.png");
    sede = loadImage("download (5)-2.png.png");
    agua = loadImage("download (5)-1.png.png");
    raio = loadImage("download (5)-8.png (1).png");
    cansado = loadImage("download (5)-7.png.png");
    pistola = loadImage("pistola-1.png.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    osso1 = createSprite(windowWidth / 2 + 600, 122);
    fome1 = createSprite(windowWidth / 2 + 600, 110);
    morrendo1 = createSprite(windowWidth / 2 + 200, 110);
    vida1 = createSprite(windowWidth / 2 + 200, 110);
    sede1 = createSprite(windowWidth / 2 + 720, 125);
    agua1 = createSprite(windowWidth / 2 + 720, 125);
    raio1 = createSprite(windowWidth / 2 + 870, 125);
    cansado1 = createSprite(windowWidth / 2 + 870, 125);
    pistola1 = createSprite(windowWidth / 2 - 800, 80);

    morrendo2 = createSprite(windowWidth / 2 + 0, 110);
    vida2 = createSprite(windowWidth / 2 + 0, 110);

    morrendo3 = createSprite(windowWidth / 2 + -200, 110);
    vida3 = createSprite(windowWidth / 2 + -200, 110);

    osso1.addImage(osso);
    fome1.addImage(fome);
    morrendo1.addImage(morrendo);
    vida1.addImage(vida);
    sede1.addImage(sede);
    agua1.addImage(agua);
    morrendo2.addImage(morrendo);
    vida2.addImage(vida);
    morrendo3.addImage(morrendo);
    vida3.addImage(vida);
    cansado1.addImage(cansado);
    raio1.addImage(raio);
    pistola1.addImage(pistola);

    raio1.scale = 0.4;
    cansado1.scale = 0.4;
    pistola1.scale = 0.6;
    tiros1pistolanormal = 20;
    carregamento1pistolanormal = 100;
}

function draw() {
    background("white");
    fill("black");
    textSize(50);
    text(tiros1pistolanormal + "/" + carregamento1pistolanormal, 50, 190);
    drawSprites();
    if (tiros1pistolanormal === 0) {
        if (keyWentDown("f")) {
            if (carregamento1pistolanormal >= 1) {
                tiros1pistolanormal = 20;
                if (tiros1pistolanormal === 0) {
                    carregamento1pistolanormal =
                        carregamento1pistolanormal - 20;
                    tiros1pistolanormal = 20;
                }
            }
        }
    }
    if (carregamento1pistolanormal === 100 && tiros1pistolanormal === 0) {
        carregamento1pistolanormal = carregamento1pistolanormal - 20;
        tiros1pistolanormal = 0;
    } else if (
        carregamento1pistolanormal === 80 &&
        tiros1pistolanormal === 0 &&
        keyWentDown("f")
    ) {
        carregamento1pistolanormal = 60;
        tiros1pistolanormal = 0;
    }

    if (keyDown("f")) {
        if (carregamento1pistolanormal === 100 && tiros1pistolanormal === 0) {
            carregamento1pistolanormal = 80;
        } else if (
            carregamento1pistolanormal === 80 &&
            tiros1pistolanormal === 0
        ) {
            carregamento1pistolanormal = 60;
        } else if (
            carregamento1pistolanormal === 60 &&
            tiros1pistolanormal === 0
        ) {
            carregamento1pistolanormal = 40;
        }
    }

    if (frameCount % 100 === 0) {
        agua1.destroy();
        raio1.destroy();
        vida1.destroy();
        vida2.destroy();
        vida3.destroy();
        fome1.destroy();
    }
}
function mouseClicked() {
    if (tiros1pistolanormal >= 1) {
        tiros1pistolanormal = tiros1pistolanormal - 1;
    }
}
