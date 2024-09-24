import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
                <Switch>
                    <Route path="/people" component={People} />
                    <Route path="/planets" component={Planets} />
                    <Route path="/vehicles" component={Vehicles} />
                    <Route path="/favorites" component={Favorites} />
                    <Route path="/details/:id" component={Details} />
                    <Route path="/" exact component={People} />
                </Switch>
            </Router>
        </FavoritesProvider>
    );
};

export default App;
