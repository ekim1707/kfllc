import React from 'react';
import { Switch, Router, Route } from "react-router-dom";
import history from "./history";
import NavContainer from "./containers/NavContainer";
import HomeContainer from "./containers/HomeContainer";
import AboutContainer from "./containers/AboutContainer";
import ResourcesContainer from "./containers/ResourcesContainer";
import ContactContainer from "./containers/ContactContainer";
import PrivacyPolicy from "./components/FooterComponents/PrivacyPolicy";
import TermsOfUse from "./components/FooterComponents/TermsOfUse";
import Help from "./components/FooterComponents/Help";
import FooterNav from "./components/FooterNav";

export default (props) => {
    return (
        <Router history={history}>
            <NavContainer />
                <Switch>
                    <Route path="/" component={HomeContainer} exact />
                    <Route path="/about" component={AboutContainer} exact />
                    <Route path="/resources" component={ResourcesContainer} exact />
                    <Route path="/contact" component={ContactContainer} exact />
                    <Route path="/privacy" component={PrivacyPolicy} exact />
                    <Route path="/terms" component={TermsOfUse} exact />
                    <Route path="/help" component={Help} exact />
                </Switch>
            <FooterNav />
        </Router>
    );
};