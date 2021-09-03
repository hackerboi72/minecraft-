var canvas = new fabric.Canvas('myCanvas');
var blockimagewidth = 30 
var blockimageheight = 30 
var playerx = 10 
var playery = 10 
var player_object = ""
function player_update() {
    fabric.Image.fromURL("player.png", function(img) {
        player_object = img
        player_object.scaleToWidth(150)
        player_object.scaleToHeight(140)
        player_object.set({
            top: playery, left: playerx
        })
        canvas.add(player_object)
    })
}
function new_image(get_image) {
    fabric.Image.fromURL(get_image, function(img) {
        block_object = img
        block_object.scaleToWidth(blockimagewidth)
        block_object.scaleToHeight(blockimageheight)
        block_object.set({
            top: playery, left: playerx
        })
        canvas.add(block_object)
    })
}
window.addEventListener("keydown", my_keydown)
function my_keydown(e) {
    var keypressed = e.keyCode
    if (keypressed == "80" && e.shiftKey == true) {
        blockimagewidth = blockimagewidth + 10
        blockimageheight = blockimageheight + 10 
        document.getElementById("current_width").innerHTML = blockimagewidth
        document.getElementById("current_height").innerHTML = blockimageheight
    }
    if (keypressed == "77" && e.shiftKey == true) {
        blockimagewidth = blockimagewidth - 10
        blockimageheight = blockimageheight - 10 
        document.getElementById("current_width").innerHTML = blockimagewidth
        document.getElementById("current_height").innerHTML = blockimageheight
    }
    if (keypressed == "37") {
        left(); 
    }
    if (keypressed == "39") {
        right(); 
    }
    if (keypressed == "38") {
        up(); 
    }
    if (keypressed == "40") {
        down(); 
    }
    if (keypressed == "87") {
        console.log("w")
        new_image('wall.jpg')
    }
    if (keypressed == "71") {
        console.log("g")
        new_image('ground.png')
    }
    if (keypressed == "76") {
        console.log("l")
        new_image('light_green.png')
    }
    if (keypressed == "84") {
        console.log("t")
        new_image('trunk.jpg')
    }
    if (keypressed == "82") {
        console.log("r")
        new_image('roof.png')
    }
    if (keypressed == "89") {
        console.log("y")
        new_image('yellow_wall.png')
    }
    if (keypressed == "68") {
        console.log("d")
        new_image('dark_green.png')
    }
    if (keypressed == "67") {
        console.log("c")
        new_image('cloud.jpg')
    }
    if (keypressed == "85") {
        console.log("u")
        new_image('unique.png')
    }
}
function up() {
    if (playery >= 0) {
        playery = playery - blockimageheight; 
        canvas.remove(player_object) 
        player_update();
    }
}
function down() {
    if (playery <= 400) {
        playery = playery + blockimageheight; 
        canvas.remove(player_object) 
        player_update();
    } 
} 
function left() {
    if (playerx >= 0) {
        playerx = playerx - blockimagewidth;  
        canvas.remove(player_object) 
        player_update();
    }
}
function right() {
    if (playerx <= 900) {
        playerx = playerx + blockimagewidth;  
        canvas.remove(player_object) 
        player_update();
    }
}