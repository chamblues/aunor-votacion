import React from 'react'
import { Link } from 'react-router-dom'
import titleImage from '../assets/img/avanzando-juntos.png';
import ButtonBack from '../components/ButtonBack'

import { BiPlay } from "react-icons/bi";

const Category = (props) => {

    const categoryHandler = (event) => {
        event.preventDefault();
        const categoryElement = event.currentTarget.dataset.category
        props.onSelectedCategory(categoryElement)
    }


    return (
        <div className="section_category w-full py-5">
            <div className="container mx-auto">
                <div className="text-center">
                    <img src={titleImage} alt="Programa ReconoSER AUNOR" className="inline-block" />
                    <h1 className="text-white lg:text-5xl text-3xl guardianBold mt-10">Haz click en cualquiera de las categorías</h1>
                </div>
                <div className="grid grid-cols-4 lg:grid-cols-6 justify-items-center mt-8">
                    <Link to="/categorias/baile-grupal" className="heartbeat col-span-2 lg:mr-10 lg:ml-10"><img src="images/cat-baile-grupal.png" alt="" /></Link>
                    <Link to="/categorias/canto" className="heartbeat col-span-2 lg:mr-10 lg:ml-10"><img src="images/cat-canto.png" alt="" /></Link>
                    <Link to="/categorias/talento-creativo" className="heartbeat col-span-2 lg:mr-10 lg:ml-10"><img src="images/cat-talento-creativo.png" alt="" /></Link>
                    <Link to="/categorias/baile" className="heartbeat lg:col-start-2 col-span-2 lg:mr-10 lg:ml-10"><img src="images/cat-baile.png" alt="" /></Link>
                    <Link to="/categorias/tiktok" className="heartbeat lg:mr-10 lg:col-start-4 col-start-2 col-span-2 lg:ml-10"><img src="images/cat-tiktok.png" alt="" /></Link>
                </div>

                <div className="text-right">
                    <ButtonBack to="/participa"/>
                </div>
            </div>

        </div>
    )
}

export default Category
