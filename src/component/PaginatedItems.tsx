import React, { useState, useEffect, ChangeEventHandler } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { PokemonUrl } from "../models/pokemon";
import classes from "./Pagination.module.css";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { useDispatch } from "react-redux";
import { addPokemonToCompare, fetchPokemonDetails } from "../store/action-creator/pokemon";

const PaginatedItems: React.FC<{
    itemsPerPage: number;
    data: PokemonUrl[];
    changeItems: ChangeEventHandler<HTMLSelectElement>;
}> = (props) => {
    const [currentItems, setCurrentItems] = useState(props.data);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    const {data, loading} = useTypeSelector(state => state.pokemonDetails);
    const {data: dd, loading: ll} = useTypeSelector(state => state.compare);
    const dispatch = useDispatch();

    useEffect(() => {
        const endOffset = itemOffset + props.itemsPerPage;
        setCurrentItems(props.data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(props.data.length / props.itemsPerPage));
    }, [itemOffset, props.itemsPerPage]);

    const pageClickHandler = (event: { selected: number }) => {
        const newOffset =
            (event.selected * props.itemsPerPage) % props.data.length;
        setItemOffset(newOffset);
    };

    const addPokemonHandler = (e: string) => {
        // dispatch(fetchPokemonDetails(e));
    }

    return (
        <>
            <div className={classes["list-group"]}>
                {currentItems.map((i) => (
                    <div key={i.name}>
                        <Link
                            className={`${classes["list-group-item"]} ${classes["list-group-item-action"]}`}
                            to={i.name}
                        >
                            {i.name}
                        </Link>
                        {/* <button type="button" onClick={() => addPokemonHandler(i.name)}>Add</button> */}
                    </div>
                ))}
            </div>
            <div className={classes.paginationBox}>
                <ReactPaginate
                    previousLabel="<<"
                    nextLabel=">>"
                    breakLabel="..."
                    onPageChange={pageClickHandler}
                    pageRangeDisplayed={3}
                    pageCount={pageCount}
                    className={classes.pagination}
                    marginPagesDisplayed={1}
                    pageLinkClassName={classes.pagination__link}
                    breakLinkClassName={classes.pagination__link}
                    nextClassName={classes.pagination__link}
                    previousClassName={classes.pagination__link}
                    activeLinkClassName={classes["pagination__link--active"]}
                />
                <select onChange={props.changeItems}>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
            </div>
        </>
    );
};

export default PaginatedItems;
