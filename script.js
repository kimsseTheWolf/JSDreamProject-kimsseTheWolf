//Global Variables definitions
let bigMenu = false

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
        let elements = document.querySelectorAll('#menu-overlay-item')
        for (let i = 0; i < elements.length; i++){
            elements[i].style.display = 'flex'
        }
        document.getElementById('full-menu-overlay').style.width = '100vh'
    }
    else {
        // hide the big menu
        document.getElementById('full-menu-overlay').style.width = '0'
        let elements = document.querySelectorAll('#menu-overlay-item')
        for (let i = 0; i < elements.length; i++){
            elements[i].style.display = 'none'
        }
        document.getElementById('navigate-bar').style.display = 'flex'
    }
}

function initializeBigMenu() {
    document.getElementById('navigate-bar').style.display = 'flex'
    document.getElementById('full-menu-overlay').style.width = '0'
    let elements = document.querySelectorAll('#menu-overlay-item')
    for (let i = 0; i < elements.length; i++){
        elements[i].style.display = 'none'
    }
}
