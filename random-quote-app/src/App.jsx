import React from 'react'


const rapQuotes = [
  {
    quote: 'Climb the ladder to success, escalator style',
    author: 'Notorious B.I.G.',
    image: '../images/drake.jpg'
  },
  {
    quote: 'The best part of me is I am not you',
    author: 'Eminem'
  },
  {
    quote: 'Better late than never, but never late is better',
    author: 'Drake'
  },
  {
    quote: 'Worship Christ with the best of your portions.',
    author: 'Kanye West'
  },
  {
    quote: "I don't got to talk, the Lord defends me.",
    author: 'Nicki Minaj'
  },
  {
    quote: "You could love me, or hate me, I swear it won't make me or break me.",
    author: 'Lil Wayne'
  },{
    quote: "Everytime I look up, I see God's faithfulness.",
    author: 'Kanye West'
  },
  {
    quote: "I'm the best in school, the best in the game. Excuse me but there's nobody in my late.",
    author: 'Nicki Minaj'
  },
  {
    quote: 'To be the best, you have to smell like the best, dress like the best, act like the best.',
    author: 'Lil Wayne'
  },
  {
    quote: "'Cause through the drama I can always depend on my mama",
    author: 'Tupac'
  },
  {
    quote: "It's easy to forget who you are.",
    author: 'Kendrick Lamar'
  },
  {
    quote: "The worst part of success is, to me, adapting to it. It's scary.",
    author: 'Kendrick Lamar'
  },
  {
    quote: "They have money for war but can't feed the poor.",
    author: 'Tupac'
  }
]

function getRandomQuote () {
  const randomIndex = Math.floor(Math.random() * rapQuotes.length);
  return (rapQuotes[randomIndex]);
}

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      randomQuote: {},
      quoteTransitions: false
    }

    this.fetchQuote= this.fetchQuote.bind(this);
  }

  fetchQuote() {
    console.log("fetching quotes...");
    this.setState({
      quoteTransitions: true
    });
    console.log(this.state.quoteTransitions);

    setTimeout(() => {
      this.setState({
        randomQuote: getRandomQuote(),
        quoteTransitions: false
      });
    }, 500);
  }

  componentDidMount() {
    this.fetchQuote();
  }

  render() {
    const {quote, author} = this.state.randomQuote;
    return (
          <div id="wrapper">
      
            <div 
              id="quote-box" 
              style={{
                // background: `url(${image})'
            }}>
      
              <div id="text">
                <h2 className={'quoteTransitions ? "hidden" : ""'}>{quote}</h2>
              </div>
      
              <div id="author">
                <p className={'quoteTransitions ? "hidden" : ""'}>- {author}</p>
              </div>
      
              <div id="edit-quote">
      
                <div id="share-quote">
      
                  <a id="tweet-quote" 
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote}" - ${author}`)}`} 
                  target="_blank" 
                  rel="noopener noreferrer">
                    <i className="bi bi-twitter"></i>
                  </a>

                  <a id="whatsapp-quote"
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`"${quote}" - ${author}`)}`}
                  target="_blank" 
                  rel="noopener noreferrer">
                    <i className="bi bi-whatsapp"></i>
                  </a>
      
                </div>
      
                <button 
                  id="new-quote" 
                  type="button" 
                  onClick={this.fetchQuote}
                >
                  New Quote
                </button>
      
              </div>
      
            </div>
      
            <p id="project-credit">
              By  <a id="project-author" href="https://github.com/Hilda-Enyioko" target="_blank" rel="noopener noreferrer">Hilda Enyioko</a>
            </p>
      
          </div>
    )
  }

}

export default App;