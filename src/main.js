import "../css/style.css";
import { sketch } from "p5js-wrapper";
import GUI from 'lil-gui';

const gui = new GUI();
//gui.add( document, 'title' );

let obj = { number1: 20, number2: 33 }

gui.add( obj, 'number1', 0, 100, 1 ); // min, max
gui.add( obj, 'number2', 0, 100, 1 ); // min, max, step

let angle = 0;
let strokeThickness = 20;

//https://workshop.chromeexperiments.com/examples/gui/#1--Basic-Usage to learn about dat.GUI

sketch.setup = function () {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);

};

sketch.draw = function () {
  background(0, 15, 30);
  translate(width / 2, height / 2);
  
  strokeWeight(obj.number1);
  stroke(0, 15, 30);

  for (let i = 0; i < 108; i++) {
    // fill(i * 10, 15, 30);
    fill(i * obj.number2,  i * 8, 12);
    scale(0.95);
    rotate(radians(angle));
    rect(0, 0, 600, 600);
  }
  angle += 0.1;
};

sketch.windowResized = () => {
  resizeCanvas(window.innerWidth, window.innerHeight);
};

/*
radialGradient(
  width/2, height/2, 0,
  width/2, height/2, 350,
  color(310, 100, 100, 100),
  color(250, 100, 100, 100)
)

function radialGradient(sX, sY, sR, eX, eY, eR, colorS, colorE){
  let gradient = drawingContext.createRadialGradient(
    sX, sY, sR, eX, eY, eR
  );
  gradient.addColorStop(0, colorS);
  gradient.addColorStop(1, colorE);

  drawingContext.fillStyle = gradient;
}

// ES6:
import {
  MagicCircle,
  Layer,
  Folder,
  NumberControl,
  ColorControl,
} from '@magic-circle/client';

// Create instance of Magic Circle client
const magic = new MagicCircle();

magic
  .setup((gui) => {
    // Create layer and add this to the main layer (gui.layer)
    const layer = new Layer('Main').addTo(gui.layer);

    // Create sublayer
    const sublayer = new Layer('child').addTo(layer);

    // Add folder with controls
    const folder = new Folder('Position').addTo(subLayer);
    folder.add([
      new NumberControl(obj3d, 'x').range(-100, 100),
      new NumberControl(obj3d, 'y').range(-100, 100),
      new NumberControl(obj3d, 'z').range(-100, 100),
    ]);

    // Add control without folder
    sublayer.add(new ColorControl(obj3d, 'color'));
  })
  .loop((delta) => {
    // this code will run every frame
  })
  // auto start
  .start();*/