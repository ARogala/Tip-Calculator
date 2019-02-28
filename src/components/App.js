import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

import PrePostTaxSelect from './Basic/PrePostTaxSelect';
import Basic from './Basic/Basic';
import BasicResults from './Basic/BasicResults';
import SettingsAdvanced from './Advanced/SettingsAdvanced';
import Advanced from './Advanced/Advanced';
import AdvancedResults from './Advanced/AdvancedResults';

import calculator from '../images/calculator.png';

class App extends Component {
    render() {
        return (
            <div className="App">
                <nav className="nav">
                    <Link to="/" className="nav__link">
                        Basic
                    </Link>
                    <Link to="/advanced" className="nav__link">
                        Advanced
                    </Link>
                </nav>
                <header className="header">
                    <h1>Tip Calculator</h1>
                    <h2>Never feel like an idiot splitting a bill!</h2>
                    <img className="header__img" src={calculator} alt="beer" />
                </header>

                <main className="main" role="main">
                    <Route
                        exact
                        path="/"
                        render={() => (
                            <div>
                                <p className="App__paragraph">
                                    The basic tip calculator will split the bill evenly between the number of people
                                    selected on a pre or post tax basis. Default calculates on a pre tax basis. The
                                    split amount may be off due to rounding.
                                </p>
                                <PrePostTaxSelect />
                                <Basic />
                                <BasicResults />
                            </div>
                        )}
                    />

                    <Route
                        path="/advanced"
                        render={() => (
                            <div>
                                <p className="App__paragraph">
                                    The advanced tip calculator will split the bill unevenly between two through five
                                    people on a pre/before tax basis. Default splits the bill unevenly between two
                                    people. The split amount may be off due to rounding.
                                </p>
                                <SettingsAdvanced />
                                <Advanced />
                                <AdvancedResults />
                            </div>
                        )}
                    />
                </main>
                <ToastContainer />
            </div>
        );
    }
}

export default withRouter(App);
