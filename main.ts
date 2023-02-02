controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    left = stop
    master_car.vy = -200
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    left = stop
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
let _true = 0
let stop = 0
let left = 0
let master_car: Sprite = null
info.changeScoreBy(0)
info.changeLifeBy(8)
let map = randint(0, 10)
tiles.setTilemap(tilemap`level1`)
scene.setBackgroundImage(assets.image`background`)
master_car = sprites.create(assets.image`truck3`, SpriteKind.Player)
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
game.showLongText("there still bugs in joy mate", DialogLayout.Full)
game.onUpdate(function () {
    if (true) {
        projectile = controller.player2.isPressed(ControllerButton.A)
    } else {
        add_them = controller.player2.dx()
    }
})
