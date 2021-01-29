import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';

//import
import { Button } from 'antd';
import { PlusOutlined,MinusOutlined } from '@ant-design/icons';

Count.propTypes = {
    count : PropTypes.number,
};

function Count(props) {
    const [count,setCount] = useState(0);
    return (
        <div>
            {count}
            <Button type="primary" shape="circle" icon={<PlusOutlined />} onClick = {() => setCount(x=>x+1)}/>
            <Button type="primary" shape="circle" icon={<MinusOutlined />} onClick = {() => setCount(x=>x-1)}/>
        </div>
    );
}

export default Count;
