import React, {Component} from 'react';
import {
    Route, Routes
} from "react-router-dom";
import * as PropTypes from "prop-types";
import Header from "./Components/Shared/Header";
import CharacterPage from "./pages/Character";
import EpisodesPage from "./pages/Episodes";
import EpisodePage from "./pages/Episode";
import CharactersPage from "./pages/Characters";
import GlobalStyle from './globalStyles';
import IndexPage from "./pages/Index";

Routes.propTypes = {children: PropTypes.node};

class App extends Component {

    render() {
        return (
            <>
                <GlobalStyle />
                <Header/>
                <Routes>
                    <Route path="/" element={<IndexPage/>}/>
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