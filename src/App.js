import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { FavoritesProvider } from './context/FavoritesContext';
import Home from './components/Home';
import Details from './components/Details';
import { Navbar } from './components/Navbar';

const App = () => {
    return (
        <FavoritesProvider>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/details/:id" component={Details} />
                </Switch>
            </Router>
        </FavoritesProvider>
    );
};

export default App;
