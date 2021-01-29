import React from 'react';
import PropTypes from 'prop-types';
import ColorBoxC from "../components/ColorBox/index";
import Count from "./Count";

Index.propTypes = {

};

function Index(props) {
    return (
        <div>
            <ColorBoxC/>
            <Count/>
        </div>
    );
}

export default Index;
