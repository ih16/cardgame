import React, { useState } from 'react';

import './App.css';

import { deck, shuffle } from './utility';
interface Card {
  suit: string;
  rank: string;
  priority: number;
  points: number;
}
interface Players {
  north: Array<Card>;
  west: Array<Card>;
  east: Array<Card>;
  south: Array<Card>;
}
interface PlayingHand {
  playerId: string;
  card: Card;
}

const initialPlayer: Players = {
  north: [],
  west: [],
  east: [],
  south: [],
};
const initialPlayingHand: Array<PlayingHand> = [];

const App: React.FC = () => {
  const [mainDeck, setMainDeck] = useState(shuffle(deck));
  const [playerDeck, setPlayerDeck] = useState(initialPlayer);
  const [playingHand, setPlayingHand] = useState(initialPlayingHand);

  function playCard(card: Card, playerId: string) {
    console.log(playerId + ':', card.suit, card.rank);
  }

  const renderMaindCards = mainDeck.map(card => {
    return (
      <div key={`${card.suit}${card.rank}`} className="card">
        <div className={`suit-${card.suit}`}>{card.suit}</div>
        <div className="rank">{card.rank}</div>
      </div>
    );
  });
  const renderPlayerCards = (cards: Array<Card>, playerId: string) =>
    cards.map(card => {
      return (
        <div
          key={`${card.suit}${card.rank}`}
          className="card"
          onClick={() => playCard(card, playerId)}
        >
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
      {/* North West Container */}
      <div className="north-west"></div>
      {/* North Container */}
      <div className="north">
        <div className="player-tag">North</div>
        {renderPlayerCards(playerDeck.north, 'north')}
      </div>
      {/* North East Container */}
      <div className="north-east"></div>
      {/* West Container */}
      <div className="west">
        <div className="player-tag">West</div>
        {renderPlayerCards(playerDeck.west, 'west')}
      </div>
      {/* Middle Container */}
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
      {/* East Container */}
      <div className="east">
        <div className="player-tag">East</div>
        {renderPlayerCards(playerDeck.east, 'east')}
      </div>
      {/* South West Container */}
      <div className="south-west"></div>
      {/* South Container */}
      <div className="south">
        <div className="player-tag">South</div>
        {renderPlayerCards(playerDeck.south, 'south')}
      </div>
      {/* South East Container */}
      <div className="south-east"></div>
    </div>
  );
};

export default App;
