const container = document.querySelector('.container')

function Engine(container) {
  this.container = container;
}

Engine.prototype.rotateZ = function (deg) {
  const style = Object.entries(this.container.style)
  let styleText = ""
  style.forEach(elm => {  
    console.log(elm[0])
    if (elm[1] !== "") {
      styleText += `${elm}`     
    } 
  });
  console.log(styleText)
  
  this.container.style = `transform: translateZ(30vw) rotate3d(0, 1, 0, ${deg}deg);`
  
}

const z_engine = new Engine(container)

z_engine.rotateZ(45)


console.log(z_engine)