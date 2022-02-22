import React, { FormEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import PaginatedItems from "../component/PaginatedItems";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { PokemonUrl } from "../models/pokemon";
import { fetchPokemons } from "../store/action-creator/pokemon";
import classes from "./PokemonList.module.css";

const PokemonList: React.FC = () => {
    const [itemsPer, setItemsPer] = useState(10);
    const [searchRes, setSearchRes] = useState<PokemonUrl[]>();
    const [isSearchResults, setIsSearchResults] = useState(true);

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
        setItemsPer(parseInt(event.currentTarget.value));
    };

    const searchHandler = (event: FormEvent<HTMLInputElement>) => {
        const value = event.currentTarget.value.toLowerCase();

        const results = data.results.filter((i) =>
            i.name.toLowerCase().includes(value)
        );
        if (results.length > 0) {
            setIsSearchResults(true);
            setSearchRes(results);
        }
        if (value === "") {
            setSearchRes(undefined);
        }
        if (value !== "" && results.length === 0) {
            setIsSearchResults(false);
        }
    };

    return (
        <div>
            <input
                autoComplete="off"
                onChange={searchHandler}
                className={classes.form_control}
                type="search"
                placeholder="Search pokemon"
            />
            {searchRes && isSearchResults && (
                <ul className={classes.search_list}>
                    {searchRes.map((i) => (
                        <li key={i.name}>
                            <Link to={i.name}>{i.name}</Link>
                        </li>
                    ))}
                </ul>
            )}
            {searchRes && !isSearchResults && <h3>No Pokemon Found</h3>}
            {!loading && !searchRes && (
                <div className={classes.paginationBox}>
                    <PaginatedItems
                        itemsPerPage={itemsPer}
                        data={data.results}
                        changeItems={changeItemsHandler}
                    />
                </div>
            )}
        </div>
    );
};

export default PokemonList;
