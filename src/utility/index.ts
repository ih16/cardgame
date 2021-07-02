interface Card {
  suit: string;
  rank: string;
  priority: number;
  points: number;
}

export const deck: Array<Card> = [
  {
    suit: '♣',
    rank: '7',
    priority: 1,
    points: 0,
  },
  {
    suit: '♣',
    rank: '8',
    priority: 2,
    points: 0,
  },
  {
    suit: '♣',
    rank: 'Q',
    priority: 3,
    points: 0,
  },
  {
    suit: '♣',
    rank: 'K',
    priority: 4,
    points: 0,
  },
  {
    suit: '♣',
    rank: '10',
    priority: 5,
    points: 1,
  },
  {
    suit: '♣',
    rank: 'A',
    priority: 6,
    points: 1,
  },
  {
    suit: '♣',
    rank: '9',
    priority: 7,
    points: 2,
  },
  {
    suit: '♣',
    rank: 'J',
    priority: 8,
    points: 3,
  },
  {
    suit: '♦',
    rank: '7',
    priority: 1,
    points: 0,
  },
  {
    suit: '♦',
    rank: '8',
    priority: 2,
    points: 0,
  },
  {
    suit: '♦',
    rank: 'Q',
    priority: 3,
    points: 0,
  },
  {
    suit: '♦',
    rank: 'K',
    priority: 4,
    points: 0,
  },
  {
    suit: '♦',
    rank: '10',
    priority: 5,
    points: 1,
  },
  {
    suit: '♦',
    rank: 'A',
    priority: 6,
    points: 1,
  },
  {
    suit: '♦',
    rank: '9',
    priority: 7,
    points: 2,
  },
  {
    suit: '♦',
    rank: 'J',
    priority: 8,
    points: 3,
  },
  {
    suit: '♠',
    rank: '7',
    priority: 1,
    points: 0,
  },
  {
    suit: '♠',
    rank: '8',
    priority: 2,
    points: 0,
  },
  {
    suit: '♠',
    rank: 'Q',
    priority: 3,
    points: 0,
  },
  {
    suit: '♠',
    rank: 'K',
    priority: 4,
    points: 0,
  },
  {
    suit: '♠',
    rank: '10',
    priority: 5,
    points: 1,
  },
  {
    suit: '♠',
    rank: 'A',
    priority: 6,
    points: 1,
  },
  {
    suit: '♠',
    rank: '9',
    priority: 7,
    points: 2,
  },
  {
    suit: '♠',
    rank: 'J',
    priority: 8,
    points: 3,
  },
  {
    suit: '♥',
    rank: '7',
    priority: 1,
    points: 0,
  },
  {
    suit: '♥',
    rank: '8',
    priority: 2,
    points: 0,
  },
  {
    suit: '♥',
    rank: 'Q',
    priority: 3,
    points: 0,
  },
  {
    suit: '♥',
    rank: 'K',
    priority: 4,
    points: 0,
  },
  {
    suit: '♥',
    rank: '10',
    priority: 5,
    points: 1,
  },
  {
    suit: '♥',
    rank: 'A',
    priority: 6,
    points: 1,
  },
  {
    suit: '♥',
    rank: '9',
    priority: 7,
    points: 2,
  },
  {
    suit: '♥',
    rank: 'J',
    priority: 8,
    points: 3,
  },
];

export const shuffle = (deck: Array<Card>): Array<Card> =>
  deck
    .map(a => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map(a => a.value);
