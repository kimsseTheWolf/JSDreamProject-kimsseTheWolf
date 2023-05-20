//Global Variables definition
let bigMenu = false
document.getElementById('navigate-bar').style.display = 'flex'
document.getElementById('full-menu-overlay').style.display = 'none'

function applyBlueGradientColor(id_name){
    // apply the background color to the blue
    document.getElementById(id_name).style.backgroundImage = "linear-gradient(#9DDAF9, #8AAADB)"
    console.log("Item applied color to blue gradient")
}

function applyGradientColor(id_name, colorA, colorB) {
    document.getElementById(id_name).style.backgroundImage = "linear-gradient("+colorA+","+colorB+")"
}

function applyThinButtonColor(id_name, normalColor, hoverColor) {
    document.getElementById(id_name).style.backgroundColor = normalColor
    document.getElementById(id_name).onmouseover = function() {
        document.getElementById(id_name).style.backgroundColor = hoverColor
    }
    document.getElementById(id_name).onmouseout = function () {
        document.getElementById(id_name).style.backgroundColor = normalColor
    }
}

function triggerBigMenu() {
    bigMenu = !bigMenu
    if (bigMenu) {
        // show the big menu
        document.getElementById('navigate-bar').style.display = 'none'
        document.getElementById('full-menu-overlay').style.display = 'flex'
    }
    else {
        // hide the big menu
        document.getElementById('navigate-bar').style.display = 'flex'
        document.getElementById('full-menu-overlay').style.display = 'none'
    }
}