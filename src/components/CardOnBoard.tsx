import React, { FC } from 'react';
import { PlayingHand } from '../interface';
import { PlayingCardContainer, PlayingCardGrid, StyledCard } from './styled';
interface CardOnBoardProps {
  playingHand: PlayingHand;
}
const CardOnBoard: FC<CardOnBoardProps> = ({
  playingHand,
}: CardOnBoardProps) => {
  return (
    <PlayingCardContainer>
      <PlayingCardGrid>
        {playingHand?.north && (
          <StyledCard
            key={`${playingHand.north.suit}${playingHand.north.rank}`}
            suit={playingHand.north.suit}
          >
            <div className="suit">{playingHand.north.suit}</div>
            <div className="rank">{playingHand.north.rank}</div>
          </StyledCard>
        )}
      </PlayingCardGrid>
      <PlayingCardGrid>
        {playingHand?.west && (
          <StyledCard
            key={`${playingHand.west.suit}${playingHand.west.rank}`}
            suit={playingHand.west.suit}
          >
            <div className="suit">{playingHand.west.suit}</div>
            <div className="rank">{playingHand.west.rank}</div>
          </StyledCard>
        )}
      </PlayingCardGrid>
      <PlayingCardGrid>
        {playingHand?.east && (
          <StyledCard
            key={`${playingHand.east.suit}${playingHand.east.rank}`}
            suit={playingHand.east.suit}
          >
            <div className="suit">{playingHand.east.suit}</div>
            <div className="rank">{playingHand.east.rank}</div>
          </StyledCard>
        )}
      </PlayingCardGrid>
      <PlayingCardGrid>
        {playingHand?.south && (
          <StyledCard
            key={`${playingHand.south.suit}${playingHand.south.rank}`}
            suit={playingHand.south.suit}
          >
            <div className="suit">{playingHand.south.suit}</div>
            <div className="rank">{playingHand.south.rank}</div>
          </StyledCard>
        )}
      </PlayingCardGrid>
    </PlayingCardContainer>
  );
};

export default CardOnBoard;
