forever(function () {
    makerController.player1.setAnalog(ArcadeAnalogButton.LeftRight, input.acceleration(Dimension.X))
    makerController.player1.setAnalog(ArcadeAnalogButton.DownUp, input.acceleration(Dimension.Y))
    if (input.acceleration(Dimension.X) >= 500) {
        light.showRing(
        `black black black black black black red red red black`
        )
    } else if (input.acceleration(Dimension.X) < -500) {
        light.showRing(
        `black red red red black black black black black black`
        )
    } else if (input.acceleration(Dimension.Y) >= 500) {
        light.showRing(
        `red black black black black black black black black red`
        )
    } else if (input.acceleration(Dimension.Y) < -500) {
        light.showRing(
        `black black black black red red black black black black`
        )
    } else {
        light.showRing(
        `black black black black black black black black black black`
        )
    }
})
