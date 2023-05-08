"use strict";
const tlou = {
    title: "The Last of Us",
    description: 'The best game in the world',
    genre: 'Action',
    plataform: ["PS4", "PS5"],
    getSmilars: (title) => {
        console.log(`Similar games to ${title}: Uncharted, A Plague Tale, Metro `);
    }
};
console.log(tlou.title);
tlou.getSmilars(tlou.title);
