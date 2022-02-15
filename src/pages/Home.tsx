import React, { ChangeEvent, ChangeEventHandler, FC, FormEvent, useEffect, useState } from "react";
import { PokemonUrl } from "../models/pokemon";
import PokemonItem from "./PokemonItem";

type Option = {
    value: string;
    label: string;
}

type Props = {
    options: Option[];
    value: string;
    onChange: (value: string) => void;
}

const Home = () => {
    const [items, setItems] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const [offsetPage, setOffsetPage] = useState(0);

    const [pokemons, setPokemons] = useState<PokemonUrl[]>([]);

    const changeItemsHandler = (num: FormEvent<HTMLSelectElement>) => {
        setItems(parseInt(num.currentTarget.value));
    }
    
    const handlePrevPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
        setOffsetPage((prev) => prev - items);
    };

    const handleNextPage = () => {
        setCurrentPage((nextPage) => nextPage + 1);
        setOffsetPage((prev) => prev + items);
    };

    const fetchPokemons = async () => {
        await fetch(
            `https://pokeapi.co/api/v2/pokemon/?offset=${offsetPage}&limit=${items}`
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setPokemons(data.results);
            });
    };

    useEffect(() => {
        fetchPokemons();
    }, [offsetPage, items]);

    return (
        <div>
            <h1>Home Page</h1>
            <ul>
                {pokemons.map((i) => (
                    <PokemonItem pokemon={i} key={i.name}>
                        <p>{i.name}</p>
                    </PokemonItem>
                ))}
            </ul>

            <div>
                <button
                    type="button"
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                >
                    &larr;
                </button>
                <span>
                    Page {currentPage} of {items}
                </span>
                <button
                    type="button"
                    onClick={handleNextPage}
                    disabled={currentPage === items}
                >
                    &rarr;
                </button>
                <select onChange={changeItemsHandler}>
                    <option value="5" >5</option>
                    <option value="15" >15</option>
                    <option value="50" >50</option>
                </select>
            </div>
        </div>
    );
};

export default Home;
