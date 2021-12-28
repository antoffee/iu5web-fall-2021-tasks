import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { fetchAllCafe } from 'api/cafe/fetchAllCafe';
import { fetchAllCoffee } from 'api/coffee/fetchAllCoffee';
import { AppContext } from 'context';
import { CafePage } from 'pages/CafePage';
import { ChangeCafePage } from 'pages/ChangeCafePage';
import { ChangeCoffeePage } from 'pages/ChangeCoffeePage';
import { Details } from 'pages/Details';
import { MainPage } from 'pages/MainPage';
import { Cafe } from 'types/cafe.types';
import { Coffee } from 'types/coffee.types';

import { Loader } from 'components/Loader';
import { Navbar } from 'components/Navbar';

import './App.css';

export const App = () => {
    const [coffee, setCoffee] = useState<Coffee[]>([]);
    const [coffeeeLoaded, setCoffeeeLoaded] = useState(false);
    const [cafe, setCafe] = useState<Cafe[]>([]);
    const [cafeLoaded, setCafeLoaded] = useState(false);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (!loaded) {
            fetchAllCoffee()
                .then((coffee) => {
                    setCoffee(coffee);
                    setCoffeeeLoaded(true);
                })
                .catch((e) => console.error(e));

            fetchAllCafe()
                .then((cafe) => {
                    setCafe(cafe);
                    setTimeout(() => setCafeLoaded(true), 0);
                })
                .catch((e) => console.error(e));
            setLoaded(coffeeeLoaded && cafeLoaded);
        }
    }, [cafeLoaded, coffeeeLoaded, loaded]);

    return (
        <AppContext.Provider value={{ coffee, loaded, cafe, setLoaded }}>
            <BrowserRouter>
                <Navbar />
                {coffeeeLoaded && cafeLoaded ? (
                    <Switch>
                        <Route exact path="/">
                            <MainPage />
                        </Route>
                        <Route exact path="/create-coffee">
                            <ChangeCoffeePage />
                        </Route>
                        <Route exact path="/update-coffee/:id">
                            <ChangeCoffeePage />
                        </Route>
                        <Route exact path="/cafe">
                            <CafePage />
                        </Route>
                        <Route exact path={['/update-cafe/:id', '/create-cafe']}>
                            <ChangeCafePage />
                        </Route>
                        <Route path="/:id">
                            <Details />
                        </Route>
                    </Switch>
                ) : (
                    <Loader />
                )}
            </BrowserRouter>
        </AppContext.Provider>
    );
};
