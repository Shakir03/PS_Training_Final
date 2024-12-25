import React from 'react';
import { useReducer, useEffect, useRef } from "react";
import { initialState, reducer } from "../../store/reducers/reducer";
import PokemonContext from "./pokmon.context";
import PropTypes from 'prop-types';
// import * as ACTIONS from "../../store/actions/pokemonAction";
import {
    allPokemonURL,
    initialURL
} from "../../services/common.service";

export const PokemonProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    var batchURL = useRef(initialURL);
    const setAppLoading = (loading) => {
        dispatch({
            type: "ACTIONS.SET_API_CALL_INPROGRESS",
            payload: loading,
        });
    };
    const setLoadMoreDataInprogress = (loading) => {
        dispatch({
            type: "ACTIONS.SET_LOAD_MORE_API_CALL_INPROGRESS",
            payload: loading,
        });
    };

    const getPokemonData = async (isReset = false) => {
        if (isReset) {
            batchURL.current = initialURL;
        }
        if (!batchURL.current) return;
        setLoadMoreDataInprogress(true);
        const resp = await fetch(batchURL.current);
        const { next, results } = await resp.json();

        batchURL.current = next;
        const pokemonsList = await getPokemonDetailsListByUrl(results);
        setPokemonList(pokemonsList);
        setLoadMoreDataInprogress(false);
    };

    const getPokemonDetailsListByUrl = async (results) => {
        const pokemonsDetailsList = await Promise.all(
            results.map(async (pokemon) => {
                const response = await fetch(pokemon.url);
                const res = response.json();
                return res;
            })
        );
        return pokemonsDetailsList
    }

    const getAllPokemonDataList = async () => {
        const resp = await fetch(allPokemonURL);
        const { results } = await resp.json();
        dispatch({
            type: "ACTIONS.SET_ALL_POKEMON_LIST",
            payload: results,
        });
    };

    const setPokemonList = (pokemonsList) => {
        dispatch({
            type: "ACTIONS.SET_POKEMON_LIST",
            payload: pokemonsList,
        });
    }

    useEffect(() => {
        getPokemonData().then(() => state.isLoading && setAppLoading(false));
        getAllPokemonDataList();
    }, []);

    return (
        <PokemonContext.Provider
            value={{
                state,
                dispatch,
                getPokemonData,
                getPokemonDetailsListByUrl,
                setAppLoading
            }}
        >
            {children}
        </PokemonContext.Provider>
    );
}

PokemonProvider.propTypes = {
    children: PropTypes.any,
}
