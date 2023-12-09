const baseUrl = "https://bible-api.com/";
const bibleElement = document.querySelector(".content");
const bibleList = [];
const books = [
    'Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy', 'Joshua', 'Judges', 'Ruth', '1 Samuel', '2 Samuel',
    '1 Kings', '2 Kings', '1 Chronicles', '2 Chronicles', 'Ezra', 'Nehemiah', 'Esther', 'Job', 'Psalm', 'Proverbs',
    'Ecclesiastes', 'Song of Solomon', 'Isaiah', 'Jeremiah', 'Lamentations', 'Ezekiel', 'Daniel', 'Hosea', 'Joel',
    'Amos', 'Obadiah', 'Jonah', 'Micah', 'Nahum', 'Habakkuk', 'Zephaniah', 'Haggai', 'Zechariah', 'Malachi', 'Matthew',
    'Mark', 'Luke', 'John', 'Acts', 'Romans', '1 Corinthians', '2 Corinthians', 'Galatians', 'Ephesians', 'Philippians',
    'Colossians', '1 Thessalonians', '2 Thessalonians', '1 Timothy', '2 Timothy', 'Titus', 'Philemon', 'Hebrews', 'James',
    '1 Peter', '2 Peter', '1 John', '2 John', '3 John', 'Jude', 'Revelation'
];


let bookInput = document.getElementById("book_input");
let chapterInput = document.getElementById("chapter_input");
let verseInput = document.getElementById("verse_input");
let searchInput = document.getElementById("search");

// Add a click event listener to the search button
searchInput.addEventListener("click", () => {
    reset()
    // Check if both book and chapter are provided
    if (bookInput.value && chapterInput.value) {
        const getBible = async () => {
            let url = `${baseUrl}${bookInput.value}${chapterInput.value}`;

            if (verseInput.value) {
                url += `:${verseInput.value}`;
            }

            const response = await fetch(url);

            if (response.ok) {
                const data = await response.json();
                showBible([data]);
                bibleList.push(data);
            }
        };

        // Call getBible to display buttons
        getBible().then(() => {
            console.log('After fetch:', bibleList);
        });
    }
});

// show the reference, and verses
const showBible = books => {
    books.forEach(book => {
        let article = document.createElement("article");
        bibleElement.appendChild(article)

        let centerDiv = document.createElement("div");
        centerDiv.style.textAlign = "center";
        article.appendChild(centerDiv);

        let h2 = document.createElement("h2");
        h2.innerHTML = book.reference
        centerDiv.appendChild(h2);

        book.verses.forEach(verse => {
            let p = document.createElement("p");
            p.innerHTML = `<strong>${verse.verse}:</strong> ${verse.text}`;
            article.appendChild(p);
        });

        bibleElement.appendChild(article)
    });
}

// reset the screen
function reset() {
    bibleElement.innerHTML = '';
}

// create dropdown selector for each book in the bible
books.forEach(book => {
    const option = document.createElement("option");
    option.value = book;
    option.text = book;
    bookInput.appendChild(option);
});