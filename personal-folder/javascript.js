// create the books with all of their information as objects
const books = [
  {
    title: "Elantris",
    description:
      "A fallen magical city, a broken prince, and a woman trying to uncover the mystery behind a devastating transformation.",
    rating: 4.3,
    imgSrc: "images/elantris.jpg",
    imgAlt: "Cover of Elantris by Brandon Sanderson",
    tags: ["Cosmere", "Fantasy", "Magic", "Standalone"]
  },
  {
    title: "Mistborn: The Final Empire",
    description:
      "A young street thief joins a rebellion against an immortal ruler while discovering incredible powers within herself.",
    rating: 4.7,
    imgSrc: "images/mistborn-final-empire.jpg",
    imgAlt: "Cover of Mistborn: The Final Empire by Brandon Sanderson",
    tags: ["Cosmere", "Fantasy", "Heist", "Magic"]
  },
  {
    title: "The Well of Ascension",
    description:
      "The survivors of a fallen empire struggle to build a new world while facing enemies from every direction.",
    rating: 4.6,
    imgSrc: "images/well-of-ascension.jpg",
    imgAlt: "Cover of The Well of Ascension by Brandon Sanderson",
    tags: ["Cosmere", "Fantasy", "Magic", "Mistborn"]
  },
  {
    title: "The Hero of Ages",
    description:
      "The conclusion of the original Mistborn trilogy as heroes race to prevent the destruction of their world.",
    rating: 4.8,
    imgSrc: "images/hero-of-ages.jpg",
    imgAlt: "Cover of The Hero of Ages by Brandon Sanderson",
    tags: ["Cosmere", "Fantasy", "Epic", "Mistborn"]
  },
  {
    title: "Warbreaker",
    description:
      "Two sisters, a mysterious god, and a forgotten power collide in a world where color and magic are connected.",
    rating: 4.5,
    imgSrc: "images/warbreaker.jpg",
    imgAlt: "Cover of Warbreaker by Brandon Sanderson",
    tags: ["Cosmere", "Fantasy", "Magic", "Standalone"]
  },
  {
    title: "The Way of Kings",
    description:
      "A sweeping epic following warriors, kings, and a forgotten magical order on the storm-ravaged world of Roshar.",
    rating: 4.8,
    imgSrc: "images/the-way-of-kings.jpg",
    imgAlt: "Cover of The Way of Kings by Brandon Sanderson",
    tags: ["Cosmere", "Epic Fantasy", "Stormlight Archive"]
  },
  {
    title: "Words of Radiance",
    description:
      "The heroes of Roshar continue their fight as ancient powers begin returning to the world.",
    rating: 4.9,
    imgSrc: "images/words-of-radiance.jpg",
    imgAlt: "Cover of Words of Radiance by Brandon Sanderson",
    tags: ["Cosmere", "Epic Fantasy", "Stormlight Archive"]
  },
  {
    title: "Oathbringer",
    description:
      "A war between nations expands as forgotten truths about the past begin to surface.",
    rating: 4.8,
    imgSrc: "images/oathbringer.jpg",
    imgAlt: "Cover of Oathbringer by Brandon Sanderson",
    tags: ["Cosmere", "Epic Fantasy", "Stormlight Archive"]
  },
  {
    title: "Rhythm of War",
    description:
      "The conflict on Roshar reaches a new stage as heroes search for ways to survive an impossible war.",
    rating: 4.7,
    imgSrc: "images/rhythm-of-war.jpg",
    imgAlt: "Cover of Rhythm of War by Brandon Sanderson",
    tags: ["Cosmere", "Epic Fantasy", "Stormlight Archive"]
  },
  {
    title: "The Alloy of Law",
    description:
      "A lawman with magical abilities returns to the city where old-world magic meets modern technology.",
    rating: 4.4,
    imgSrc: "images/alloy-of-law.jpg",
    imgAlt: "Cover of The Alloy of Law by Brandon Sanderson",
    tags: ["Cosmere", "Mistborn", "Western", "Fantasy"]
  },
  {
    title: "Shadows of Self",
    description:
      "A detective with supernatural abilities investigates a conspiracy threatening a growing civilization.",
    rating: 4.5,
    imgSrc: "images/shadows-of-self.jpg",
    imgAlt: "Cover of Shadows of Self by Brandon Sanderson",
    tags: ["Cosmere", "Mistborn", "Fantasy", "Mystery"]
  },
  {
    title: "The Bands of Mourning",
    description:
      "A legendary artifact may hold the key to saving the world from a powerful new threat.",
    rating: 4.6,
    imgSrc: "images/bands-of-mourning.jpg",
    imgAlt: "Cover of The Bands of Mourning by Brandon Sanderson",
    tags: ["Cosmere", "Mistborn", "Adventure"]
  },
  {
    title: "The Lost Metal",
    description:
      "The final Wax and Wayne adventure brings major changes to the Mistborn world.",
    rating: 4.7,
    imgSrc: "images/the-lost-metal.jpg",
    imgAlt: "Cover of The Lost Metal by Brandon Sanderson",
    tags: ["Cosmere", "Mistborn", "Fantasy"]
  },
  {
    title: "Skyward",
    description:
      "A young pilot joins an elite group of fighters defending humanity against alien threats.",
    rating: 4.6,
    imgSrc: "images/skyward.jpg",
    imgAlt: "Cover of Skyward by Brandon Sanderson",
    tags: ["Science Fiction", "Young Adult", "Space"]
  },
  {
    title: "Starsight",
    description:
      "A pilot leaves her planet behind and discovers the larger universe beyond humanity's borders.",
    rating: 4.5,
    imgSrc: "images/starsight.jpg",
    imgAlt: "Cover of Starsight by Brandon Sanderson",
    tags: ["Science Fiction", "Young Adult", "Space"]
  },
  {
    title: "Steelheart",
    description:
      "A teenager joins a group determined to stop superpowered beings who have taken control of society.",
    rating: 4.4,
    imgSrc: "images/steelheart.jpg",
    imgAlt: "Cover of Steelheart by Brandon Sanderson",
    tags: ["Science Fiction", "Superheroes", "Young Adult"]
  },
  {
    title: "The Rithmatist",
    description:
      "A student at a magical academy investigates a mystery involving a lost form of powerful chalk-based magic.",
    rating: 4.3,
    imgSrc: "images/the-rithmatist.jpg",
    imgAlt: "Cover of The Rithmatist by Brandon Sanderson",
    tags: ["Fantasy", "Young Adult", "Magic"]
  }
];

