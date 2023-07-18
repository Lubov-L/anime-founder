import React from 'react';
import cl from './main.module.css';

const Sidebar = ({topAnime}) => {
    return (
        <aside>
            <nav>
                <h3>Top Anime</h3>
                {topAnime.map(anime => (
                    <a
                        className={cl.top_link}
                        href={anime.url}
                        target="_blank"
                        rel="noreferrer"
                        key={anime.mal_id}>
                        {anime.title}
                    </a>
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;