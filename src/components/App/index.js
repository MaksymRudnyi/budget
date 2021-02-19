import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import { open } from '../../utils/indexdb';
import Home from '../Home';
import About from '../About';
import Statistics from '../Statistics';
import Header from '../Header';

import { Wrapper, GlobalStyle } from './styles'

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        open().then(() => {
            this.setState({
                loading: false
            })
        }).catch(() => {
            console.error('Помилка')
        });
    }

    render() {
        if (this.state.loading) {
            return <div>Loading...</div>
        };

        return (
            <Router>
                <Wrapper>
                    <GlobalStyle/>
                    
                        <Header/>
    
                        <Switch>
                            <Route path="/about">
                                <About />
                            </Route>
                            <Route path="/statistics">
                                <Statistics />
                            </Route>
                            <Route path="/">
                                <Home />
                            </Route>
                            </Switch>
                </Wrapper>
            </Router>
        )
    }
    
}

  export default App;