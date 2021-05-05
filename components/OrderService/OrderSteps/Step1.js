import React from 'react';
import styles from '../Service.module.css';
import {FaPlay} from 'react-icons/fa';
import {AiFillFacebook} from 'react-icons/ai';
import {AiFillInstagram} from 'react-icons/ai';
import {AiFillYoutube} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';

const Step1 = ({info, stepCount}) => {

    const {coverURL, name, promoVideoLink, fbLink, youTubeLink, linkedInLink, instagramLink } = info;
    const [step, setStep] = stepCount;

    return (
        <div>
            <div className={styles.orderContainer}>
                <img className={styles.coverImg} src={coverURL} alt="cover_photo"/>
                <p className={styles.welcomeText}>Welcome to <span className={styles.serviceOwner}> {name}</span>'s page </p>
                <div className={styles.linksContainer}>
                    {
                        promoVideoLink && <a href={promoVideoLink} className={styles.orderButton} target="_blank" > 
                            <FaPlay className={styles.watchIcon} size={15} />
                            Watch Intro
                        </a>
                    }
                    {
                        fbLink && <a href={fbLink} target="_blank" ><AiFillFacebook size={30} /></a>
                    }
                    {
                        instagramLink &&  <a href={instagramLink} target="_blank" > <AiFillInstagram size={30} /> </a>
                    }
                    {
                        youTubeLink && <a href={youTubeLink} target="_blank" > <AiFillYoutube size={30} /> </a>
                    }
                   
                    {
                        linkedInLink &&  <a href={linkedInLink} target="_blank" > <AiFillLinkedin size={30} /> </a>
                    }
                   
                </div>
                <div className={styles.btn}>
                   <button onClick={() => setStep(1)}> Order Now</button>
                </div>
                
            </div>
            <div className={styles.nextPrevBtn}>
                <div className={styles.btn}>
                    <button onClick={() => setStep(step+1)}> Next </button>
                </div>
            </div>
        </div>
    );
};

export default Step1;