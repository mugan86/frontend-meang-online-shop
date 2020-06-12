export const GAMES_PAGES_INFO = {
    'platforms/sony': {
        title: 'Juegos Sony',
        description: `En esta página encontraremos juegos de las diferentes plataformas
        de Sony como pueden ser Playstation 4, PSP,...`,
        platformsIds: ['19', '17', '18', '16', '15', '27'],
        topPrice: -1,
        stock: -1
    },
    'platforms/microsoft': {
        title: 'Juegos Microsoft',
        description: `En esta página encontraremos juegos de las diferentes plataformas
        de Microsoft como pueden ser PC, Xbox,...`,
        platformsIds: ['1', '4', '14', '80'],
        topPrice: -1,
        stock: -1
    },
    'platforms/nintendo': {
        title: 'Juegos Nintendo',
        description: `En esta página encontraremos juegos de las diferentes plataformas
        de Nintendo como pueden ser Nintendo 64, NintendoDS, Wii,...`,
        platformsIds: ['7', '8', '9', '13', '10', '105', '43', '49', '79', '26', '11'],
        topPrice: -1,
        stock: -1
    },
    'promotions/last-units': {
        title: 'Últimas unidades',
        description: `En esta página encontraremos juegos que está a punto de agotarse`,
        platformsIds: [],
        topPrice: -1,
        stock: 30
    },
    'promotions/offers': {
        title: 'En liquidación',
        description: `En esta página encontraremos juegos con
        pocas existencias en el stock y a precios competitivos`,
        platformsIds: [],
        topPrice: 45,
        stock: 40
    },
};

export enum TYPE_OPERATION {
    PLATFORMS = 'platforms',
    PROMOTION = 'promotion'
}
