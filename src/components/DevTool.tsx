import React, { Dispatch, FC, SetStateAction } from 'react';
import styled from 'styled-components';
interface DevToolProps {
  trump: string | undefined;
  setTrump: Dispatch<SetStateAction<string | undefined>>;
}
const DevToolConTainer = styled.div`
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(4, 1fr);
  & > div {
    place-self: center start;
  }
`;
const TrumpSelector = styled.div`
  display: flex;
  & .option {
    padding: 0.2rem 0.4rem;
    margin: 0 0.4rem;
    font-size: 1.8rem;
    border-radius: 0.2rem;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    border: rgb(255, 255, 255, 0) solid 0.01em;
    cursor: pointer;
    &:hover,
    &.selected {
      border: rgb(58, 76, 158) solid 0.01em;
      border-bottom: rgb(255, 20, 20) solid 0.01em;
    }
  }
`;
export const DevTool: FC<DevToolProps> = ({
  trump,
  setTrump,
}: DevToolProps) => {
  return (
    <DevToolConTainer>
      <div>Set Trump: </div>
      <div>
        <TrumpSelector>
          <div
            className={`option ${trump === '♠' ? 'selected' : ''} `}
            onClick={() => setTrump('♠')}
          >
            ♠
          </div>
          <div
            className={`option ${trump === '♥' ? 'selected' : ''} `}
            onClick={() => setTrump('♥')}
            style={{ color: 'red' }}
          >
            ♥
          </div>
          <div
            className={`option ${trump === '♣' ? 'selected' : ''} `}
            onClick={() => setTrump('♣')}
          >
            ♣
          </div>
          <div
            className={`option ${trump === '♦' ? 'selected' : ''} `}
            style={{ color: 'red' }}
            onClick={() => setTrump('♦')}
          >
            ♦
          </div>
        </TrumpSelector>
      </div>
    </DevToolConTainer>
  );
};
