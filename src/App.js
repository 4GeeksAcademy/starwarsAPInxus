import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FavoritesProvider } from './context/FavoritesContext';
import Navbar from './components/Navbar';
import People from './components/People';
import Planets from './components/Planets';
import Vehicles from './components/Vehicles';
import Favorites from './components/Favorites';
import Details from './components/Details';


const App = () => {
    return (
        <FavoritesProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/people" element={<People />} />
                    <Route path="/planets" element={<Planets />} />
                    <Route path="/vehicles" element={<Vehicles />} />
                    <Route path="/favorites" element={<Favorites />} />
                    <Route path="/details/:id" element={<Details />} />
                    <Route path="/" element={<People />} />
                    
                </Routes>
            </Router>
        </FavoritesProvider>
    );
};

export default App;
