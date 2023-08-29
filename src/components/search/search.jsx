import React from 'react';
import cl from "../main/main.module.css";

const Search = (props) => {
    return (
        <div className={cl.search_block}>
            <form
                onSubmit={props.HandleSearch}>
                <input
                    type="search"
                    placeholder="Search Anime, Manga, and more..."
                    required
                    value={props.search}
                    onChange={e => props.SetSearch(e.target.value)}
                    className={cl.search}/>
                <button>search</button>
            </form>
        </div>
    );
};

export default Search;