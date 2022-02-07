import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import titleImage from '../assets/img/avanzando-juntos.png';
import Calendar from '../assets/img/calendar.png';
import BtnVideo from '../assets/img/video-button.png';
import Countdown from '../components/Countdown';




import classes from './Start.module.css'


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const Start = (props) => {

    const [modalIsOpen, setIsOpen] = useState(false);

    const dateOver= "February 10, 2022 18:00:00"


    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }



    return (
        <div className="container mx-auto pb-8">
            <div className="md:w-3/4 mx-auto text-center relative">
                <img src={titleImage} alt="Programa ReconoSER AUNOR" className="inline-block" />
                <h1 className="text-white mt-8 text-4xl lg:text-8xl font-bold guardianBold">Bienvenidos</h1>
            </div>

            <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-start w-10/12 mx-auto mt-10 text-center">
                <div className="cols mx-auto">
                <Link to="/participa" className="heartbeat btn_black bg-gradient-to-r from-bg-neutral-900 via-purple-500 to-pink-500 inline-block font-bold text-lg lg:text-2xl mt-5 py-3 px-5 lg:py-5 lg:px-8 rounded-md guardianBold">Vota aquí</Link>
                </div>
                <div className="cols mx-auto">
                <Link to="/bienvenida" className="heartbeat btn_black inline-block font-bold text-lg lg:text-2xl mt-5 py-3 px-5 lg:py-5 lg:px-8 rounded-md guardianBold">Mira el evento <br /> aquí</Link>
                <Countdown finalTime={dateOver} />
                </div>
            </div>


        </div>
    )
}

export default Start
