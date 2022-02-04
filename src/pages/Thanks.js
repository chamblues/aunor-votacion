import React from 'react'
import ButtonBack from '../components/ButtonBack'
import ThanksImg from '../assets/img/thanks.png'
// import Hands1 from '../assets/img/hands-1.png'
// import Hands2 from '../assets/img/hands-2.png'
// import Hands3 from '../assets/img/hands-3.png'
// import Hands4 from '../assets/img/hands-4.png'
import styles from './Thanks.module.css'

const publicUrl = process.env.PUBLIC_URL;

const Thanks = (props) => {



    return (
        <section className="section_video mt-12 pb-10">
            <div className="title_page text-center w-full mb-12">
                <img src={`${publicUrl}/images/avanzando-juntos.png`} alt="" className="inline-block"/>
                <h2 className="text-3xl text-white mt-5 font-bold"> ¡GRACIAS POR VOTAR! <br />
                    Recuerda que puedes emitir un voto por cada categoría.</h2>
                    <ButtonBack to="/categorias" text="Volver a Categorías"/>
            </div>
            <div className="thanks_image text-center">
                <img src={ThanksImg} alt="" className={styles['scale-up-center'] + " inline-block"} />
            </div>
        </section>
    )
}

export default Thanks
