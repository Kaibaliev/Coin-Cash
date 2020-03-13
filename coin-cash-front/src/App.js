import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {useRoutes} from "./routes";


export default function App() {

    const routes = useRoutes(false);

    return (
        <Router>
            <div className='container'>
                {routes}
            </div>
        </Router>
    )


};
