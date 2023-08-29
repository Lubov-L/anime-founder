import React from 'react';
import cl from './main.module.css';
import AnimeCard from "./AnimeCard";

const Main = (props) => {
    return (
        <div className={cl.main}>
            <div className={cl.content}>
                <div>
                    {props.animeList.map(anime => (
                        <AnimeCard
                            anime={anime}
                            key={anime.mal_id} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Main;