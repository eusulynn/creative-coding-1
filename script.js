window.addEventListener("load", function(){
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d"); // this calls upon a built in canvas 2d API
  canvas.width = 600;
  canvas.height = 600;
  // canvas setting, use inspect to see settings
  console.log(ctx);
  ctx.lineWidth = 10;
  ctx.lineCap = 'round';
  ctx.fillStyle = 'blue';
  ctx.shadowColor = 'black';
  ctx.shadowOffsetY = 10;
  ctx.shadowOffsetX = 5;
  ctx.shadowBlur = 10;



  // class is a template for creating objects, of which variables and functions are bundled in ( encapsulation of OOP)
  // if you call upon a class, you will create a new instance of the class based on the defined values and methods.

  // to animate the drawings smoothly, we use fractal class to make a shape and use javascript to turn the shap einto pixels.
  class Fractal {
    // constructor is a js method that holds the class properties
    //when called with 'new', a new blank object will be created with the same properties of this method
    //canvas width and height arguments are expected to be passed inside constructor
    constructor(canvasWidth, canvasHeight) {
      //now, convert the above arguments as class properties
      this.canvasWidth = canvasWidth;
      this.canvasHeight = canvasHeight;
      this.size = this.canvasWidth * 0.3;
      this.side = 6
      this.maxLevel = 3
      this.scale = 0.5
      this.spread = Math.random() * 2.8 + 0.1 // this makes the range start from 0.1 instead of 0 rad which might mess things up
      this.branches = 2
      this.color = 'hsl('+ Math.random() * 360 +', 100%, 50%)'
    }
    //draw method- draws a shape based on the given values of this method.
    //its a public draw method that can be called from the outside and will draw the complete fractal shape with for loops.
    //requires one argument- "context"
    draw(context) {
      // context.fillRect(20,30,this.canvasWidth,this.canvasHeight);
      context.strokeStyle = this.color
      context.save()
      context.translate(this.canvasWidth/2 , this.canvasHeight/2);
      context.scale(0.7,0.7)
      context.rotate(0) //is this rotate redundant now that I have a rotate in the for loop?
      for (let i = 0; i < this.side; i++) {
        this.#drawLine(context,0)
        context.rotate(Math.PI * 2 / this.side)
      }
      context.restore()
    }
    // #drawline is a private method, cant be seen by others (abstraction concept of OOP)
    // #drawline is a private helper method, that handles drawing of a single line/fractal branch
    // it can be called in the publid draw method.
    // expects 'context' argument to specifie which canvas element we want to draw on.
    #drawLine(context, level){
      if (level > this.maxLevel ) return;
      context.beginPath(); //tells system you want to start to draw
      context.moveTo(0,0); //sets start x and y coordinates
      context.lineTo(this.size , 0); //sets the end x and y coordinates
      context.stroke(); //actually draws the line


      for (let i = 0; i < this.branches; i++) {
        // To start drawing fractals, I will start a recursions that handles the fractal branches here with a save restore
      context.save();
      context.translate(this.size - (this.size/this.branches) * i , 0); //moves the point of which the new line grows from its parent line
      context.scale(this.scale, this.scale);

      context.save();
      // Here I need to draw lines with instruction ie: rotate angle, then draw another line, and repeat
      context.rotate(this.spread);
      this.#drawLine(context,level + 1); // if i end it here, i will have infintie lines drawn. I need to to specify the number of lines to be drawn, use level as an argument
      context.restore();

      context.save();
      context.rotate(-this.spread);
      this.#drawLine(context,level + 1); // if i end it here, i will have infintie lines drawn. I need to to specify the number of lines to be drawn, use level as an argument
      context.restore();

      context.restore();
      }


    }

  }
  //now we will need to call this fractal class to draw
  const fractal1 = new Fractal(canvas.width, canvas.height); // new is a spefici keyword in JS to make a new instance
  fractal1.draw(ctx);
  // we use particle class to assign these pixels to a particle shape.
  // in particle class, we can deal with motions like float in, rain in, etc.
  // particle class contains the blueprint for behavious and properties of individual particles
  class Particle {

  }

  // rain class controls the entire effect. eg defines number of particles etc.
  class Rain {

  }
});
