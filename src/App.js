import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import './App.css';
import {useState} from "react";
import Sidebar from "./components/main/Sidebar";

function App() {
    const [animeList, SetAnimeList] = useState([]);
    const [topAnime, SetTopAnime] = useState([]);
    const [search, SetSearch] = useState("");

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
