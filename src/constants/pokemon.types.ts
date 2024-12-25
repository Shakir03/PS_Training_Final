export const POKEMON_TYPE = Object.freeze({
    nomrnal: {
        color: "#DDCBD0",
        hex: ""
    },
    fighting: {
        color: "#FCC1B0",
        hex: ""
    },
    flying: {
        color: "#B2D2E8",
        hex: ""
    },
    poison: {
        color: "#CFB7ED",
        hex: ""
    },
    ground: {
        color: "#F4D1A6",
        hex: ""
    },
    rock: {
        color: "#C5AEA8",
        hex: ""
    },
    bug: {
        color: "#C1E0C8",
        hex: ""
    },
    ghost: {
        color: "#D7C2D7",
        hex: ""
    },
    steel: {
        color: "#C2D4CE",
        hex: ""
    },
    fire: {
        color: "#EDC2C4",
        hex: ""
    },
    water: {
        color: "#CBD5ED",
        hex: ""
    },
    grass: {
        color: "#C0D4C8",
        hex: ""
    },
    electric: {
        color: "#E2E2A0",
        hex: ""
    },
    psychic: {
        color: "#DDC0CF",
        hex: ""
    },
    ice: {
        color: "#C7D7DF",
        hex: ""
    },
    dragon: {
        color: "#CADCDF",
        hex: ""
    },
    dark: {
        color: "#C6C5E3",
        hex: ""
    },
    fairy: {
        color: "#E4C0CF",
        hex: ""
    },
    unknown: {
        color: "#C0DFDD",
        hex: ""
    },
    shadow: {
        color: "#CACACA",
        hex: ""
    }
})

export const getPokcolor = (type) => {
    return POKEMON_TYPE[type] ? POKEMON_TYPE[type].color : POKEMON_TYPE['unknown'].color;
}

export const getBackground = (pokemonTypes) => {
    var color = "";
    if (pokemonTypes.length) {
        var { type: { name: pokemontype1 } } = pokemonTypes[0];
    }
    if (pokemonTypes.length > 1) {
        const { type: { name: pokemontype2 } } = pokemonTypes[1];
        color = `linear-gradient(180deg, ${getPokcolor(pokemontype1)} 0%, ${getPokcolor(pokemontype2)} 100%)`;
    } else {
        const { type: { name: pokemontype1 } } = pokemonTypes[0];
        color = getPokcolor(pokemontype1)
    }
    return color;
}


export const getPokemonDescription = (data = []) => {
    if (data.length) {
        let uniqueTextArray = [];
        return data.reduce((acc, next) => {
            if (next.language.name === "en" && !uniqueTextArray.includes(next.flavor_text)) {
                uniqueTextArray.push(next.flavor_text);
                return acc += next.flavor_text.replace(/\n|\f/g, " ");
            }
            return acc;
        }, "");
    }
}

export const getCamleCaseString = (str = "") => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
}
