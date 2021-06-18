function change1(){
    var name = document.getElementById("player")
    if(name.innerHTML = "Hide Player"){
name.innerHTML = "Show Player"
document.getElementById("PlayerToggler").onclick = change2;

    }
    
}function change2(){
    var name = document.getElementById("player")
    if(name.innerHTML = "Show Player"){
name.innerHTML = "Hide Player"
document.getElementById("PlayerToggler").onclick = change1;

    }
    
}

// keep paragraph id player
// kep button id PlayerToggler