import React, {Component} from 'react';
import './App.css';
import Index from './pages/Index';
import {
    Route, Routes
} from "react-router-dom";
import * as PropTypes from "prop-types";
import Header from "./Components/Shared/Header";
import CharacterPage from "./pages/Character";
import EpisodesPage from "./pages/Episodes";

Routes.propTypes = {children: PropTypes.node};

class App extends Component {

    render() {
        return (
            <>
                <Header/>
                <Routes>
                    <Route path="/" element={<div>Main</div>}/>
                    <Route path="/characters" element={<Index/>}/>
                    <Route path="/character/:id" element={<CharacterPage/>}/>
                    <Route path="/characters/:page" element={<Index/>}/>
                    <Route path="/episodes" element={<EpisodesPage/>}/>
                    <Route path="/episodes/:page" element={<EpisodesPage/>}/>
                    <Route path="*" element={<div>Not found</div>}/>
                </Routes>
            </>

        );
    }
}

export default App