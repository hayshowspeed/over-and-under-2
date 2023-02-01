controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    let stop = 0
    jump = stop
    master_car.vy = -200
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`spikes`, function (sprite, location) {
    game.over(false)
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`spikes-up`, function (sprite, location) {
    game.over(false)
    music.play(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`acid`, function (sprite, location) {
    game.over(false)
    game.over(true)
    music.play(music.stringPlayable("G B A G C5 D A B ", 120), music.PlaybackMode.UntilDone)
})
let jump = 0
let master_car: Sprite = null
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
