import React, {Component} from 'react';
import './App.css';
import Index from './pages/Index';
import {
    Route, Routes
} from "react-router-dom";
import Character from "./pages/Character";
import Episode from "./pages/Episode";
import Episodes from "./pages/Episodes";
import Index_pages from "./pages/Index_pages";
import * as PropTypes from "prop-types";
import Header from "./Components/Shared/Header";
import CharacterPage from "./pages/Character";


Routes.propTypes = {children: PropTypes.node};

class App extends Component {

    render() {
        return (
            <>
                <Header/>
                <Routes>
                    <Route path="/" element={<Index/>}/>
                    <Route path="/character/:id" element={<CharacterPage/>}/>
                    <Route path="/characters/:page" element={<Index_pages/>}/>
                    <Route path="/episode/:id" element={<Episode/>}/>
                    <Route path="/episodes" element={<Episodes/>}/>
                    <Route path="*" element={<div>Not found</div>}/>
                </Routes>
            </>

        );
    }
}

export default App