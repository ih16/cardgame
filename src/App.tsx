import React, { useState, FC, useEffect } from 'react';
import { Card, Players, PlayingHand, Score } from './interface';
import './App.css';
import {
  StyledCard,
  Layout,
  Grid,
  PlayerTag,
  PrimaryButton,
  ScoreCard,
} from './components/styled';

import { deck, shuffle } from './utility';
import Modal from './components/Modal';
import CardOnBoard from './components/CardOnBoard';
import { DevTool } from './components/DevTool';

const initialPlayer: Players = {
  north: [],
  west: [],
  east: [],
  south: [],
};
const initialPlayingHand: PlayingHand = {
  north: undefined,
  west: undefined,
  east: undefined,
  south: undefined,
};

const App: FC = () => {
  const [mainDeck, setMainDeck] = useState(shuffle(deck));
  const [playerDeck, setPlayerDeck] = useState(initialPlayer);
  const [playingHand, setPlayingHand] = useState(initialPlayingHand);
  const [currentPlayer, setCurrentPlayer] = useState<keyof Players | string>(
    'south',
  );
  const [currentSuit, setCurrentSuit] = useState<string | undefined>();
  const [trump, setTrump] = useState<string | undefined>();
  const [showModal, setShowModal] = useState(false);
  const [score, setScore] = useState<Score>({ ns: 0, we: 0 });

  function playCard(card: Card, playerId: keyof Players) {
    if (!playingHand[playerId] && currentPlayer === playerId) {
      if (!currentSuit) setCurrentSuit(card.suit);
      const haveSuit = playerDeck[playerId].find(
        card => card.suit === currentSuit,
      );
      if (currentSuit === card.suit || !haveSuit) {
        setPlayingHand({ ...playingHand, [playerId]: card });
        setPlayerDeck({
          ...playerDeck,
          [playerId]: [...playerDeck[playerId].filter(ele => ele !== card)],
        });
        if (playerId === 'south') setCurrentPlayer('east');
        if (playerId === 'east') setCurrentPlayer('north');
        if (playerId === 'north') setCurrentPlayer('west');
        if (playerId === 'west') setCurrentPlayer('south');
      }
    }
  }

  useEffect(() => {
    //mutate cards
    const playingHandArr: Array<Card> = [];
    let totalPoints = 0;
    if (
      playingHand.east &&
      playingHand.north &&
      playingHand.west &&
      playingHand.south
    ) {
      Object.entries(playingHand).forEach(([key, value]) => {
        if (trump === value.suit)
          value = { ...value, priority: value.priority + 8 };
        playingHandArr.push(value);
        playingHandArr.sort((a, b) => b.priority - a.priority);
        totalPoints += value.points;
      });

      Object.entries(playingHand).forEach(([key, value]) => {
        if (
          value.suit === playingHandArr[0].suit &&
          value.rank === playingHandArr[0].rank
        ) {
          if (key === 'north' || key === 'south')
            setScore({ ...score, ns: score.ns + totalPoints });
          if (key === 'west' || key === 'east')
            setScore({ ...score, we: score.we + totalPoints });
          setCurrentPlayer(key);
          setPlayingHand(initialPlayingHand);
          setCurrentSuit(undefined);
        }
      });
    }
  }, [playingHand]);

  const renderMaindCards = mainDeck.map(card => {
    return (
      <StyledCard key={`${card.suit}${card.rank}`} suit={card.suit}>
        <div className="suit">{card.suit}</div>
        <div className="rank">{card.rank}</div>
      </StyledCard>
    );
  });

  const renderPlayerCards = (cards: Array<Card>, playerId: keyof Players) =>
    cards.map(card => {
      return (
        <StyledCard
          key={`${card.suit}${card.rank}`}
          suit={card.suit}
          onClick={() => playCard(card, playerId)}
        >
          <div className="suit">{card.suit}</div>
          <div className="rank">{card.rank}</div>
        </StyledCard>
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
    setCurrentPlayer('south');
    setCurrentSuit(undefined);
    setPlayingHand(initialPlayingHand);
    setMainDeck(shuffle(deck));
    setScore({ ns: 0, we: 0 });
  }

  return (
    <div>
      <ScoreCard>
        <div className="ns">NS {score.ns}</div>
        <div className="we">WE {score.we}</div>
      </ScoreCard>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <DevTool trump={trump} setTrump={setTrump} />
      </Modal>
      <Layout>
        <Grid isPlaying={currentPlayer === 'north'}>
          {/* NORTH */}
          <PlayerTag className="align-right">North</PlayerTag>
          {renderPlayerCards(playerDeck.north, 'north')}
        </Grid>

        <Grid isPlaying={currentPlayer === 'west'}>
          {/* WEST */}
          <PlayerTag>West</PlayerTag>
          {renderPlayerCards(playerDeck.west, 'west')}
        </Grid>
        <Grid>
          {/* MIDDLE */}
          {!!mainDeck.length && (
            <div className="mid-card-container">{renderMaindCards}</div>
          )}
          {!mainDeck.length && <CardOnBoard playingHand={playingHand} />}
          <div className="button-container">
            <PrimaryButton onClick={resetCards}>Shuffle</PrimaryButton>
            {!!mainDeck.length && (
              <PrimaryButton className="primary-button" onClick={dealCards}>
                Deal
              </PrimaryButton>
            )}
            <PrimaryButton onClick={() => setShowModal(true)}>
              Dev Tool
            </PrimaryButton>
          </div>
        </Grid>
        <Grid isPlaying={currentPlayer === 'east'}>
          {/* EAST */}
          <PlayerTag className="align-right">East</PlayerTag>
          {renderPlayerCards(playerDeck.east, 'east')}
        </Grid>

        <Grid isPlaying={currentPlayer === 'south'}>
          {/* SOUTH */}
          <PlayerTag>South</PlayerTag>
          {renderPlayerCards(playerDeck.south, 'south')}
        </Grid>
      </Layout>
    </div>
  );
};

export default App;
