import React from 'react';
import { Header } from 'semantic-ui-react';
const quotes = [
  {
    quote: 'Well, the fridge broke so I had to eat everything.',
    author: 'Joey Tribbiani',
    origin: 'Friends',
  },
  {
    quote: "There has never been a sadness that can't be cured by breakfast food.",
    author: 'Ron Swanson',
    origin: 'Parks and Recreation',
  },
  {
    quote: "This burger is so good, it's like Christmas in my mouth.",
    author: 'Lily Aldrin',
    origin: 'How I Met Your Mother',
  },
  {
    quote: "There's always hope. Tomorrow will be taco night.",
    author: 'Nicky Nichols',
    origin: 'Orange Is The New Black',
  },
  {
    quote: "I even got exotic capers. I didn't know what those were, but they're like salty peas.",
    author: 'Bumper Allen',
    origin: 'Pitch Perfect 2',
  },
  {
    quote: "I wanna bite into a big hunk of cheese, just bite into it like it's an apple.",
    author: 'George Constana',
    origin: 'Seinfeld',
  },
  {
    quote: 'Jenny and me was like peas and carrots.',
    author: 'Forrest Gump',
    origin: 'Forrest Gump',
  },
  {
    quote: 'Fried chicken just tend to make you feel better about life.',
    author: 'Minny Jackson',
    origin: 'The Help',
  },
  {
    quote:
      'Sonny, true love is the greatest thing in the world — except for a nice MLT — mutton, lettuce and tomato sandwich, where the mutton is nice and lean and the tomato is ripe.',
    author: 'Miracle Max',
    origin: 'The Princess Bride',
  },
  {
    quote: "If eating cake is wrong, I don't want to be right.",
    author: 'Lorelai Gilmore',
    origin: 'Gilmore Girls',
  },
  {
    quote: 'If you are what you eat, then I only want to eat the good stuff.',
    author: 'Remy',
    origin: 'Ratatouille',
  },
  {
    quote: 'I got two perfectly good forks at the end of my arms.',
    author: 'Nick Miller',
    origin: 'New Girl',
  },
  {
    quote: 'Stay away from wine. Wine is crying juice.',
    author: 'Donna Meagle',
    origin: 'Parks and Recreation',
  },
  {
    quote:
      "My momma always said, 'Life is a box of chocolates. You never know what you're gonna get.'",
    author: 'Forrest Gump',
    origin: 'Forrest Gump',
  },
  {
    quote:
      "Candy might be sweet, but it's a traveling carnival blowing through town. Pie is home. People always come home.",
    author: 'Ned',
    origin: 'Pushing Daisies',
  },
  {
    quote: "Cheese. It's milk that you chew.",
    author: 'Chandler Bing',
    origin: 'Friends',
  },
  {
    quote: "But I already have a drink. Do you think he'd buy me mozzarella sticks?",
    author: 'Liz Lemon',
    origin: '30 Rock',
  },
];
const quote = quotes[Math.floor(Math.random() * quotes.length)]; /* https://xkcd.com/221/ */

export default () => (
  <Header size="huge" textAlign="center">
    &ldquo;{quote.quote}&rdquo;
    <Header.Subheader>
      &mdash; {quote.author}, <em>{quote.origin}</em>
    </Header.Subheader>
  </Header>
);
