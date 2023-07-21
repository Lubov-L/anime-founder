import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import './App.css';
import {useEffect, useState} from "react";
import Sidebar from "./components/main/Sidebar";

function App() {
    const [animeList, SetAnimeList] = useState([]);
    const [topAnime, SetTopAnime] = useState([]);
    const [search, SetSearch] = useState("");

    const GetTopAnime = async () => {
        const temp = await fetch('https://api.jikan.moe/v4/top/anime')
            .then(res => res.json());

        SetTopAnime(temp.data.slice(0, 5));
    }

    const HandleSearch = e => {
        e.preventDefault();

        FetchAnime(search);
    }

    const FetchAnime = async (query) => {
        const temp = await fetch(`https://api.jikan.moe/v4/anime?q=${query}&order_by=title&sort=asc&limit=10`)
            .then(res => res.json());

        SetAnimeList(temp.results);
    }

    useEffect(() => {
        GetTopAnime();

    }, []);

    return (
        <div className="App">
            <Header/>
            <Main
                HandleSearch={HandleSearch}
                search={search}
                SetSearch={SetSearch}
                animeList={animeList}/>
            <Sidebar
                topAnime={topAnime} />
            <Footer/>
        </div>
    );
}

export default App;
