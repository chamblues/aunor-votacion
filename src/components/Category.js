import React from 'react'
import Reconoce from '../assets/img/titulo-aunor.png'
import Category1 from '../assets/img/ico-seguridad.png'
import Category2 from '../assets/img/ico-sostenibilidad.png'
import Category3 from '../assets/img/ico-pasion.png'
import Category4 from '../assets/img/ico-excelencia.png'
import Category5 from '../assets/img/ico-identidad.png'
import styles from './Category.module.css'
import { BiPlay } from "react-icons/bi";

const Category = (props) => {

    const categoryHandler = (event) => {
        event.preventDefault();
        const categoryElement = event.currentTarget.dataset.category
        props.onSelectedCategory(categoryElement)
    }

    return (
        <div className="section_category w-full py-5">
            <div className="title_page text-center w-full mb-10">
                <img src={Reconoce} alt="Programa ReconoSER AUNOR" className="inline-block" />
                {/* <h1 className="titulo_aunor text-6xl font-me">Reconocimiento <br/><span><strong>SER</strong> Modelos</span></h1> */}
                <h2 className="text-xl mt-5 italic">Da tu voto con sabiduría. Solo podrás votar una vez por pilar.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-between items-center ">
                <div className={styles.col_category} data-category="Seguridad" onClick={categoryHandler}>
                    <a href="" className={`${styles.box_category} ${styles.color_seguridad}`} >
                        <img src={Category1} alt="" className="mx-auto" />
                    </a>
                    <a className="block bg-white" href=""><span className={styles.label}>SEGURIDAD</span> <span className={styles.icon}><BiPlay className="block" /></span></a>
                </div>
                <div className={styles.col_category + ' color_sostenibilidad'} data-category="Sostenibilidad" onClick={categoryHandler}>
                    <a href="" className={`${styles.box_category} ${styles.color_sostenibilidad}`} >
                        <img src={Category2} alt="" className="mx-auto" />
                    </a>
                    <a className="block bg-white" href=""><span className={styles.label}>SOSTENIBILIDAD</span> <span className={styles.icon}><BiPlay className="block" /></span></a>
                </div>
                <div className={styles.col_category + ' color_pasion'} data-category="Pasión por el Equipo" onClick={categoryHandler}>
                    <a href="" className={`${styles.box_category} ${styles.color_pasion}`} >
                        <img src={Category3} alt="" className="mx-auto" />
                    </a>
                    <a className="block bg-white" href=""><span className={styles.label}>PASIÓN POR EL EQUIPO</span> <span className={styles.icon}><BiPlay className="block" /></span></a>
                </div>
                <div className={styles.col_category + ' color_excelencia'} data-category="Excelencia en el Servicio" onClick={categoryHandler}>
                    <a href="" className={`${styles.box_category} ${styles.color_excelencia}`} >
                        <img src={Category4} alt="" className="mx-auto" />
                    </a>
                    <a className="block bg-white" href=""><span className={styles.label}>EXCELENCIA EN  <br /> EL SERVICIO</span> <span className={styles.icon}><BiPlay className="block" /></span></a>
                </div>
                <div className={styles.col_category + ' color_identidad'} data-category="Integridad Corporativa" onClick={categoryHandler}>
                    <a href="" className={`${styles.box_category} ${styles.color_identidad}`} >
                        <img src={Category5} alt="" className="mx-auto" />
                    </a>
                    <a className="block bg-white" href=""><span className={styles.label}>INTEGRIDAD <br /> CORPORATIVA</span> <span className={styles.icon}><BiPlay className="block" /></span></a>
                </div>
            </div>
            <button className="btn_back font-bold border-2 py-2 px-5 mt-5 rounded-md float-right hover:bg-black hover:text-white" onClick={() => props.onPage('Welcome')}>Regresar</button>
        </div>
    )
}

export default Category
