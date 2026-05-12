// getting the element we want (could also use querySelector)
let menuButton = document.getElementsByClassName("menu-btn")[0];
// checking to see if it worked
console.log(menuButton);

// event listener
menuButton.addEventListener("click", handleMenuButtonClick); // don't add () to the function or else it will run right away

// handle is a common javascript thing
function handleMenuButtonClick(event) {
    console.log(event);

    // toggle on/off the menu display

    // grab the nav from the DOM
    let navigationMenu = document.querySelector("nav");
    // toggle the .hide class on/off
    navigationMenu.classList.toggle("hide");
    
    menuButton.classList.toggle("change");
}

