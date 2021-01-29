import React from "react";
import PropTypes from "prop-types"; // add package prop-types
import  './styles.scss';

function Loading(props) {
 return (
     <div>
         Loading
     </div>
 ) ;
}
// declare all props used in this component
Loading.propTypes = {

};
// don't forget to set default value for non-required props
Loading.defaultProps = {

};
export default Loading;
