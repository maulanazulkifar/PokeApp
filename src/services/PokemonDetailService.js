import { useQuery } from '@apollo/client'
import {GET_POKEMONS_Detail} from "./queries/GetPokemonDetail";


export const PokeDetailService = (name) => {
    const gqlVariables = {
        name: name
    };
    const { data } = useQuery(GET_POKEMONS_Detail, {
        variables: gqlVariables,
    });
    return data;
};

export default PokeDetailService;