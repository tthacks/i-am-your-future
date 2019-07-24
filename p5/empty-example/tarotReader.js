const c0 = {
    name: "The Fool",
    number: 0,
    symbol: ["new beginning", "trust", "innocence"],
    connotation: "wisdom",
    change: 2
}
const c1 = {
    name: "The Magician",
    number: 1,
    symbol: ["meaning", "mastering imagination", "conscious processes"],
    connotation: "order", 
    change: 0
}
const c2 = {
    name: "The High Priestess",
    number: 2,
    symbol: ["intuition", "the unconscious", "emotions"],
    connotation: "fertility",
    change: 1
}

const c3 = {
    name: "The Empress",
    number: 3,
    symbol: ["relationships", "money", "the arts"],
    connotation: "growth",
    change: 2
}
const c4 = {
    name: "The Emperor",
    number: 3,
    symbol: ["competiton", "leadership", "power"],
    connotation: "authority",
    change: 1
}
const allTarot = [c0, c1, c2, c3, c4];


function readTarot(num) {
    let ans = "";
    card = allTarot[num];
    symbol1 = card.symbol[(int)(Math.random() * 3)];

    ans = ans + "Your card is the " + card.name + ". This card represents " + 
    symbol1 + ". Powers of " + card.connotation + " may affect you."
    if(card.change === 2) {
        ans = ans + "\nRecent or coming changes will drastically affect your life."
    }
    else if (card.change === 1) {
        ans = ans + "\nIt is unclear whether forces of change will affect your life."
    }
    else {
        ans = ans + "\nThere is not be a lot of change in your life right now."
    }
    return ans;
}