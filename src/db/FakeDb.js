import { Burger } from "../models/Burger.js";

export const FakeDb = {
  burgers: [
      new Burger({
          name: 'Double Double 💗 Stopper',
          isDoubled: true,
          hasPickles: true,
          price: 7.29
      }),
      new Burger({
          name: 'Biggon and cheese',
          isDoubled: true,
          hasBaccon: true,
          hasCheese: true,
          price: 7.99
      }),
      new Burger({
          name: 'Bacon Byte',
          hasPickles: true,
          hasBaccon:true,
          price: 3.26
      }),
      new Burger({
          name: 'Stopper Popper',
          hasCheese: false
      })
  ]
}