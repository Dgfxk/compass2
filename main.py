degrees = 0

def on_forever():
    global degrees
    degrees = input.compass_heading()
    if degrees < 45:
        basic.show_leds("""
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            """)
    elif degrees < 90:
        basic.show_leds("""
            # # # # #
            . # # # #
            . . # # #
            . # . # #
            # . . . #
            """)
    elif degrees < 135:
        basic.show_leds("""
            . . # . .
            . . # # .
            # # # # #
            . . # # .
            . . # . .
            """)
    elif degrees < 180:
        basic.show_leds("""
            # . . . #
            . # . # #
            . . # # #
            . # # # #
            # # # # #
            """)
    elif degrees < 225:
        basic.show_leds("""
            . . # . .
            . . # . .
            # # # # #
            . # # # .
            . . # . .
            """)
    elif degrees < 270:
        basic.show_leds("""
            # . . . #
            # # . # .
            # # # . .
            # # # # .
            # # # # #
            """)
    elif degrees < 315:
        basic.show_leds("""
            . . # . .
            . # # . .
            # # # # #
            . # # . .
            . . # . .
            """)
    elif degrees < 360:
        basic.show_leds("""
            # # # # #
            # # # # .
            # # # . .
            # # . # .
            # . . . #
            """)
    else:
        basic.show_leds("""
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            """)
basic.forever(on_forever)

basic.show_string("COMPASS")