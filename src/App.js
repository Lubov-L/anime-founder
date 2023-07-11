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
        const temp = await fetch('https://api.jikan.moe/v4/anime/1/relations')
            .then(res => res.json());

        SetTopAnime(temp.top);
    }

    useEffect(() => {
        GetTopAnime();

    }, []);

    console.log(topAnime);

    return (
        <div className="App">
            <Header/>
            <Main>
                <Sidebar topAnime={topAnime}/>
            </Main>
            <Footer/>
        </div>
    );
}

export default App;
