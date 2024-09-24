import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FavoritesProvider } from '../context/FavoritesContext';
import Home from '../components/Home';
import Details from '../components/Details';
import Navbar from '../components/Navbar';

const App = () => {
    return (
        <FavoritesProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/details/:id" element={<Details />} />
                </Routes>
            </Router>
        </FavoritesProvider>
    );
};

export default App;
