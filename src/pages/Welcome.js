import React, { useState, useContext} from 'react'
import AuthContext from '../store/auth-context'
import { Link, useNavigate } from 'react-router-dom'
import Reconoce from '../assets/img/titulo-aunor.png'
import { VscLoading } from "react-icons/vsc";
import axiosInstance from '../helpers/axios-instance.js'
import ButtonBack from '../components/ButtonBack'

const publicUrl = process.env.PUBLIC_URL

const Welcome = (props) => {
    const [valid, setValid] = useState(false)
    const [user, setUser] = useState()
    const authCtx = useContext(AuthContext)

    console.log(authCtx);

    const navigate = useNavigate();

    const getUser = (dni) => {
        axiosInstance.get('/users', {
            params: {
                dni: dni
            }
        }).then(response => {

            if (typeof response.data != 'undefined' && response.data.length > 0) {
                sessionStorage.setItem('dni', response.data[0].dni);
                setUser(response.data[0].dni)

                console.log('user identified')
                navigate('/categorias', { replace: true })
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
        <div className="container mx-auto text-center">
            <div className="text-center">
                <img src={`${publicUrl}/images/avanzando-juntos.png`} alt="Programa ReconoSER AUNOR" className="inline-block" />
                <h1 className="text-white lg:text-5xl text-3xl guardianBold mt-10">Ingresa tu DNI para participar</h1>
            </div>
            <div className="formDni">
                <form action="">
                    <div className="form-group mx-auto my-8 w-64 relative">
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
                <ButtonBack to="/"/>
            </div>
        </div>
    )
}

export default Welcome
