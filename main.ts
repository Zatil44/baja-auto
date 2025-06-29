input.onButtonPressed(Button.A, function () {
    // Robot bergerak ke depan
    pins.digitalWritePin(DigitalPin.P8, 1) // Motor A
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P13, 1) // Motor B
    pins.digitalWritePin(DigitalPin.P14, 0)
})

input.onButtonPressed(Button.B, function () {
    // Bunyi buzzer dan nyalakan LED
    music.playTone(262, music.beat(BeatFraction.Whole))
    pins.digitalWritePin(DigitalPin.P1, 1) // LED ON
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P1, 0) // LED OFF
})

input.onButtonPressed(Button.AB, function () {
    // Henti robot
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
})
