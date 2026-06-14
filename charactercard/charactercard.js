// My character
const characterCard = {
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 5,
    health: 60,
    image: "snortleblat.png",
    attacked: function() {
        if (this.health > 0) {
            this.health -= 20;
        } else {
            alert("Your character has died.");
        }
    },
    levelUp: function() {
        this.level++;
    }
};

document.querySelector(".card").innerHTML =
`
<img class="image" src="${characterCard.image}" alt="">
<p class="name">${characterCard.name}</p>
<div class="stats">
    <p>Class: ${characterCard.class}</p>
    <p class='level'>Level: ${characterCard.level}</p>
    <p class='health'>Health: ${characterCard.health}</p>
</div>
<div class="buttons">
    <button class="attack">Attack</button>
    <button class="level-up">Level Up</button>
</div>
`;

function updateStats() {
    document.querySelector('.level').textContent = `Level: ${characterCard.level}`;
    document.querySelector('.health').textContent = `Health: ${characterCard.health}`;
}

// listeners
document.querySelector(".attack").addEventListener("click", function () {
    characterCard.attacked();
    updateStats();
    
});

document.querySelector(".level-up").addEventListener("click", function () {
    characterCard.levelUp();
    updateStats();
});