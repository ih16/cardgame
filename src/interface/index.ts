export interface Card {
  suit: string;
  rank: string;
  priority: number;
  points: number;
}
export interface Players {
  north: Array<Card>;
  west: Array<Card>;
  east: Array<Card>;
  south: Array<Card>;
}
export interface PlayingHand {
  north: Card | undefined;
  west: Card | undefined;
  east: Card | undefined;
  south: Card | undefined;
}
export interface Score {
  ns: number;
  we: number;
}
