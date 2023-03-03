var canvass = new fabric.Canvas("f")
var width_block = 50
var height_block = 50
var y_player = 20
var x_player = 20
var player = "" 
var block =""
function draw_player() {
    fabric.Image.fromURL("sus.png",function(img){
        player = img
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
    if(vasci == 90){
        draw_block("diamonds.jpg")

    }
}
