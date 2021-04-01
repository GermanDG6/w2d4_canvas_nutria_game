

const canvas = document.getElementById('main')
const ctx = canvas.getContext('2d')

class Nutria {
  constructor(){
    this.img = ''
    this.width = 50
    this.height = 50
    this.x = 0
    this.y = 0
    this.direction = ''
  }

  renderImage(){
    this.img = new Image()

    this.img.src = 'nutria.png'

    this.img.onload = ()=>{
      this.drawSelf()
    }
  }

  drawSelf(){
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
  }

  moveRight(){
    this.x += 5
  }

  moveLeft(){
    this.x -= 5
  }

  moveUp(){
    this.y -= 5
  }

  moveDown(){
    this.y += 5
  }
}


const otter = new Nutria()

otter.renderImage()


const checkForBoundries = ()=>{
  if(otter.x > 255){
    otter.x = 255
    console.log('chocado a la derecha')
  }

  if(otter.x < 1){
    otter.x = 0
  }

  if(otter.y > 255){
    otter.y = 255
  }

  if(otter.y < -5){
    otter.y = -6
  }
}

//Clear

const clearCanvas = ()=>{
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
}

//Update

const updateCanvas = ()=>{
  
  clearCanvas()
  
  if(otter.direction === 'right'){
    otter.moveRight()
  } else if(otter.direction === 'left'){
    otter.moveLeft()
  } else if(otter.direction === 'up'){
    otter.moveUp()
  } else if(otter.direction === 'down'){
    otter.moveDown()
  }
  //Update

  drawCanvas()

  checkForBoundries()

  requestAnimationFrame(updateCanvas)
}
//Draw

const drawCanvas = ()=>{
  otter.drawSelf()
}

updateCanvas()


document.addEventListener('keydown', (event)=>{
  otter.direction = {
    s: 'down',
    w: 'up',
    a: 'left',
    d: 'right'
  }[event.key]
})

