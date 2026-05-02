let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // changes background black
        document.querySelector("body").style.backgroundColor = "#242424";

        // changes text to white
        document.querySelector("h1").style.color = "white";
        document.querySelector("p").style.color = "white";
        document.querySelector(".italicized").style.color = "white";
        document.querySelector("ol").style.color = "white";

        // changes image
        document.querySelector("img").setAttribute("src", "byui-logo-dark.png");
    } else {
        // reverts background back to white
        document.querySelector("body").style.backgroundColor = "white";

        // reverts text back to black
        document.querySelector("h1").style.color = "black";
        document.querySelector("p").style.color = "black";
        document.querySelector(".italicized").style.color = "black";
        document.querySelector("ol").style.color = "black";

        // changes image
        document.querySelector("img").setAttribute("src", "byui-logo-blue.webp");
    }
}           
                    