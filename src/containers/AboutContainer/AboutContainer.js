import React, { useEffect } from 'react';
import { connect } from "react-redux";
import About from "../../components/About";
import { getAdminData } from "../../state/actions/getActions";
import { dataSelector } from "../../state/selectors/gets";

const AboutContainer = ({ data = [], getAdminDataDispatchAction }) => {
    useEffect(() => {
        getAdminDataDispatchAction();
    }, [getAdminDataDispatchAction]);
    return <About data={data} />;
};

const dispatchActions = (dispatch) => ({
    getAdminDataDispatchAction: () => dispatch(getAdminData())
});

export default connect (
    dataSelector,
    dispatchActions
)(AboutContainer);