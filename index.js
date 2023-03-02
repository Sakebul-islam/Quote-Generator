const quoteContainer = document.querySelector("#quote-container");
const newQuote = document.querySelector("#quote");
const newQuoteauthor = document.querySelector("#author");
const twitterButton = document.querySelector("#twitter");
const newQuoteButton = document.querySelector("#new-quote");
const loader = document.querySelector(".loader");

// Show Loder
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

// Hide Loading
function complead() {
  if (!loader.hidden) {
    loader.hidden = true;
    quoteContainer.hidden = false;
  }
}

const tweetQuote = () => {
  const quote = newQuote.textContent;
  const author = newQuoteauthor.textContent;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
  window.open(twitterUrl, "_blank");
};

// Get Quotes From api
const getQuotes = async () => {
  loading();
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "3a6b04ab03mshccbd9aeabf293a3p1b67cejsn8ce40b4a5075",
      "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
    },
  };

  const apiUrl = `https://quotes15.p.rapidapi.com/quotes/random/`;
  try {
    const response = await fetch(apiUrl, options);
    const data = await response.json();
    const quote = data.content;
    const author = data.originator.name;

    newQuote.textContent = quote;
    newQuoteauthor.textContent = author;
    complead();
  } catch (error) {
    alert('Api has Some Error ❗')
  }
};

// On Load
getQuotes();

// newQuoteHandler();
newQuoteButton.addEventListener("click", getQuotes);
twitterButton.addEventListener("click", tweetQuote);
