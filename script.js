

//1. Inicializar canvas
const canvas = document.getElementById('main')
const ctx = canvas.getContext('2d')


//2. Dibujar cuadrados

let x = 0;

//Dibujar un cuadrado con contenido
ctx.fillStyle = 'green'
ctx.fillRect(x, 0, 30, 30)

ctx.fillStyle = 'pink'
ctx.fillRect(50, 50, 30, 30)


//Dibujar controno de cuadrado

ctx.strokeStyle = 'red'
ctx.strokeRect(90, 90, 30, 30)

//Borrar en forma de cuadrado

ctx.clearRect(60, 60, 10, 10)


document.getElementById('borrar-pantalla').addEventListener('click', ()=>{
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
})



//3. Dibujar paths

ctx.strokeStyle = 'black'
ctx.beginPath()
ctx.moveTo(ctx.canvas.width / 2, 0)
ctx.lineTo(ctx.canvas.width / 2, ctx.canvas.height)
ctx.stroke()
ctx.closePath()

ctx.beginPath()
ctx.moveTo(0, ctx.canvas.height / 2)
ctx.lineTo(ctx.canvas.width, ctx.canvas.height / 2)
ctx.stroke()
ctx.closePath()

ctx.fillStyle = 'purple'
ctx.beginPath()
ctx.moveTo(200, 200)
ctx.lineTo(250, 200)
ctx.lineTo(250, 250)
ctx.fill()
ctx.closePath()


//4. Arcs
// arc(x, y, radius, startAngle, endAngle, anticlockwise);

ctx.beginPath()
ctx.arc(50, 200, 30, (Math.PI), (Math.PI) * 2)  //Dibujar circunferencia entera
ctx.lineWidth = 20;
ctx.stroke()
ctx.closePath()


//5. Text

ctx.fillStyle = 'black'
ctx.font = '30px Arial';
ctx.textAlign = 'center'
ctx.textBaseline = 'middle'
ctx.fillText('Hola Jaime', ctx.canvas.width/2, ctx.canvas.height/2)


//6. Imagenes

const nutria = new Image()

nutria.src = 'nutria.png'

nutria.onload = ()=>{
  ctx.drawImage(nutria, 0, 0, ctx.canvas.width, ctx.canvas.height)
}

// const drawSuquare = ()=>{
  
// }

const clearRect = ()=>{
  ctx.clearRect(x, 0, 30, 30)
}


const moveSquareToTheRight = ()=>{
  ctx.fillRect(x, 0, 30, 30)
}

setInterval(()=>{
  clearRect()//Borrar
  x++ ///Actualizar
  moveSquareToTheRight() //Dibujar
},1)

document.getElementById('move-square').addEventListener('click', ()=>{
  moveSquareToTheRight()
})