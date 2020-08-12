import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import CaseData from './Covid-api';
import Home from './Home';
import { GitUser } from './githubApi';
import QuestionCard from './questionCard'; 

const Navbar = () => {
    return (
        <Router>
            {/* <h3 className="my-3 text-center"> Moin's first app </h3> */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                <a className="d-lg-none navbar-brand" href="/">QUIZ App  </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        {/* <li className="nav-item active">
                            <Link className="nav-link" to="/"> HOME </Link>
                            <span className="sr-only">(current)</span>
                        </li>

                        <li className="nav-item active">
                            <Link className="nav-link" to="/covid-api"> COVID API </Link>
                            <span className="sr-only">(current)</span>
                        </li>

                        <li className="nav-item active">
                            <Link className="nav-link" to="/git-api"> GITHUB API </Link>
                            <span className="sr-only">(current)</span>
                        </li> */}

                        <li className="nav-item active">
                            <Link className="nav-link" to="/quiz"> QUIZ APP </Link>
                            <span className="sr-only">(current)</span>
                        </li>

                    </ul>
                </div>
            </nav>
            <Switch>
                <Route exact path="/"> <Home />  </Route>
                <Route exact path="/covid-api"> <CaseData />  </Route>
                <Route exact path="/git-api"> <GitUser />  </Route>
                <Route exact path="/quiz"> <QuestionCard />  </Route> 
            </Switch>
        </Router>
    )
}
export default Navbar; 