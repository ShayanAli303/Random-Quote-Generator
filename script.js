const { useState, useEffect } = React;

function App() {
  const quotes = [
    { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "Do not watch the clock. Do what it does. Keep going.", author: "Sam Levenson" },
    { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
    { text: "Whether you think you can or you think you can’t, you’re right.", author: "Henry Ford" }
  ];

  const [quote, setQuote] = useState({ text: "", author: "" });

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  useEffect(() => {
    getRandomQuote();
  }, []);

  return (
    <div id="quote-box">
      <div id="text">"{quote.text}"</div>
      <div id="author">- {quote.author}</div>
      <button id="new-quote" onClick={getRandomQuote}>New Quote</button>
      <a
        id="tweet-quote"
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote.text}" - ${quote.author}`)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Tweet
      </a>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
