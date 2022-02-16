import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { PokemonUrl } from "../models/pokemon";
import PokemonItem from "./PokemonItem";

const Home = () => {
    const searchInputRef = useRef<HTMLInputElement>(null);
    const [count, setCount] = useState(0);
    const [limit, setLimit] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const [offsetPage, setOffsetPage] = useState(0);
    const [pokemons, setPokemons] = useState<PokemonUrl[]>([]);
    const [allPokemons, setAllPokemons] = useState<PokemonUrl[]>([]);    

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

    const fetchPokemons = async (a: number, b: number, c?: boolean) => {
        let response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/?offset=${a}&limit=${b}`
        );
        // .then((response) => {
        //     return response.json();
        // })
        // .then((data) => {
        //     const pages = data.count / limit;
        //     setCount(pages);
        //     setPokemons(data.results);
        // });
        if (c) {
            response.json().then((data) => {
                setAllPokemons(data.results);
            });
            return;
        }

        if (response.ok) {
            response.json().then((data) => {
                const pages = data.count / limit;
                setCount(pages);
                setPokemons(data.results);
            });
        } else {
            alert("Ошибка HTTP: " + response.status);
        }
    };

    useEffect(() => {
        fetchPokemons(offsetPage, limit);
        fetchPokemons(0, -1, true);
    }, [offsetPage, limit]);

    const search = (event: ChangeEvent) => {
        event.preventDefault();
        let elem = event.target as HTMLInputElement;
        let result = allPokemons.filter((i) =>
            i.name.toLowerCase().includes(elem.value.toLowerCase())
        );
        if (elem.value !== "") {
            setPokemons(result);
        } else fetchPokemons(offsetPage, limit);
    };

    return (
        <div>
            <h1>Home Page</h1>
            <form>
                <input
                    id="searchText"
                    type="text"
                    ref={searchInputRef}
                    autoComplete="off"
                    onChange={(event) => search(event)}
                />
            </form>
            <ul>
                {pokemons.length > 0 
                && pokemons.map((i) => (
                    <PokemonItem pokemon={i} key={i.name}>
                        <p>{i.name}</p>
                    </PokemonItem>
                )) 
                || <p>Pokemons not found</p>}
            </ul>
            {!searchInputRef.current?.value && (
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
            )}
        </div>
    );
};

export default Home;
