import React from 'react';
import {useNavigate } from 'react-router-dom';

const ButtonBack = (props) => {

    const navigate = useNavigate();

    const buttonHandler = () => {
        if (props.to) {
            navigate(props.to);
        } else {
            navigate(-1);
        }

        
    }

    return (
    <button onClick={buttonHandler}className="btn_back font-bold mt-20 text-white border-2 py-2 px-5 rounded-md inline-block hover:bg-black hover:text-white">Regresar</button>
    )
};

export default ButtonBack;
