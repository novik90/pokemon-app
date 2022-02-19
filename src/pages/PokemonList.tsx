import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Pagination from "../component/Pagination";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { fetchPokemons } from "../store/action-creator/pokemon";

const PokemonList: React.FC = () => {
    const { data, error, loading } = useTypeSelector((state) => state.pokemon);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPokemons());
    }, []);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        return <h1>{error}</h1>;
    }

    console.group("data")
    console.log(data.count);
    console.log(data.next);
    console.log(data.previous);
    console.log(data.results);
    console.groupEnd();

    return (
        <div>
            <ul>
                {data.results.map(i => 
                    <li key={i.name}><a href={i.name}>{i.name}</a></li>    
                )}
            </ul>
            <Pagination next={data.next} previous={data.previous} />
        </div>
    );
};

export default PokemonList;
