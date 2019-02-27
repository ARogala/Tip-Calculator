import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Route } from 'react-router-dom';
// import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

import PrePostTaxSelect from './Basic/PrePostTaxSelect';
import Basic from './Basic/Basic';
import BasicResults from './Basic/BasicResults';
import SettingsAdvanced from './Advanced/SettingsAdvanced';
import Advanced from './Advanced/Advanced';

import calculator from '../images/Calculator1.svg';

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
                    <Link to="/" className="nav__link">
                        Directions
                    </Link>
                </nav>
                <header className="header">
                    <h1>Tip Calculator</h1>
                    <img className="header__img" src={calculator} alt="beer" />
                </header>

                <main className="main" role="main">
                    <Route
                        exact
                        path="/"
                        render={() => (
                            <div>
                                <p>
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
                                <p>
                                    The advanced tip calculator will split the bill unevenly between two and five
                                    people. Pre/before tax basis is the only option here. Default splits the bill
                                    unevenly between two. The split amount may be off due to rounding.
                                </p>
                                <SettingsAdvanced />
                                <Advanced />
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
