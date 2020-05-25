import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch, Redirect, Router } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './dashboard';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

function App() {
    return (
        // <Provider>
            <Router history={history}>
                <Switch>
                    <Redirect exact from="/" to="/login" /> 
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/dashboard" component={Dashboard} />
                </Switch>
            </Router>
        // </Provider>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
