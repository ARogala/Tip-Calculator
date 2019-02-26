import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
// import { Route } from 'react-router-dom';
// import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

import PrePostTaxSelect from './PrePostTaxSelect';
import Basic from './Basic';
import BasicResults from './BasicResults';

import calculator from '../images/Calculator1.svg';

class App extends Component {
    render() {
        return (
            <div className="App">
                <nav className="nav">
                    <Link to="/" className="nav__link">
                        Basic
                    </Link>
                    <Link to="/" className="nav__link">
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

                <main className="main" role="main" >
                    <p>
                        The basic tip calculator will split the bill evenly between the number of people selected on a pre
                        or post tax basis. Default calculates on a pre tax basis. The split amount may be off due to rounding. 
                    </p>
                    <PrePostTaxSelect />
                    <Basic />
                    <BasicResults />
                </main>
                <ToastContainer />
            </div>
        );
    }
}

export default withRouter(App);
