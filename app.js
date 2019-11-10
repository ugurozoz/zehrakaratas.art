const container = document.querySelector(".container");
const info = document.querySelector(".nfo p");
const innerHeight = window.innerHeight;

//container.style.transform = `translateY(-800px) translateZ(-1800px)`;

document.addEventListener("mousedown", function(e) {
  console.log(e);
});
let fifi = false;
document.addEventListener("mousemove", evt => {
  // Print coordinates to screen
  if (!fifi) {
    fifi = true;

    setTimeout(function() {
      printVars([evt.pageX, evt.pageY]);
      fifi = false;
    }, 50);
  }
});

function printVars(arr) {
  //console.log(elm);

  const angle = 180; //rotate between 0 - 180
  const normalizeX = -(arr[1] / innerHeight) * angle;
  const normalizeY = (arr[0] / innerWidth) * angle;

  info.textContent = `< X : ${arr[0]} >    < Y : ${
    arr[1]
  } > < Angle : ${normalizeX} >  < innerHeight : ${innerHeight} >`;
  //container.style.transform = `translateY(-800px) translateZ(-1800px) rotateX(${normalize}deg)`;
  container.style.transform = `translateZ(-2000px) rotateX(${normalizeX}deg) rotateY(${normalizeY}deg) `;
  //console.log(container);
}

function Engine(container) {
  this.container = container;
}

Engine.prototype.rotateZ = function(deg) {
  //console.log(this.container.style);
  this.container.style = `transform:translateY(-800px) translateZ(-1800px) rotate3d(0, 1, 0, ${deg}deg)`;
};

//const z_engine = new Engine(container);

//z_engine.rotateZ(0);

// console.log(z_engine);
