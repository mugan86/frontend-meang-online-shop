import { IProduct } from '../interfaces';

export const products: Array<IProduct> = [
    {
        id: '3498',
        slug: 'grand-theft-auto-v',
        name: 'Grand Theft Auto V',
        img: 'https://media.rawg.io/media/games/b11/b115b2bc6a5957a917bc7601f4abdda2.jpg',
        stock: 1000,
        price: 450,
        rating: {
            value: 4.48,
            count: 3448
        },
        discount: 20,
        qty: 1,
        description: ``
    },
    {
        id: '02',
        slug: 'tomb-raider',
        name: 'Tomb Raider (2013)',
        img: 'https://media.rawg.io/media/games/81b/81b138691f027ed1f8720758daa0d895.jpg',
        stock: 123,
        price: 50,
        rating: {
            value: 4.07,
            count: 2056
        },
        qty: 1,
        description: ``
    },
    {
        id: '03',
        name: 'MacBook Pro',
        img: 'imacbookpro.jpg',
        stock: 40,
        price: 1300,
        qty: 1,
        description: `Lorem ipsum dolor sit amet,
      iusto appellantur vix te, nam affert feugait menandri eu. Magna simul ad est. Nostrum neglegentur ius at,
      at pertinax repudiare vel. Vim an adolescens quaerendum.`
    },
    {
        id: '04',
        name: 'iMac',
        img: 'imac.jpg',
        stock: 15,
        price: 1500,
        qty: 1,
        description: `Lorem ipsum dolor sit amet,
      iusto appellantur vix te, nam affert feugait menandri eu. Magna simul ad est. Nostrum neglegentur ius at,
      at pertinax repudiare vel. Vim an adolescens quaerendum.`
    },
    {
      id: '05',
      name: 'BMW 328 (1939)',
      img: 'cars1.jpg',
      stock: 20,
      price: 350,
      qty: 1,
      description: `Lorem ipsum dolor sit amet,
    iusto appellantur vix te, nam affert feugait menandri eu. Magna simul ad est. Nostrum neglegentur ius at,
    at pertinax repudiare vel. Vim an adolescens quaerendum.`
    },
    {
      id: '06',
      name: 'Ferrari 500',
      img: 'cars2.jpg',
      stock: 3,
      price: 47890,
      qty: 1,
      description: `Lorem ipsum dolor sit amet,
    iusto appellantur vix te, nam affert feugait menandri eu. Magna simul ad est. Nostrum neglegentur ius at,
    at pertinax repudiare vel. Vim an adolescens quaerendum.`
    },
    {
      id: '07',
      name: 'Porche 356',
      img: 'cars3.jpg',
      stock: 1,
      price: 145965,
      qty: 1,
      description: `Lorem ipsum dolor sit amet,
    iusto appellantur vix te, nam affert feugait menandri eu. Magna simul ad est. Nostrum neglegentur ius at,
    at pertinax repudiare vel. Vim an adolescens quaerendum.`
    },
    {
      id: '08',
      name: 'Senderismo (Excursión)',
      img: 'mountains.jpg',
      stock: 50,
      price: 150,
      qty: 1,
      description: `Lorem ipsum dolor sit amet,
    iusto appellantur vix te, nam affert feugait menandri eu. Magna simul ad est. Nostrum neglegentur ius at,
    at pertinax repudiare vel. Vim an adolescens quaerendum.`
    }
];
