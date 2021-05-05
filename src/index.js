import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import App from './components/App';
import { AppContextProvider } from './providers/context';

ReactDOM.render(
    <React.StrictMode>
        <AppContextProvider>
            <App/>
        </AppContextProvider>
    </React.StrictMode>, document.getElementById('root'));


serviceWorkerRegistration.register();