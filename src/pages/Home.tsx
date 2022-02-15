import { FormEvent, useEffect, useState } from "react";
import { PokemonUrl } from "../models/pokemon";
import PokemonItem from "./PokemonItem";

const Home = () => {
    const [count, setCount] = useState(0);
    const [limit, setLimit] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const [offsetPage, setOffsetPage] = useState(0);

    const [pokemons, setPokemons] = useState<PokemonUrl[]>([]);

    const changeItemsHandler = (num: FormEvent<HTMLSelectElement>) => {
        const pageNum = parseInt(num.currentTarget.value);

        if (pageNum > limit) {
            const resultPage = Math.ceil((currentPage * limit) / pageNum);
            const newOffsetPage = resultPage * pageNum - pageNum;
            setOffsetPage(newOffsetPage);
            setCurrentPage(resultPage);
        } else {
            const resultPage = Math.ceil((limit * 3 - limit) / pageNum + 1);
            const newOffsetPage = resultPage * pageNum - pageNum;
            setOffsetPage(newOffsetPage);
            setCurrentPage(resultPage);
        }
        setLimit(pageNum);
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
        setOffsetPage((prev) => prev - limit);
    };

    const handleNextPage = () => {
        setCurrentPage((nextPage) => nextPage + 1);
        setOffsetPage((prev) => prev + limit);
    };

    const fetchPokemons = async () => {
        await fetch(
            `https://pokeapi.co/api/v2/pokemon/?offset=${offsetPage}&limit=${limit}`
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const pages = data.count / limit;
                setCount(pages);
                setPokemons(data.results);
            });
    };

    useEffect(() => {
        fetchPokemons();
    }, [offsetPage, limit]);

    const search = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const form = event.target as HTMLFormElement;
        const input = form.querySelector('#searchText') as HTMLInputElement;
        
        alert(!input.value ? 'empty string': input.value);
    }

    return (
        <div>
            <h1>Home Page</h1>

            <form onSubmit={event => search(event)}>
                <input id="searchText" type="text" />
                <button>search</button>
            </form>

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
                    Page {currentPage} of {Math.ceil(count)}
                </span>
                <button
                    type="button"
                    onClick={handleNextPage}
                    disabled={currentPage === Math.ceil(count)}
                >
                    &rarr;
                </button>
                <select onChange={changeItemsHandler}>
                    <option value="5">5</option>
                    <option value="15">15</option>
                    <option value="50">50</option>
                </select>
            </div>
        </div>
    );
};

export default Home;
