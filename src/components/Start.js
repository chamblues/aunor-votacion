import React, { useState } from 'react'
import AunorFest from '../assets/img/aunor-fest.png'
import Calendar from '../assets/img/calendar.png'
import BtnVideo from '../assets/img/video-button.png'
import Modal from 'react-modal';

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

Modal.setAppElement('#root');

const Start = (props) => {

    const [modalIsOpen, setIsOpen] = React.useState(false);

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

    const pageHandler = () => {
        props.onPage('Welcome')
    }

    return (
        <div className="py-5">
            <div className="md:w-3/4 mx-auto text-center relative">
                <img src={AunorFest} alt="Programa ReconoSER AUNOR" className="inline-block" />
                <h1 className="color-green text-3xl md:text-4xl font-bold mt-3">¡Ha llegado el momento de celebrar nuestros logros junto a las <span className="color-orange">personas que nos inspiran!</span></h1>
                <h4 className="mt-3 text-xl md:text-2xl font-medium color-gray">Únete a este evento virtual donde tendremos reconocimientos, premios, juegos, sorpresas y mucha diversión.</h4>
                <div className="mt-5 mb-5">
                    <img src={Calendar} alt="" className="inline-block w-3/4 md:w-auto" />
                </div>
                {/* <img src={BtnVideo} onClick={openModal} className="inline-block md:absolute top-0 right-0 cursor-pointer heartbeat" alt="" /> */}
            </div>
            <div className="md:w-6/12 mx-auto text-center">
                <h3 className="color-green text-2xl font-bold text-center">
                    ¡Vota aquí por tu video favorito para el Reconocimiento <span className="color-orange">SER MODELOS!</span>
                </h3>
                <button className="btn_vota inline-block font-bold text-2xl md:text-3xl mt-5 py-2 px-8 rounded-md" onClick={pageHandler}>VOTACIONES AQUÍ</button>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Aunor Video"
            >
                <video className="w-full h-72" controls>
                    <source src="/assets/media/CriseldaRodriguez-PeajeFortaleza-Excelenciaenelservicio.mp4" type="video/mp4" />
                </video>
            </Modal>
        </div>
    )
}

export default Start
