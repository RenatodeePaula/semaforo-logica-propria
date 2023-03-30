const buttons = document.querySelector('#buttons')
const image = document.querySelector('img')
const auto = document.querySelector('#auto')
let interval = ''

const colors = {    
    'red':     "./assets/vermelho.png",
    'yellow':  "./assets/amarelo.png",
    'green':   "./assets/verde.png",
    'off': './assets/desligado.png'
} 

const exibColor = (event) => {
    if(event.target.id === 'red') {
        clearInterval(interval)
        image.setAttribute('src', colors.red)
   } else if(event.target.id === 'yellow') {
        clearInterval(interval)
        image.setAttribute('src', colors.yellow)
   } else if (event.target.id === 'green') {
        clearInterval(interval)
        image.setAttribute('src', colors.green)
   } else if(event.target.id === 'off') {
    clearInterval(interval)
        image.setAttribute('src', colors.off)
   }
}
const automatic = () => {
    clearInterval(interval)
    interval = setInterval(changColor, 600)
}

const changColor = () => {
    let imageSrc = image.getAttribute('src')    
    if(imageSrc === colors.red)  {
       image.setAttribute('src', colors.yellow)
    } else if (imageSrc === colors.yellow) {
       image.setAttribute('src', colors.green)
    } else if (imageSrc === colors.yellow) {
       image.setAttribute('src', colors.red )
    } else {
       image.setAttribute('src', colors.red )
    }
}
buttons.addEventListener('click', exibColor)
auto.addEventListener('click', automatic)







