import { createContext } from "react";
import { initialState } from "../../store/reducers/reducer"

const PokemonContext = createContext(initialState);
export default PokemonContext;