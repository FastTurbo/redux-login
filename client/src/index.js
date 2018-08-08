import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import NavigationBar from './components/NavigationBar';
import { BrowserRouter as Router } from 'react-router-dom'
import rootRouter from './routers'
import FlashMessagesList from './components/flash/FlashMessagesList';
import setAuthorizationToken from './utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';
import { setCurrentUser } from './actions/loginAction'


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)))

if(localStorage.jwtToken){
    setAuthorizationToken(localStorage.jwtToken)
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)))
}else{
    //this.history.push('/login')
}

ReactDOM.render(
    <Provider store={ store }>
        <Router>
            <div>
                <NavigationBar />
                <FlashMessagesList />
                { rootRouter }
            </div>
        </Router>
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
