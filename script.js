window.addEventListener("load", function(){
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d"); // this calls upon a built in canvas 2d API
  canvas.width = 600;
  canvas.height = 600;

  // class is a template for creating objects, of which variables and functions are bundled in ( encapsulation of OOP)
  // if you call upon a class, you will create a new instance of the class based on the defined values and methods.

  // to animate the drawings smoothly, we use fractal class to make a shape and use javascript to turn the shap einto pixels.
  class Fractal {
    // constructor is a js method
    //when called with 'new', a new blank object will be created with the same properties of thie method
    //canvas width and height arguments are expected to be passed inside constructor
    constructor(canvasWidth, canvasHeight) {
      //now, convert the above arguments as class properties
      this.canvasWidth = canvasWidth;
      this.canvasHeight = canvasHeight;
    }
    //draw method- draws a shape based on the given values of this method.
    //requires one argument- "context"
    draw(context) {
      context.beginPath(); //tells system you want to start to draw
      context.moveTo(0,0); //sets start x and y coordinates
      context.lineTo(canvas.width, canvas.height); //sets the end x and y coordinates
      context.stroke(); //actually draws the line
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
