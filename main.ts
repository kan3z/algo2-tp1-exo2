input.onButtonPressed(Button.A, function () {
    led.unplot(posX, PosY)
    posX += -1
    if (posX < 0) {
        posX = 4
    }
    led.plot(posX, PosY)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(posX, PosY)
    posX += 1
    if (posX >= 5) {
        posX = 0
    }
    led.plot(posX, PosY)
})
let PosY = 0
let posX = 0
posX = 0
PosY = 0
let direction = 1
led.plot(posX, PosY)
basic.forever(function () {
    basic.pause(200)
    led.unplot(posX, PosY)
    PosY += direction
    led.plot(posX, PosY)
    if (PosY == 4) {
        direction = -1
    }
    if (PosY == 0) {
        direction = 1
    }
})
