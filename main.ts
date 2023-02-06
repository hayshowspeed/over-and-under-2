controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (true) {
        u_cant_hit_double_on_up_arrow = 1
    } else {
    	
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`spikes`, function (sprite, location) {
    game.over(false)
    game.over(true)
})
info.onScore(100, function () {
    info.setScore(0)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`spikes-up`, function (sprite, location) {
    game.over(false)
    music.play(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    game.over(true)
})
controller.player2.onEvent(ControllerEvent.Connected, function () {
    _true = 0
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`acid`, function (sprite, location) {
    game.over(false)
    game.over(true)
    music.play(music.stringPlayable("G B A G C5 D A B ", 120), music.PlaybackMode.UntilDone)
})
let add_them = 0
let projectile = false
let u_cant_hit_double_on_up_arrow = 0
let _true = 0
let level = 0
let when_u_get_too_the_end = 0
let statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.setLabel("HP")
statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
let when_u_get_to_the_end_of_a_level_u_go_too_the_next_one = 2
when_u_get_to_the_end_of_a_level_u_go_too_the_next_one = 3
when_u_get_to_the_end_of_a_level_u_go_too_the_next_one = 4
when_u_get_too_the_end += 1
let set_level = 1
set_level = 2
set_level = 3
set_level = 4
scene.setBackgroundColor(8)
if (Math.round(7) > level) {
	
} else {
	
}
pauseUntil(() => true)
let start = 0
_true += 1
console.log("100")
console.logValue("-20", -40)
info.changeScoreBy(0)
info.changeLifeBy(8)
let coin = randint(0, 10)
let map = 0
tiles.setTilemap(tilemap`level0`)
tiles.setTilemap(tilemap`level2`)
tiles.setTilemap(tilemap`level4`)
tiles.setTilemap(tilemap`level5`)
tiles.setTilemap(tilemap`level0`)
scene.setBackgroundImage(assets.image`background`)
let master_car = sprites.create(assets.image`truck3`, SpriteKind.Player)
master_car.ay = 500
master_car.vx = 100
scene.cameraFollowSprite(master_car)
animation.runImageAnimation(
master_car,
assets.animation`truck3 animated`,
100,
true
)
game.setGameOverMessage(false, "u lose")
game.setGameOverMessage(true, "u god")
game.showLongText("there still bugs in joy mate", DialogLayout.Full)
let text_list = [
"wellcome to the" + "map",
String.fromCharCode(100),
parseFloat("134"),
"this".includes("cars")
]
scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections)
scroller.scrollBackgroundWithSpeed(-70, -50)
scroller.setCameraScrollingMultipliers(2, 4)
controller.moveSprite(master_car, 100, 100)
level = 10
game.onUpdate(function () {
    if (true) {
        projectile = controller.player2.isPressed(ControllerButton.A)
    } else {
        add_them = controller.player2.dx()
    }
})
