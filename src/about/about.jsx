import React from 'react';
import './about.css';

export function About(props) {
  const [imageUrl, setImageUrl] = React.useState('/Placeholder.jpg');
  const [quote, setQuote] = React.useState('Loading...');
  const [quoteAuthor, setQuoteAuthor] = React.useState('unknown');

  // We only want this to render the first time the component is created and so we provide an empty dependency list.
  React.useEffect(() => {
    const random = Math.floor(Math.random() * 1000);
    fetch(`https://picsum.photos/v2/list?page=${random}&limit=1`)
      .then((response) => response.json())
      .then((data) => {
        const containerEl = document.querySelector('#picture');

        const width = containerEl.offsetWidth;
        const height = containerEl.offsetHeight;
        const apiUrl = `https://picsum.photos/id/${data[0].id}/${width}/${height}`;
        setImageUrl(apiUrl);
      })
      .catch();

    fetch('https://quote.cs260.click')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.quote);
        setQuoteAuthor(data.author);
      })
      .catch();
  }, []);

  let imgEl = '';

  if (imageUrl) {
    imgEl = <img src={imageUrl} alt='stock background' />;
  }

  return (
    <main>
      <h2>About This Game</h2>
      <p>
        Connect Four is a two-player connection game in which the players first choose a color and then take turns 
        dropping colored discs from the top into a seven-column, six-row vertically suspended grid. The pieces fall 
        straight down, occupying the next available space within the column. The objective of the game is to be the 
        first to form a horizontal, vertical, or diagonal line of four of one's own discs. Connect Four is a solved 
        game. The first player can always win by playing the right moves.
      </p>
      <h2>How to Play</h2>
      <ol>
        <li>Choose your color (Red or Yellow).</li>
        <li>Take turns dropping your colored disc into one of the seven columns.</li>
        <li>The disc will occupy the lowest available space in that column.</li>
        <li>The first player to connect four of their discs in a row (horizontally, vertically, or diagonally) wins!</li>
        <li>If the board fills up without any player connecting four, the game ends in a draw.</li>
      </ol>
      <div className="quote-box bg-body-secondary">
        <div className="quote">{quote}</div>
        <div className="author">{quoteAuthor}</div>
      </div>
      <div id="picture" className="picture-box bg-body-secondary">
        {imgEl}
      </div>
      <p>This is a placeholder image for my 3rd party API call along with the quote.</p>
    </main>
  );
}
