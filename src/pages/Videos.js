import React, { useState, useEffect, useContext } from 'react'
import AuthContext from '../store/auth-context'
import { Link, useParams, useNavigate } from 'react-router-dom'
import classes from './Video.module.css'
import axiosInstance from '../helpers/axios-instance.js'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ButtonBack from '../components/ButtonBack'

const publicUrl = process.env.PUBLIC_URL;


const Videos = (props) => {
    const [videoList, setVideoList] = useState([])
    const authCtx = useContext(AuthContext)
    const navigate = useNavigate();

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    className: "center",
                    centerMode: true,
                    infinite: true,
                    centerPadding: "60px",
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ]
    };

    const { categoryId } = useParams();

    useEffect(() => {
        const getVideos = async () => {
            await axiosInstance.get('/videos', {
                params: {
                    category: categoryId
                }
            }).then((response) => {
                console.log(response.data)
                if (typeof response.data != 'undefined' && response.data.length > 0) {
                    setVideoList(response.data)
                }
            })
        }
        getVideos();
    }, [categoryId])



    const sendVote = async (video_id, dni, category) => {

        const isVoted = await axiosInstance.get('/vote', {
            params: {
                videoId: video_id,
                dni: dni,
                category: category,
            }
        })

        if (typeof isVoted.data === 'undefined' || isVoted.data.length === 0) {
            await axiosInstance.post('/vote', {
                videoId: video_id,
                dni: dni,
                category: category, 
            }).then((response) => {
                if (response.data.status == 'successful') {
                    navigate('/gracias', {replace: true})
                }



            })
        } else {
            alert("Usted ya votó en esta categoría.")
        }




    }



    const voteHandler = (event) => {
        const videoVoted = event.target.dataset.video_id
        const videoCat = event.target.dataset.category
        const getDni = authCtx.dni


        sendVote(videoVoted, getDni, videoCat)

    }


    return (
        <section className="section_video mt-3 lg:mt-12 pb-5">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row text-center">
                    <img src={`${publicUrl}/images/cat-${categoryId}.png`} alt="" className="w-40 lg:w-auto h-auto mx-auto" />
                    <h1 className="text-white lg:text-5xl text-3xl guardianBold mt-16 text-center">¡Vota por el candidato de tu preferencia!</h1>
                    <img src={`${publicUrl}/images/avanzando-juntos.png`} alt="" />
                </div>

                <div className="slick_slider mt-20">
                    <Slider {...settings}>
                        {
                            videoList.map((item) => {
                                return (
                                    <div key={item.id} className="">
                                        <div className={classes.video_box} style={{ backgroundImage: `url(${publicUrl}/images/bg-videos.png)` }}>
                                            <video className="w-full h-60 bg-black" controls>
                                                <source src={item.source} type="video/mp4" />
                                            </video>
                                        </div>
                                        <div className="video_detail justify-around flex py-5">
                                            <div className="text-white">
                                                <h2 className="video_name font-bold text-2xl">{item.title}</h2>
                                                <div className="video_author italic text-sm">Cargo: {item.author}</div>
                                                <div className="video_category italic text-sm text-yellow-200 mb-5">Representante del equipo</div>
                                            </div>
                                            <div className="team">
                                                <img src={`${publicUrl}/images/team-1.png`} alt="" />
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <button className={`${classes.btn_vote} text-white hover:text-yellow-300 text-xl lg:text-3xl text-center guardianBold`} style={{ backgroundImage: `url(${publicUrl}/images/btn-votar.png)` }} onClick={voteHandler} data-video_id={item.id} data-category={item.category}>Votar</button>
                                        </div>


                                    </div>
                                )
                            })

                        }
                    </Slider>
                </div>



                <div className="text-right">
                    <ButtonBack />
                </div>
            </div>
        </section>
    )
}

export default Videos
