import { rest } from 'msw';

let person = {
  id: '1',
  name: {
    first: 'Tyrion',
    last: 'Lannister',
  },
  addresses: [
    {
      street: '1 Sky Cell',
      city: 'Eyre',
      region: 'Vale of Arryn',
      country: 'Westeros',
    },
    {
      street: '1 Tower of the Hand',
      city: "King's Landing",
      region: 'Crownlands',
      country: 'Westeros',
    },
  ],
  titles: ['Imp', 'Hand of the King'],
};

export const handlers = [
  rest.get('/person/:id', (req, res, ctx) => {
    return res(ctx.json(person));
  }),
  rest.get('/people', (req, res, ctx) => {
    return res(ctx.json([person]));
  }),
];
