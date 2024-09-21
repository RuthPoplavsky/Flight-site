import tlv from "../../pics/TelAviv.jpg";
import atl from "../../pics/Atl.webp";
import ohae from "../../pics/Chicago.jpg";
import hol from "../../pics/amsterdam.jpg";
import ba from "../../pics/Argentina.webp";
import china from "../../pics/China-GreatWall.jpg";
import dubai from "../../pics/dubai.jpg";
import ey from "../../pics/Egypt.jpg";
import lnd from "../../pics/England.jpg";
import frn from "../../pics/FrancePris.jpg";
import mxc from "../../pics/mexico.jpg";
import sp from "../../pics/Spain.jpg";
import clf from "../../pics/Clf.jpg";



const initialState = [
    {
        id: 1,
        name: "Israel",
        capitalCity: "Jerusalem ",
        image: tlv,
        qty: 60,
        price: 600,
        description: "Israel is the only true democracy in the Middle East, applying rights equally to all its citizens. The Israeli society is an open society of people from all over the world, including Africa, Asia, Europe, the Americas, and the Middle East"
    },
    {
        id: 2,
        name: "Georgia",
        capitalCity: " Atlanta",
        image: atl,
        qty: 18,
        price: 604,
        description: "Atlanta is a city that's simultaneously known for its rich history and influence on the future. A city of transformation, it's the birthplace of Civil Rights leader Martin Luther King Jr., and remains a political hotbed in today's national discourse"
    },
    {
        id: 3,
        name: "Chicago",
        capitalCity: "O`Hare ",
        image: ohae,
        qty: 24,
        price: 500,
        description: "Chicago is known for its architecture, food, and mobster history. It's known for its museums and cultural gems, making it an epicenter for tourism. Finally, Chicago is famous for its professional sports teams. Regardless of the game you prefer, theres a spectator sport for all seasons in the Windy City"
    },
    {
        id: 4,
        name: "United Arabs",
        capitalCity: " Dubai",
        image: dubai,
        qty: 56,
        price: 250,
        description: "The United Arab Emirates is known for the tallest human-made structure, the Burj Khalifa, and the Burj Al Arab, one of the tallest hotel building in the world. The UAE is famous for several artificial islands like the Palm Jumeirah island, the World, and The Universe archipelagos.    "
    },
    {
        id: 5,
        name: "England",
        capitalCity: "London ",
        image: lnd,
        qty: 64,
        price: 300,
        description: "ENGLAND is famous for many things - David Beckham, Fish and Chips, Big Ben, Red Buses, black cabs, Oasis, Blur, the Beatles, London and tea. England is famous for its long history. England is famous for its Royal Family. Windsor Castle is the oldest royal residence still in use.    "
    },
    { id: 6, name: "California", capitalCity: " Los Angeles", image: clf, qty: 29, price: 124, description: "Because it's insanely diverse, charmingly creative, and it has it all – from sun-kissed surf beaches and fascinating cities to picturesque vineyards, rugged mountains, soaring redwood forests, and dramatic deserts – California stands atop of my list as the most beautiful state in the US" },
    { id: 7, name: "China", capitalCity: "Beijing ", image: china, qty: 30, price: 870, description: "China's awesome and monumental ancient treasures exceed all other countries for size and number — from ancient palaces to the Great Wall, city walls, buried armies, canals, pagodas, temples, and giant Buddhas" },
    { id: 8, name: "Spain", capitalCity: "Barcellona ", image: sp, qty: 17, price: 274, description: "It has coastlines on the Bay of Biscay (a part of the Atlantic Ocean) and the Mediterranean Sea. Spain's capital and largest city is Madrid, and the country is known for its long history, unique culture, strong economy, and very high living standards" },
    { id: 9, name: "Argentina", capitalCity: "Buenos Aires ", image: ba, qty: 63, price: 1600, description: " From the plains of Patagonia to the sophistication of Buenos Aires, Argentina is full of dramatic landscapes and offers a wide variety of experiences ranging from outdoor adventures to cosmopolitan glamour. Argentina is famous for world-class salmon and trout fishing, glacier skiing in the Andes" },
    { id: 10, name: "France", capitalCity: "Paris ", image: frn, qty: 97, price: 790, description: "Fantasy castles, glorious castles, and beautiful towns are major tourist attractions. This alluring country on the west side of Europe is majorly known for its gourmet food, wines, and fashion. France is the symbol of romance and love worldwide" },
    { id: 11, name: "Holland", capitalCity: " Amsterdam", image: hol, qty: 79, price: 670, description: "The Netherlands (or Holland) may be a small country, but it's packed with world famous icons. Discover our bulb fields, windmills, cheese markets, wooden shoes, canals of Amsterdam, masterpieces of Old Masters, Delft Blue earthenware, innovative water-management and millions of bicycles" },
    { id: 12, name: "Mexico", capitalCity: " Mexico City", image: mxc, qty: 47, price: 1400, description: "Mexico is a land of extremes, with high mountains and deep canyons in the center of the country, sweeping deserts in the north, and dense rain forests in the south and east. Mountains cover much of Mexico.    " },
    { id: 13, name: "Egypt", capitalCity: " Kahir", image: ey, qty: 9, price: 350, description: "Egypt is a large country, but a large portion of it is desert. Most people (95% of Egypt's total people) live in areas around the coast of the Mediterranean Sea and along the Nile River. This includes the cities of Cairo, Alexandria, Aswan, and Port Said. Not many people live in the desert.    " },
];

const pruductReducer = (state = initialState, action) => {

    return state;
}
export default pruductReducer;



