namespace SpriteKind {
    export const littleguy = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy(effects.smiles, 100)
    music.baDing.play()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.littleguy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 100)
    music.baDing.play()
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy(effects.hearts, 100)
    music.baDing.play()
    info.changeLifeBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.halo, 100)
    music.baDing.play()
    info.changeScoreBy(-10)
    info.changeLifeBy(-3)
})
let big_boy_hearts_back_yum: Sprite = null
let mega_killer: Sprite = null
let bee: Sprite = null
let clover: Sprite = null
scene.setBackgroundImage(assets.image`background`)
let hero = sprites.create(assets.image`hero`, SpriteKind.Player)
animation.runImageAnimation(
hero,
[img`
    ..................
    .....4444.........
    ....444444........
    ...44444444.......
    .114f444f44.111...
    .1144444444.111...
    .114414144e.111...
    111.441444e11111..
    111114444e111111..
    .1444dddd4444e1...
    14444dddd44444e1..
    .1111dddd4e1111...
    .....dddd44e......
    .....ddddd44e.....
    .....dddddd44e....
    ......44e.eeee....
    .......ee...ee....
    .......4e...4e....
    `,img`
    .....4444.........
    ....444444........
    ...44444444.......
    ...4f444f44.......
    ...44444444.......
    ...4414144e.......
    ....441444e.......
    ....14444e1.......
    ..444dddd4444e....
    .4444dddd44444e1..
    11111dddd4e11111..
    11111dddd44e11111.
    1111.ddddd44e1111.
    1....dddddd44e.11.
    ......44e.eeee....
    .......ee...ee....
    .......4e...4e....
    ..................
    `],
500,
true
)
controller.moveSprite(hero)
hero.setStayInScreen(true)
info.setLife(5)
let SPAWNSPED = 700
game.setGameOverMessage(false, "trash :l")
game.onUpdateInterval(SPAWNSPED, function () {
    clover = sprites.createProjectileFromSide(img`
        . . . . . . . . . . 
        . . . . 5 5 . . . . 
        . . . 5 1 5 5 . . . 
        . . . 5 5 1 5 . . . 
        . . . 5 1 5 5 . . . 
        . . . . 5 5 . . . . 
        . . . . 6 6 . . . . 
        . 7 7 7 6 7 7 . 7 . 
        . . 7 7 7 7 7 7 . . 
        . 7 7 7 7 7 7 7 7 . 
        `, randint(-50, 50), randint(-50, 50))
    bee = sprites.createProjectileFromSide(img`
        . . . b b b . . . . 
        . . b a a a b . . . 
        . b 2 a a a a 3 b . 
        . a a 2 a a 2 a a b 
        a a 1 a 2 2 a 1 a a 
        a a 1 a a a a 1 a a 
        a a a a a a a a a a 
        c a a a 2 2 a a a a 
        . c a 2 a a 2 a c . 
        . . c c c c c c . . 
        `, randint(-50, 50), randint(-50, 50))
    bee.setKind(SpriteKind.littleguy)
})
game.onUpdateInterval(7500, function () {
    mega_killer = sprites.createProjectileFromSide(img`
        ......5555555555555555........
        .....555555222222222225.......
        .....5555fff22222fff2225......
        ....5555222ff222ff222225......
        ....55552222ff22f2222225......
        ...55555222f2f22f2f222225.....
        ...55552222f222222f222225.....
        ..555a2222222222222222225.....
        ..555a222222ffffff2222225.....
        ..555aa2222f111111f222225.....
        .55555a222f11333331f22225..22.
        .a2255aa2f313fffff13f225..2222
        .a22255aa2fff22222ff22....2222
        .a22225e2222222222222e...22222
        .a22222aeee222222222e222222222
        .a22222a222e2222222e2222222222
        .aa2222a222e2222222e2222222222
        ..aa2aa222eee22222eee22a22222.
        ...aaaeeeeeeeeeeeeeeeeeeaaaa..
        ......a222eee22222eee222......
        ......a2222e2222222e2222......
        ......a22222222222222222......
        ......a22222222222222222......
        ......a22222222222222222......
        .......a22222222f222222.......
        .......ee222222222222ee.......
        .......aaeeeeeeeeeeee22.......
        .....aa222222eeeeeea22222.....
        ...a22222222......a222222222..
        ...a2222222........a22222222..
        `, randint(-50, 50), randint(-50, 50))
    mega_killer.setKind(SpriteKind.Enemy)
})
forever(function () {
	
})
game.onUpdateInterval(10000, function () {
    big_boy_hearts_back_yum = sprites.createProjectileFromSide(img`
        . . . f f f . . . f f f . . . . 
        . . f 3 3 3 f . f 3 3 3 f . . . 
        . f 3 2 2 2 3 f 3 2 2 2 3 f . . 
        f 3 2 2 2 2 2 3 2 2 2 2 2 3 f . 
        f 2 2 2 f 2 2 2 2 2 f 2 2 2 f . 
        f 2 2 2 2 2 2 2 2 2 2 2 2 2 f . 
        . f a 2 2 2 2 2 2 2 2 2 a f . . 
        . . f 2 f f f f f f f 2 f . . . 
        . . f a 2 f 1 1 1 f 2 a f . . . 
        . . . f 2 2 f 3 f 2 2 f . . . . 
        . . . f a 2 2 f 2 2 a f . . . . 
        . . . . f 2 2 2 2 2 f . . . . . 
        . . . . f a 2 2 2 a f . . . . . 
        . . . . . f a 2 a f . . . . . . 
        . . . . . . f a f . . . . . . . 
        . . . . . . . f . . . . . . . . 
        `, randint(-50, 50), randint(-50, 50))
    big_boy_hearts_back_yum.setKind(SpriteKind.Food)
})
