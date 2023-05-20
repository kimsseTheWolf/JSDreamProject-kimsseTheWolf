function applyBlueGradientColor(id_name){
    // apply the background color to the blue
    document.getElementById(id_name).style.backgroundImage = "linear-gradient(#9DDAF9, #8AAADB)"
    console.log("Item applied color to blue gradient")
}

function applyGradientColor(id_name, colorA, colorB) {
    document.getElementById(id_name).style.backgroundImage = "linear-gradient("+colorA+","+colorB+")"
}