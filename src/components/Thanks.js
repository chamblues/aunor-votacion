import React from 'react'
import Reconoce from '../assets/img/titulo-aunor.png'
import ThanksImg from '../assets/img/thanks.png'
// import Hands1 from '../assets/img/hands-1.png'
// import Hands2 from '../assets/img/hands-2.png'
// import Hands3 from '../assets/img/hands-3.png'
// import Hands4 from '../assets/img/hands-4.png'
import styles from './Thanks.module.css'

const Thanks = (props) => {
    return (
        <section className="section_video mt-12 pb-10">
            <div className="title_page text-center w-full mb-12">
                <img src={Reconoce} alt="Programa ReconoSER AUNOR" className="inline-block" />
                <h2 className="text-3xl mt-5 font-bold"> ¡GRACIAS POR VOTAR! <br />
                    Recuerda que puedes emitir un voto por pilar.</h2>
                <button className="btn_back font-bold border-2 py-2 px-5 rounded-md mt-5 hover:bg-black hover:text-white" onClick={() => props.onPage('Category')}>Volver a votar</button>
            </div>
            <div className="thanks_image text-center">
                <img src={ThanksImg} alt="" className={styles['scale-up-center'] + " inline-block"} />
            </div>
        </section>
    )
}

export default Thanks
