const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = 640

const catcherImg = new Image()
catcherImg.src = './img/catcher.png'

class Catcher {
    constructor() {
        this.position = {
            x: 60,
            y: 600
        }
        this.width = 200,
        this.height = 50
        this.acceleration = 10
    }
    draw () {
        // c.fillRect(this.position.x, this.position.y, this.width, this.height)
        c.drawImage(catcherImg, this.position.x, this.position.y)
    }
    moveRight() {
        if (this.position.x >= 1200) {
            this.position.x
        }
        else{
            this.position.x += this.acceleration
        }
        this.draw()
    }
    moveLeft() {
        if (this.position.x <= 60) {
            this.position.x
        }
        else{
            this.position.x -= this.acceleration
        }
        this.draw()
    }
}





class Langs {
    constructor({x,y, velocity, image}) {
        this.position = {
            x,
            y
        }
        this.width = 20,
        this.height = 20,
        this.velocity = velocity
        this.image = image
    }
    draw() {
        // c.fillRect(this.position.x, this.position.y, this.width, this.height)
        c.drawImage(this.image, this.position.x, this.position.y)
    }
    
    fall() {
        this.position.y += this.velocity
        this.draw()
    }
    eventL() {
        if (this.position.x < catcher.position.x + catcher.width &&
            this.position.x + this.width > catcher.position.x &&
            this.position.y < catcher.position.y + catcher.height &&
            this.position.y + this.height > catcher.position.y) 
            {
            console.log('ALO')
            let score = document.querySelector('#score')
            rls += (1 / 28)
            // console.log(Math.floor(rls))
            // score.textContent = rls
            score.textContent = Math.floor(rls)
        }
    }
}

function aniamte () {
    requestAnimationFrame(aniamte)
    c.clearRect(0,0, canvas.width, canvas.height)
    Levels.forEach((lang => {
        lang.fall()
        lang.eventL()
    }))


    catcher.moveLeft()
    catcher.moveRight()

}

function imageCreator (e) {
    let img = new Image()
    img.src = `./img/${e}.png`
    return img
}
let rls = 0

const Levels = []

function langCreator () {
        let randX = Math.floor(Math.random() * 1300) + 60
        let randY = Math.floor(Math.random() * -100) + 0
        let rVelo = Math.floor(Math.random() * 3) + 0.5
        let forCre = Math.floor(Math.random() * 6) + 0
        let imageUs = imageCreator(forCre)
     
        const lang = new Langs({
            x: randX,
            y: randY,
            velocity: rVelo,
            image: imageUs
        })
        Levels.push(lang)
     
}


let interval = setInterval(langCreator, 1000)


const catcher = new Catcher()

aniamte()


addEventListener('keydown', ({keyCode}) => {
    if (keyCode == 39) {
        catcher.moveRight()
    }else if(keyCode == 37) {
        catcher.moveLeft()
    }
})