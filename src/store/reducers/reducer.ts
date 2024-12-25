// import * as ACTIONS from "../../store/actions/pokemonAction";


export const initialState = {
    pokemonsList: [],
    allPokemonsList: [],
    pokemonSelectedId: null,
    pokemonData: null,
    isLoading: true,
    isLoadMoreInprogress: false,
    pokemonsTypes: [],
    pokemonGenderList: []
};


export const reducer = (state, action) => {

    switch (action.type) {
        case "ACTIONS.SET_POKEMON_LIST":
            return {
                ...state, pokemonsList: [...state.pokemonsList, ...action.payload]
            };
        case "ACTIONS.SET_ALL_POKEMON_LIST":
            return {
                ...state, allPokemonsList: action.payload
            };
        case "ACTIONS.SET_FILTERED_POKEMON_LIST":
            return {
                ...state, pokemonsList: action.payload
            };
        case "ACTIONS.SET_POKEMON_TYPE":
            return {
                ...state, pokemonsTypes: action.payload
            };

        case "ACTIONS.SET_POKEMON_GENDER_LIST":
            return {
                ...state, pokemonGenderList: action.payload
            };

        case "ACTIONS.SET_API_CALL_INPROGRESS":
            return {
                ...state, isLoading: action.payload
            };
        case "ACTIONS.SET_LOAD_MORE_API_CALL_INPROGRESS":
            return {
                ...state, isLoadMoreInprogress: action.payload
            };

        case "ACTIONS.SET_POKEMON_BY_ID":
            return {
                ...state, pokemonData: action.payload
            };
        case "ACTIONS.RESET_POKEMON_DATA":
            return {
                ...state, pokemonData: null
            };
        case "ACTIONS.SET_POKEMON_ID":
            return {
                ...state, pokemonSelectedId: action.payload
            };

        default:
            return state

    }

}