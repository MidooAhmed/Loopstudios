document.querySelector('.menu-icon').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('show');
});

let dark = document.getElementById("dark");
let text = document.createTextNode("white mode")
dark.onclick = function () {
    document.body.classList.toggle("dark-mode")
    
}
let tex = document.getElementById("textt");

function HideShow() {
    
    let div = document.getElementById("hide-cards");

    if (div.style.display === "none") {
        div.style.display = "flex";
        div.style.width = "100%";
        div.style.justifyContent = "center";
        div.style.flexDirection= "row";
        div.style.alignItems = "center"
    }else{
        div.style.display = "none";
    }
}

// function HideShow() {
//     let div = document.getElementById("hide-cards");

//     if (div.style.display === "none") {
//         div.style.display = "flex";
//         div.style.width = "100%";
//         div.style.justifyContent = "center";
//     } else {
//         div.style.display = "none";
//     }
// }