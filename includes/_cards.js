const cards = [
    {},
];
let drawPile = [];
let discard = [];

const purse = [] // array of relics on character

const relics = []

const battle = {
    'turn': player,
    'round': 0,
    'playerHp': 0,
    'computerHp': 0,
    'totalDmg': 0,
}

const relic = {
    'name': '',
    'id': 0,
    'type': '',
    'damage': 0,
    'block': 0,
    'rarity': '',
    'description': '',
    'damage': 0,
    'attribute': '',
    'owner': '',
    'boss': false,
    'pick up': false,
    'replace': false,
    'key': false,
    'flavor': '',
    buff,
    debuff,
}

const event = {
    'name': '',
    'id': 0,
    'type': '',
    'act': 0,
    'flavor': '',
}
const events = []


const buff = {
    'type': '',
    'value': 0,
    'flavor': '',
},

const debuff = {
    'type': '',
    'value': 0,
    'flavor': '',
}

const card = {
    'name': '',
    'id': 0,
    'type': '',
    'cost': 0,
    'rarity': '',
    'description': '',
    'exhaust': false, // removed from drawPile once played
    'etherial': false, // exhausts if not played during turn
    'innate': false, // always show up in hand on first turn
    'retain': false, // keeps from going to discard pile
    'unplayable': (purse) => {
        // search if item is found then return true
        // return boolean
    }, // cannot be played; needs item to make playable
    'owner': [
        ''
    ], // list of card users
    'damage': 0,
    'attribute': '',
    'block': 0,
    'sequence': 0,
    'upgrade': false,
    'curse': false,
    'pick up': false,
    'turn': false,
    'flavor': '',
    buff,
    debuff,
}

const monster = {
    'name': '',
    'id': 0,
    'type': '',
    'rarity': '',
    'description': '',
    'health': 0,
    'strength': 10,
    'moves': [ ], // list of moves
    'boss': false,
    'elite': false,
    'superElite': false,
    'gold': 0,
    'sequence': 0,
    'turn': false,
    'flavor': '',
    'level': '',
}

const move = {
    buff,
    debuff,
    'damage': 0,
    'block': 0,
}

const character = {
    'name': '',
    'id': 0,
    'description': '',
    'health': 0,
    'cards': 0,
    'turn': false,
    'gold': 0,
    'flavor': '',
    'weaponRel': false,
    'armorRel': false,
    'UltRel': false,
}

const rest = {
    'heal': 0,
    'dig': false,
    'upgrade': false,
    'keys': false,
    'lift': false,
    'toke': false,
    'flavor': '',
}

const chest = {
    'name': '',
    'id': 0,
    'description': '',
    'rarity': '',
    'gold': 0,
    'sequence': 0,
    'curse': flase,
    'flavor': '',
} 

const magic = {
    'name': '',
    'id': 0,
    'description': '',
    'damage': 0,
    'flavor': '',
}

const potions = []

const potion = {
    'name': '',
    'id': 0,
    'description': '',
    'skill': '',
    'block': 0,
    'damage': 0,
    'cards': 0,
    'rarity': '',
    'pick up': false,
    'flavor': '',
}
const climb = {
    'act': 0,
    'keys': flase,
    'flavor': '',
}


const deck = ()

function shuffle()
{
	// for 1000 turns
	// switch the values of two random cards
	for (var i = 0; i < 1000; i++)
	{
		var draw = Math.floor((Math.random() * deck.length));
		var discard = Math.floor((Math.random() * deck.length));
		var tmp = deck[location1];

		deck[draw] = deck[discard];
		deck[discard] = tmp;
	}
}