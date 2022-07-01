const newQuotes = document.getElementsByClassName("new-quotes");
const quotes = document.getElementsByClassName("p-quotes");
const quotesAuthor = document.getElementsByClassName("quotes-author");
let realData = "";
let realQuotes = "";

const getNewQuotes = () => {
  let rnum = Math.floor(Math.random() * 100);
  realQuotes = realData[rnum];
  quotes[0].innerText = `${realQuotes.text}`;
  realQuotes.author === null
    ? (quotesAuthor[0].innerText = "By-Unknown")
    : (quotesAuthor[0].innerText = `By-${realQuotes.author}`);
};

const getQuotes = async () => {
  const api = "https://type.fit/api/quotes";
  try {
    let data = await fetch(api);
    realData = await data.json();
    getNewQuotes();
  } catch (error) {
    console.log("404 Error");
  }
};

newQuotes[0].addEventListener("click", () => {
  newQuotes[0].innerText = "New Quotes";
  getQuotes();
});
