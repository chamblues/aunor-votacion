import React, { useState, useEffect } from 'react'
import Reconoce from '../assets/img/titulo-aunor.png'
import Vote from '../assets/img/vote.png'
// import Video1 from '../assets/video/video-1.mp4'
import styles from './Video.module.css'
import axiosInstance from '../helpers/axios-instance.js'


const Videos = (props) => {
    const [videoList, setVideoList] = useState([])

    const getVideos = async () => {
        await axiosInstance.get('/videos.php', {
            params: {
                category: props.selectedCategory
            }
        }).then((response) => {
            console.log(response.data)
            if (typeof response.data != 'undefined' && response.data.length > 0) {
                setVideoList(response.data)
            }
        })
    }

    const sendVote = async (video_id, dni, category) => {

        const isVoted = await axiosInstance.get('/isVoted.php', {
            params: {
                video_id: video_id,
                dni: dni,
                category: category,
            }
        })

        if (typeof isVoted.data === 'undefined' || isVoted.data.length === 0) {
            await axiosInstance.get('/vote.php', {
                params: {
                    video_id: video_id,
                    dni: dni,
                    category: category,
                    register: 'register'
                }
            }).then((response) => {
                console.log('rpta: ', response.data.rpta)
                if (response.data.rpta == 'ok') {
                    props.onVideoVote(video_id)
                }



            })
        } else {
            alert("Usted ya votó en esta categoría.")
        }




    }

    useEffect(() => {
        getVideos();
    }, [])

    const voteHandler = (event) => {
        const videoVoted = event.target.dataset.video_id
        const videoCat = event.target.dataset.category
        const getDni = sessionStorage.getItem('dni')

        sendVote(videoVoted, getDni, videoCat)

    }


    return (
        <section className="section_video mt-12 pb-5">
            <div className={styles['fade-in'] + " title_page text-center w-full mb-20"}>
                <img src={Reconoce} alt="Programa ReconoSER AUNOR" className="inline-block" />
                <h2 className="text-xl mt-5 italic">Da tu voto con sabiduría. Solo podrás votar una vez por pilar.</h2>
            </div>
            {
                videoList.map((item) => {
                    return (
                        <div key={item.id} className={styles['video_row'] + " items-center flex flex-col md:flex-row mb-10 pt-5 md:pt-0 px-5"}>
                            <div className="video_box md:w-1/2">
                                <video className="w-full h-72" controls>
                                    <source src={item.source} type="video/mp4" />
                                </video>
                            </div>
                            <div className="video_detail md:w-1/2 py-5 md:pl-12">
                                <h2 className="video_name font-bold text-2xl">{item.title}</h2>
                                <div className="video_author italic text-sm">{item.author}</div>
                                <div className="video_category italic text-sm text-yellow-600 mb-5">Categoría: {item.category}</div>
                                {/* <p className="video_resume italic">
                                    {item.description}
                                </p> */}
                                <div className="vote_box text-center py-6">
                                    <img src={Vote} alt="" className={styles.vote + " cursor-pointer inline-block"} onClick={voteHandler} data-video_id={item.id} data-category={item.category} />
                                </div>
                            </div>
                        </div>
                    )
                })

            }


            <button className="btn_back font-bold border-2 py-2 px-5 rounded-md float-right hover:bg-black hover:text-white" onClick={() => props.onPage('Category')}>Regresar</button>
        </section>
    )
}

export default Videos
