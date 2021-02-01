import React,{ useEffect, useState} from 'react';
import PropTypes from 'prop-types';

ColorBoxC.propTypes = {
     color : PropTypes.object,
};

function ColorBoxC(props) {
    const [color,setColor] = useState('yellow');
    return (
        <div style={{width:150, height:150}}>
            {color}
            <div style={{width:100, height:100, backgroundColor : color, display:"flex",justifyContent:"center"}}></div>
            <div style={{display : "flex", justifyContent : "flex-start" }}>
                <div>
                    <button onClick={()=> setColor('black') }>Black</button>
                </div>
                <div>
                    <button onClick={()=> setColor('pink')}>Pink</button>
                </div>
            </div>
        </div>
    );
}
export default ColorBoxC;
