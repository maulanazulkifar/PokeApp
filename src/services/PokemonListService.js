import { useQuery } from '@apollo/client'
import {GET_POKEMONS} from "./queries/GetPokemonList";


export const PokeListService = (limit, offset) => {
    const gqlVariables = {
        limit: limit,
        offset: offset
    };
    const { data } = useQuery(GET_POKEMONS, {
        variables: gqlVariables,
    });
    return data;
};

export default PokeListService;