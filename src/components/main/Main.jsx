import React from 'react';
import cl from './main.module.css';
import AnimeCard from "./AnimeCard";

const Main = (props) => {
    return (
        <div className={cl.main}>
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
            <div className={cl.content}>
                <div>
                    {props.animeList && props.animeList.map(anime => (
                        <AnimeCard
                            anime={anime}
                            key={anime.mal_id}/>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Main;