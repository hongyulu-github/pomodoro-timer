import React, { useState, useEffect } from 'react';
import './RandomQuote.css'

const RandomQuote = () => {
  const [quote, setQuote] = useState({ text: '', author: '' }); 

  useEffect(() => {
    fetch('https://type.fit/api/quotes')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Error fetching random quote!');
        }
        return res.json();
      })
      .then((data) => {
        const randomIndex = Math.floor(Math.random() * data.length);
        setQuote(data[randomIndex]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const authorName = quote.author ? quote.author.trim() : ''; 

  return (
    <>
    <div className='quote-container card'>
    <p>{quote.text}</p>
      {authorName && authorName.includes(',') ? (
        <p>--{authorName.slice(0, authorName.indexOf(','))}</p>
      ) : (
        <p>-- They said so</p>
      )}
    </div>
   
    </>
  );
};

export default RandomQuote;
