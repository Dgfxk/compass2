let degrees = 0
basic.forever(function on_forever() {
    
    degrees = input.compassHeading()
    if (degrees < 45) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            `)
    } else if (degrees < 90) {
        basic.showLeds(`
            # # # # #
            . # # # #
            . . # # #
            . # . # #
            # . . . #
            `)
    } else if (degrees < 135) {
        basic.showLeds(`
            . . # . .
            . . # # .
            # # # # #
            . . # # .
            . . # . .
            `)
    } else if (degrees < 180) {
        basic.showLeds(`
            # . . . #
            . # . # #
            . . # # #
            . # # # #
            # # # # #
            `)
    } else if (degrees < 225) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . # # # .
            . . # . .
            `)
    } else if (degrees < 270) {
        basic.showLeds(`
            # . . . #
            # # . # .
            # # # . .
            # # # # .
            # # # # #
            `)
    } else if (degrees < 315) {
        basic.showLeds(`
            . . # . .
            . # # . .
            # # # # #
            . # # . .
            . . # . .
            `)
    } else if (degrees < 360) {
        basic.showLeds(`
            # # # # #
            # # # # .
            # # # . .
            # # . # .
            # . . . #
            `)
    } else {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            `)
    }
    
})
basic.showString("COMPASS")
