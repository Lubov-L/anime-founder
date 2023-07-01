import React from 'react';
import cl from './main.module.css';

const Main = () => {
    return (
        <div className={cl.main}>
            <div className={cl.search_block}>
                <input type="text" placeholder="Search Anime, Manga, and more..." className={cl.search}/>
                <button>search</button>
            </div>
        </div>
    );
};

export default Main;