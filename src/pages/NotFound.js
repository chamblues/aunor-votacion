import React from 'react';
import titleImage from '../assets/img/avanzando-juntos.png';
import ButtonBack from '../components/ButtonBack'

const NotFound = () => {
    return (
        <div className="container mx-auto">
            <div className="text-center">
                <img src={titleImage} alt="Programa ReconoSER AUNOR" className="inline-block" />
                <h1 className="text-white text-3xl mt-10">Lo sentimos, la página solicitada no existe</h1>
                <ButtonBack to="/"/>
            </div>

        </div>
    );
};

export default NotFound;
