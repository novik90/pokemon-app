import React, { useState, useEffect, ChangeEventHandler } from "react";
import ReactPaginate from "react-paginate";
import { PokemonUrl } from "../models/pokemon";
import classes from "./Pagination.module.css";

const PaginatedItems: React.FC<{ itemsPerPage: number; data: PokemonUrl[]; changeItems: ChangeEventHandler<HTMLSelectElement> }> = (
    props
) => {
    const [currentItems, setCurrentItems] = useState(props.data);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

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

    return (
        <div>
            <div className={classes["list-group"]}>
                {currentItems.map((i) => (
                    <a
                        className={`${classes["list-group-item"]} ${classes["list-group-item-action"]}`}
                        key={i.name}
                        href={i.name}
                    >
                        {i.name}
                    </a>
                ))}
            </div>
            <div className={classes.paginationBox}>
                <ReactPaginate
                    breakLabel="..."
                    onPageChange={pageClickHandler}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    className={classes.pagination}
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
        </div>
    );
};

export default PaginatedItems;