function search() {

    let bookQuery = input.value;

    let filteredBooks = books.filter(function(book){
        return (
            book.title.toLowerCase().includes(bookQuery.toLowerCase()) ||
            book.description.toLowerCase().includes(bookQuery.toLowerCase()) ||
            book.tags.find(tag => tag.toLowerCase().includes(bookQuery.toLowerCase()))
        );
    })

    function compareBooks(a,b) {
        if (a.rating > b.rating) {
            return -1;
        } else if (a.rating < b.rating) {
            return 1;
        }
        return 0;
    }

    let sortedBooks = filteredBooks.sort(compareBooks);

    bookContainer.innerHTML = '';

    sortedBooks.forEach(function(book){
        renderBook(book);
    })
}

let bookContainer = document.querySelector('#book-container');
let input = document.querySelector('#search');
let button = document.querySelector('button');

button.addEventListener('click', search);

input.addEventListener('keypress', handleEnter);

function handleEnter(event) {
    if (event.key === 'Enter') {
        search();
    }
}

let randomNum = Math.floor(Math.random() * books.length);
console.log(randomNum);

function tagTemplate(tags) {
    return tags.map((tag)=> `<button>${tag}</button>`).join(' ');
}

function ratingTemplate(rating) {
    let html = `<span
        class="rating"
        role="img"
        aria-label="Rating: ${rating} out of 5"
    >Rating: `;

    for (let i = 1; i <= 5; i++) {
        if (i <= Math.round(rating)) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        } else {
            html += `<span aria-hidden="true" class="icon-empty">☆</span>`;
        }
    }

    html += `</span>`;
    return html;
}

function booksTemplate(book) {
    return `
    <div class="book-card">
        <img 
            src="${book.imgSrc}" 
            alt="${book.imgAlt}"
        >

        <div class="book-content">
            <h2>${book.title}</h2>

            <div class="book-tags">
                ${tagTemplate(book.tags)}
            </div>

            <p>${book.description}</p>

            <p>${ratingTemplate(book.rating)}</p>
        </div>
    </div>
    `;
}

function renderBook(book) {
    let html = booksTemplate(book);
    bookContainer.innerHTML += html;
}

function init() {
    renderBook(books[randomNum]);
}

init();

// make script for the multiple choice trivia on home page