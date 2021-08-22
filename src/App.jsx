import React from "react";
import { Route } from "react-router-dom";

import { Header } from "./components";
import { Home, Cart } from "./pages";

const App = () => {
    return (
        <div className="wrapper">
            <Header />

            <div className="content">
                <Route
                    exact
                    path={process.env.PUBLIC_URL + "/"}
                    component={Home}
                />
                <Route
                    path={process.env.PUBLIC_URL + "/cart"}
                    component={Cart}
                />
            </div>
        </div>
    );
};

export default App;
