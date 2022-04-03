import React, {Component} from 'react';
import Characters from './pages/Characters';
import {
    Route, Routes
} from "react-router-dom";
import * as PropTypes from "prop-types";
import Header from "./Components/Shared/Header";
import CharacterPage from "./pages/Character";
import EpisodesPage from "./pages/Episodes";
import Episode from "./pages/Episode";
import EpisodePage from "./pages/Episode";
import CharactersPage from "./pages/Characters";

Routes.propTypes = {children: PropTypes.node};

class App extends Component {

    render() {
        return (
            <>
                <Header/>
                <Routes>
                    <Route path="/" element={<div>Main</div>}/>
                    <Route path="/characters" element={<CharactersPage/>}/>
                    <Route path="/character/:id" element={<CharacterPage/>}/>
                    <Route path="/characters/:page" element={<CharactersPage/>}/>
                    <Route path="/episodes" element={<EpisodesPage/>}/>
                    <Route path="/episode/:id" element={<EpisodePage/>}/>
                    <Route path="/episodes/:page" element={<EpisodesPage/>}/>
                    <Route path="*" element={<div>Not found</div>}/>
                </Routes>
            </>

        );
    }
}

export default App