import React, { useState, useEffect, Fragment } from 'react';
import classes from './Countdown.module.css'

const Countdown = (props) => {


    const [finalCountdown, setFinalCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const [countdownIsActive, setCountdownIsActive] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {

            const finalDatetime = new Date(props.finalTime)
            const nowDatetime = new Date()
            const countdown = finalDatetime - nowDatetime

            const days = Math.floor(countdown / (1000 * 60 * 60 * 24));
            const hours = Math.floor((countdown / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((countdown / 1000 / 60) % 60);
            const seconds = Math.floor((countdown / 1000) % 60);

            if (countdown <= 0) {
                setCountdownIsActive(false)
            }

            setFinalCountdown({
                days,
                hours,
                minutes,
                seconds
            })


        }, 1000);

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        }
    }, [])

    const countActive = <div className={`${classes.timer} flex mt-10`}>
        <div className={`${classes.item} flex-1 guardianBold`}>
            {finalCountdown.days}
            <div>Días</div>
        </div>
        <div className={`${classes.item} flex-1 guardianBold`}>
            {finalCountdown.hours}
            <div>Horas</div>
        </div>
        <div className={`${classes.item} flex-1 guardianBold`}>
            {finalCountdown.minutes}
            <div>Minutos</div>
        </div>
        <div className={`${classes.item} flex-1 guardianBold`}>
            {finalCountdown.seconds}
            <div>Segundos</div>
        </div>
    </div>

    const countInactive = <div className="finish_timer text-white text-3xl mt-10">El evento ha comenzado</div>


    return (
        <div className={classes.wrapper}>
            {countdownIsActive ? countActive : countInactive}
        </div>
    );
};

export default Countdown;
