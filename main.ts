input.touchD2.onEvent(ButtonEvent.Click, function () {
    pixel.setColor(0x0000ff)
    keyboard.key("d", KeyboardKeyEvent.Press)
    pause(100)
    keyboard.clearAllKeys()
})
input.touchD1.onEvent(ButtonEvent.Click, function () {
    pixel.setColor(0xff8000)
    pause(100)
    keyboard.key("s", KeyboardKeyEvent.Press)
    keyboard.clearAllKeys()
})
input.touchD0.onEvent(ButtonEvent.Click, function () {
    pixel.setColor(0xff0000)
    keyboard.key("a", KeyboardKeyEvent.Press)
    pause(100)
    keyboard.clearAllKeys()
})
input.touchD0.calibrate()
input.touchD1.calibrate()
input.touchD2.calibrate()
