import React, { FormEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import PaginatedItems from "../component/PaginatedItems";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { fetchPokemons } from "../store/action-creator/pokemon";
import classes from "./PokemonList.module.css";

const PokemonList: React.FC = () => {
    const [itemsPer, setItemsPer] = useState(10);

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

    const changeItemsHandler = (event: FormEvent<HTMLSelectElement>) => {
        setItemsPer(parseInt(event.currentTarget.value))
    };

    return (
        <div>
            {!loading && (
                <div className={classes.paginationBox}>
                    <PaginatedItems
                        itemsPerPage={itemsPer}
                        data={data.results}
                        changeItems={changeItemsHandler}
                    />
                </div>
            )}
            {/* <ul>
                {data.results.map((i) => (
                    <li key={i.name}>
                        <a href={i.name}>{i.name}</a>
                    </li>
                ))}
            </ul> */}
        </div>
    );
};

export default PokemonList;
