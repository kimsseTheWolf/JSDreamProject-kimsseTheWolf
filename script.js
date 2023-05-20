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