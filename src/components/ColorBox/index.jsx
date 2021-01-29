import React,{ useEffect, useState} from 'react';
import PropTypes from 'prop-types';

ColorBoxC.propTypes = {
     color : PropTypes.object,
};

function ColorBoxC(props) {
    const [color,setColor] = useState('white');
    <div style={{width : 50, height: 50}}></div>;
    return (
        <div>
            {color}
            <button onClick={()=> setColor }>Black</button>
            <button onClick={()=> setColor('pink')}>Pink</button>
        </div>
    );
}

export default ColorBoxC;
