import React from 'react';
import App from './App';
import { 
    BrowserRouter as ReactRouter,
    Route,
    Switch
} from 'react-router-dom';
import Photos from './pages/Photos';

export default class Router extends React.Component {
    render() {
        return(
            <ReactRouter>
            <App>
            <Switch>
            <Route exact path="/" component={App}></Route>
            <Route exact path="/photos" component={Photos}></Route>
            </Switch>
            </App>
        </ReactRouter>
        );
    }
}