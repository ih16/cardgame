import React, { useState } from 'react';

import './App.css';

import { deck, shuffle } from './utility';
interface Cards {
  suit: string;
  rank: string;
  priority: number;
  points: number;
}
interface Players {
  north: Array<Cards>;
  west: Array<Cards>;
  east: Array<Cards>;
  south: Array<Cards>;
}

const initialPlayer: Players = {
  north: [],
  west: [],
  east: [],
  south: [],
};

const App: React.FC = () => {
  const [mainDeck, setMainDeck] = useState(shuffle(deck));
  const [playerDeck, setPlayerDeck] = useState(initialPlayer);

  const renderMaindCards = mainDeck.map(card => {
    return (
      <div key={`${card.suit}${card.rank}`} className="card">
        <div className={`suit-${card.suit}`}>{card.suit}</div>
        <div className="rank">{card.rank}</div>
      </div>
    );
  });
  const renderPlayerCards = (cards: Array<Cards>) =>
    cards.map(card => {
      return (
        <div key={`${card.suit}${card.rank}`} className="card">
          <div className={`suit-${card.suit}`}>{card.suit}</div>
          <div className="rank">{card.rank}</div>
        </div>
      );
    });
  function dealCards() {
    setPlayerDeck({
      ...playerDeck,
      north: [...playerDeck.north, ...mainDeck.slice(0, 4)],
      west: [...playerDeck.west, ...mainDeck.slice(4, 8)],
      south: [...playerDeck.south, ...mainDeck.slice(8, 12)],
      east: [...playerDeck.east, ...mainDeck.slice(12, 16)],
    });
    setMainDeck(mainDeck.slice(16, mainDeck.length));
  }
  function resetCards() {
    setPlayerDeck(initialPlayer);
    setMainDeck(shuffle(deck));
  }

  return (
    <div className="App">
      <div className="north-west"></div>
      <div className="north">
        <div className="player-tag">North</div>
        {renderPlayerCards(playerDeck.north)}
      </div>
      <div className="north-east"></div>
      <div className="east">
        <div className="player-tag">East</div>
        {renderPlayerCards(playerDeck.east)}
      </div>
      <div className="middle">
        <div className="mid-card-container">{renderMaindCards}</div>
        <div className="button-container">
          <button className="primary-button" onClick={resetCards}>
            Shuffle
          </button>
          {!!mainDeck.length && (
            <button className="primary-button" onClick={dealCards}>
              Deal
            </button>
          )}
        </div>
      </div>
      <div className="west">
        <div className="player-tag">West</div>
        {renderPlayerCards(playerDeck.west)}
      </div>
      <div className="south-west"></div>
      <div className="south">
        <div className="player-tag">South</div>
        {renderPlayerCards(playerDeck.south)}
      </div>
      <div className="south-east"></div>
    </div>
  );
};

export default App;
