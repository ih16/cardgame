import styled from 'styled-components';
import { GridProps, StyledCardProps } from './interface';

export const Layout = styled.div`
  height: 100vh;
  display: grid;

  grid-template-areas:
    'W N N N'
    'W M M E'
    'W M M E'
    'S S S E';
  grid-template-rows: 160px auto auto 160px;
  grid-template-columns: 170px auto auto 170px;
`;

export const Grid = styled.div<GridProps>`
  display: flex;
  flex-wrap: wrap;
  overflow-y: hidden;

  &:nth-child(1) {
    grid-area: N;
    align-content: flex-start;
    justify-content: flex-end;
    box-shadow: ${props =>
      props.isPlaying
        ? 'rgba(0, 10, 255, 0.25) 0px -1px 12px 0px, rgba(255, 0, 0, 0.3) 1px 0px 12px 0px'
        : '0 0 10px 0 rgb(0 0 0 / 10%)'};
    padding: 0.3rem 0.5rem 0.7rem;
    background-color: white;
    margin-bottom: 1.5rem;
    border-radius: 0.3rem;
  }

  &:nth-child(2) {
    grid-area: W;
    align-content: flex-start;
    justify-content: flex-start;
    overflow: hidden;
    box-shadow: ${props =>
      props.isPlaying
        ? 'rgba(0, 10, 255, 0.25) 0px -3px 12px 1px, rgba(255, 0, 0, 0.3) 2px 1px 8px 1px'
        : '0 0 10px 0 rgb(0 0 0 / 10%)'};
    padding: 0.5rem;
    background-color: white;
    margin-right: 1.5rem;
    border-radius: 0.3rem;
  }
  &:nth-child(3) {
    grid-area: M;
    border-radius: 0.4rem;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 0 25px rgb(0 0 0 / 5%);
    background-color: white;
    padding: 1rem;
  }
  &:nth-child(4) {
    grid-area: E;
    align-content: flex-end;
    justify-content: flex-end;
    box-shadow: ${props =>
      props.isPlaying
        ? 'rgba(0, 10, 255, 0.25) 0px -3px 12px 1px, rgba(255, 0, 0, 0.3) 2px 1px 8px 1px'
        : '0 0 10px 0 rgb(0 0 0 / 10%)'};
    padding: 0.5rem;
    background-color: white;
    margin-left: 1.5rem;
    border-radius: 0.3rem;
  }

  &:nth-child(5) {
    grid-area: S;
    align-content: center;
    justify-content: flex-start;
    overflow: hidden;
    box-shadow: ${props =>
      props.isPlaying
        ? 'rgba(0, 10, 255, .2) 0px -1px 15px 0px, rgba(255, 0, 0, 0.15) 2px 0px 12px 1px'
        : '0 0 10px 0 rgb(0 0 0 / 10%)'};
    padding: 0.5rem;
    background-color: white;
    margin-top: 1.5rem;
    border-radius: 0.3rem;
  }
`;
export const PlayerTag = styled.div`
  width: 100%;
  font-weight: 800;
  padding: 0.5rem 0.5rem 0.7rem 0.5rem;

  &.align-right {
    /* <-- [utility class] */
    text-align: right;
  }
`;
export const PrimaryButton = styled.button`
  cursor: pointer;
  padding: 0.5rem 1rem;
  margin: 0.3rem;
  min-width: 5rem;
  box-shadow: rgba(17, 17, 26, 0.075) 2px 3px 3px,
    rgba(17, 17, 26, 0.05) -1px -1px 1px;

  background: none;
  border: none;
  border-radius: 0.3rem;
  border: rgb(255, 255, 255, 0) solid 0.01em;
  transition: all 150ms ease-in;
  &:hover {
    border: rgb(58, 76, 158, 1) solid 0.01em;
    border-bottom: rgb(255, 20, 20, 1) solid 0.01em;
    box-shadow: none;
  }
`;
export const StyledCard = styled.div<StyledCardProps>`
  background-color: white;
  min-height: 2.6rem;
  min-width: 2rem;
  padding: 0.5rem;
  margin: 0.2rem;
  box-shadow: rgba(60, 64, 67, 0.2) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.1) 0px 1px 3px 1px;
  border-radius: 0.2em;
  cursor: pointer;
  transition: all 0.15s;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-items: center;
  border: rgb(255, 255, 255, 0) solid 0.01em;

  &:hover {
    border: rgb(58, 76, 158) solid 0.01em;
    border-bottom: rgb(255, 20, 20) solid 0.01em;
    transform: scale(1.2) translateY(-0.5rem);
    z-index: 99999;
    box-shadow: rgba(0, 10, 255, 0.25) 0px -3px 12px 1px,
      rgba(255, 0, 0, 0.4) 0px 1px 8px 1px;
  }
  .suit {
    font-size: 1.6rem;
    margin: -0.2rem;
    color: ${props =>
      props.suit === '♥' || props.suit === '♦' ? 'red' : 'black'};
  }
  .rank {
    font-size: 1.2rem;
    font-weight: 700;
  }
`;

export const PlayingCardContainer = styled.div`
  flex: 1;
  display: grid;
  width: 100%;
  overflow: hidden;
  grid-template-areas:
    'N N'
    'W E'
    'S S';

  grid-template-rows: repeat(3, 33.333333%);
  grid-template-columns: repeat(2, 50%);
`;

export const PlayingCardGrid = styled.div`
  display: flex;
  & ${StyledCard} {
    transform: scale(1.4);
    &:hover {
      border: rgb(255, 255, 255, 0) solid 0.01em;
    }
  }
  &:nth-child(1) {
    grid-area: N;
    align-items: flex-end;
    justify-content: center;
    margin-bottom: -2rem;
  }
  &:nth-child(2) {
    grid-area: W;
    align-items: center;
    justify-content: flex-end;
    margin-right: 5rem;
  }
  &:nth-child(3) {
    grid-area: E;
    align-items: center;
    justify-content: flex-start;
    margin-left: 5rem;
  }
  &:nth-child(4) {
    grid-area: S;
    align-items: flex-start;
    justify-content: center;
    margin-top: -2rem;
  }
`;
