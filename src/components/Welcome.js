import React, { useState, useEffect } from 'react'
import Reconoce from '../assets/img/titulo-aunor.png'
import { VscLoading } from "react-icons/vsc";
import axiosInstance from '../helpers/axios-instance.js'


const Welcome = (props) => {
    const [valid, setValid] = useState(false)
    const [user, setUser] = useState()

    const getUser = (dni) => {
        axiosInstance.get('/users.php', {
            params: {
                dni: dni
            }
        }).then(response => {

            if (typeof response.data != 'undefined' && response.data.length > 0) {
                sessionStorage.setItem('dni', response.data[0].dni);
                setUser(response.data[0].dni)
                props.onPage('Category')
                console.log('user identified')
            } else {
                alert("El DNI no se encuentra en nuestra base de datos.")
                setValid(false)
            }


        }).catch(error => {
            console.log(error)
        })
    }

    const inputHandler = (event) => {
        const enteredDni = event.target.value
        const dniLength = 8
        if (enteredDni.length === dniLength) {
            setValid(true)
            getUser(enteredDni)
        }
    }



    return (
        <>
            <img src={Reconoce} alt="Programa ReconoSER AUNOR" />
            <div className="formDni">
                <form action="">
                    <div className="form-group my-8 w-64 relative">
                        <input type="text"
                            name="dni"
                            className="border-2 w-full rounded text-center py-2 px-5"
                            placeholder="Ingresa tu DNI"
                            onChange={inputHandler}
                            maxLength="8"
                        />
                        {valid && <VscLoading className="loading text-xl inline-block absolute top-3 -right-8" />}
                    </div>
                </form>
            </div>
            <div className="text-center">
            <button className="btn_back font-bold border-2 py-2 px-5 mt-5 rounded-md inline-block hover:bg-black hover:text-white" onClick={() => props.onPage('Start')}>Regresar</button>
            </div>
        </>
    )
}

export default Welcome
