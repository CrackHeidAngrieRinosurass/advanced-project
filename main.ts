function alarm () {
    basic.showIcon(IconNames.Angry)
    music.startMelody(music.builtInMelody(Melodies.Baddy), MelodyOptions.Once)
}
input.onGesture(Gesture.Shake, function () {
    radio.sendString("THIEF!")
    alarm()
})
radio.setGroup(1)
