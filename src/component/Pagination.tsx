import React from "react";
import { useDispatch } from "react-redux";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { fetchPokemons } from "../store/action-creator/pokemon";

const Pagination: React.FC<{ next: string | null; previous: string | null }> = (
    props
) => {
    const { data, error, loading } = useTypeSelector((state) => state.pokemon);
    const dispatch = useDispatch();

    const nextPageHandler = () => {
        dispatch(fetchPokemons(props.next?.toString()));
    };

    const prevPageHandler = () => {
        dispatch(fetchPokemons(props.previous?.toString()));
    };

    return (
        <div>
            <button onClick={prevPageHandler}>previous</button>
            <button onClick={nextPageHandler}>next</button>
        </div>
    );
};

export default Pagination;
