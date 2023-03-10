var canvass = new fabric.Canvas("f")
var callcanvass = document.getElementById("f")
var canvass2d = callcanvass.getContext ("2d")
var width_block = 50
var height_block = 50
var y_player = 20
var x_player = 20
var player = "" 
var block =""

function draw_player() {
    fabric.Image.fromURL("sus.png",function(Img){
        player = Img
        player.scaleToWidth(260)
        player.scaleToHeight(130)
        player.set({
            top:y_player,left:x_player
        })
        canvass.add(player)
    }
    )
}
draw_player()
function draw_block(imgblock) {
    fabric.Image.fromURL(imgblock,function(img){
        block = img
        block.scaleToHeight(height_block)
        block.scaleToWidth(width_block)
        block.set({
            top:y_player,left:x_player
        })
        canvass.add(block)
    }
    )

}
window.addEventListener("keydown",movee)
function movee(u){
    vasci = u.keyCode
    console.log(vasci)
    if(vasci == 40){
        down()
    }
    if(vasci == 38){
        up()
    }
    if(vasci == 37){
        left()
    }
    if(vasci == 39){
        right()
    }
    if(vasci == 90){
        draw_block("diamonds.jpg")

    }
    if(vasci == 88){
        draw_block("madera.jpg")

    }
    if(vasci == 67){
        draw_block("pasto.jpg")

    }
    if(vasci == 86){
        draw_block("piedra.jpg")

    }
    if(vasci == 66){
        draw_block("roka.jpg")

    }
    if(vasci == 13){
        draw_block("la_rokanice.jpg")

    }
}
function down() {
    if(y_player < 550){
        y_player += 10
        canvass.remove(player)
        draw_player()
    }
}
function up() {
    if(y_player > 10){
        y_player -= 10
        canvass.remove(player)
        draw_player()
    }
}
function left() {
    if(x_player > 10){
        x_player -= 10
        canvass.remove(player)
        draw_player()
    }
}
function right() {
    if(x_player < 750){
        x_player += 10
        canvass.remove(player)
        draw_player()
    }
}


