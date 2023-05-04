controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (true) {
        u_cant_hit_double_on_up_arrow = 1
    } else {
    	
    }
})
statusbars.onDisplayUpdated(StatusBarKind.Health, function (status, image2) {
    status_bar_list = statusbars.allOfKind(StatusBarKind.Health)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    let stop = 0
    left = stop
    master_car.vy = -200
})
info.onCountdownEnd(function () {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`spikes`, function (sprite, location) {
    game.over(false)
    game.over(true)
})
info.onScore(100, function () {
    info.setScore(0)
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    statusbar.setColor(7, 2)
    statusbar.setBarBorder(1, 13)
    statusbar.setStatusBarFlag(StatusBarFlag.LabelAtEnd, true)
    statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    statusbar.setStatusBarFlag(StatusBarFlag.IgnoreValueEvents, true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`spikes-up`, function (sprite, location) {
    game.over(false)
    music.play(music.createSoundEffect(WaveShape.Sine, 3716, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    game.over(false)
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
let left = 0
let status_bar_list: StatusBarSprite[] = []
let u_cant_hit_double_on_up_arrow = 0
let master_car: Sprite = null
let _true = 0
let level = 0
let when_u_get_too_the_end = 0
let statusbar: StatusBarSprite = null
statusbar = statusbars.create(20, 4, StatusBarKind.Health)
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
game.setGameOverMessage(true, "u god")
game.showLongText("hi there u got here nice", DialogLayout.Bottom)
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
statusbar.value = 1
scroller.setLayerImage(scroller.BackgroundLayer.Layer2, assets.image`background`)
scaling.scaleByPixels(master_car, 20, ScaleDirection.Horizontally, ScaleAnchor.Middle)
scaling.scaleByPercent(master_car, 30, ScaleDirection.Vertically, ScaleAnchor.Middle)
let myDart = darts.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . 8 . . . . . . . 
    . 4 4 4 4 4 4 4 5 5 5 5 . . . . 
    . 4 4 4 4 4 4 4 8 5 5 5 . . . . 
    . 4 4 4 4 4 4 4 8 5 5 5 . . . . 
    . 4 4 4 4 4 4 4 5 5 5 5 . . . . 
    . . . . . . . . 8 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Projectile)
controller.moveSprite(myDart, 20, 50)
color.setColor(1, color.rgb(255, 255, 255))
color.startFadeFromCurrent(color.originalPalette)
controller.startLightAnimation(light.sparkleAnimation, 1000)
myDart.throwDart()
myDart.controlWithArrowKeys(true)
tileUtil.loadConnectedMap(MapConnectionKind.Door1)
myDart.setTrace(true)
myDart.pow = -33
myDart.powerRate += 30
info.startCountdown(20)
music.play(music.createSong(hex`0078000408020500001c00010a006400f401640000040000000000000000000000000005000004300000000400012204000800012408000c0001201c002000012520002400012024002800012528002c0001202c003000012703001c0001dc00690000045e01000400000000000000000000056400010400031e0004000800011908000c0001190c001000011910001400011914001800011907001c00020a006400f4016400000400000000000000000000000000000000033c0018001c0001191c002000011920002400011924002800011928002c0001192c003000011930003400011934003800011938003c0001193c004000011908001c000e050046006603320000040a002d000000640014000132000201000230000c001000012510001400012214001800012218001c00012430003400012034003800012438003c0001293c004000012409010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8000c0010001100010a24002500010a`), music.PlaybackMode.LoopingInBackground)
game.onUpdate(function () {
    if (true) {
        projectile = controller.player2.isPressed(ControllerButton.A)
    } else {
        add_them = controller.player2.dx()
    }
})
