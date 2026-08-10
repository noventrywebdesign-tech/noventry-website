export type Review = {
  quote: string;
  author: string;
  context: string;
  rating: number;
};

export const reviews: Review[] = [
  {
    quote: "One of the best steaks I've had outside New York — the tomahawk arrives like a piece of theatre, and it earns every second of it.",
    author: "Eleanor Ashworth",
    context: "Tatler, Restaurant Guide",
    rating: 5,
  },
  {
    quote: "The wagyu is sliced so thin it barely needs the fire. This is a kitchen that trusts its ingredients completely.",
    author: "Marcus Reilly",
    context: "Private client, monthly regular",
    rating: 5,
  },
  {
    quote: "We hosted our anniversary in the Ember Room. Every course, every pour, every light cue — considered down to the minute.",
    author: "Priya & Tom Whitfield",
    context: "Private dining guests",
    rating: 5,
  },
  {
    quote: "Dry-aged to a degree most London steakhouses won't attempt. The crust on the ribeye is worth the booking alone.",
    author: "Julian Cross",
    context: "Food critic, freelance",
    rating: 5,
  },
  {
    quote: "The cellar list rivals restaurants twice its size. Ask the sommelier for the Rioja pairing — she doesn't miss.",
    author: "Nadia Fontaine",
    context: "Wine Society member",
    rating: 5,
  },
];
