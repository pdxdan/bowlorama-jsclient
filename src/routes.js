import {Router, Route, IndexRoute} from 'react-router';
import React from 'react';
import { history } from "./index";

//components
import App from './components/app.jsx';
import {MainPageContainer} from './pages/main_page.jsx';

export const openRoutes =
    <Route path="/" component={App}>
        <IndexRoute component={MainPageContainer} />
    </Route>;