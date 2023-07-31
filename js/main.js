const apiUrl = "https://api.quotable.io/random";
let quote = document.getElementById("quote");
let quoteAuthor = document.getElementById("author");

async function getQuote(url) {
    const response = await fetch(url);
    let data = await response.json();
    console.log(data)
    quote.innerHTML = data.content;
    quoteAuthor.innerHTML = data.author
}

function tweet() {
    window.open("https://twitter.com/intent/tweet&text=" + quote.innerHTML, "--- by" + quoteAuthor.innerHTML, "Tweet window", "width=600, height=300");
}