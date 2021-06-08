import { TextField } from '@material-ui/core';
import React from 'react';
import styles from '../Product.module.css';

const Step1 = ({info, stepCount}) => {

    const [step, setStep] = stepCount;
    const [shopInfo, setShopInfo] = info;

    return (
        <div className="text-black font-bold text-lg flex justify-evenly">
            <br/> <br/> <br/>
            <div className="px-10 py-24">
                <div className="flex flex-row justify-center content-center"> 
                    <div className="p-12">
                        <h1 className="text-xl">What is the name of your shop?</h1> <br/>
                        <TextField onChange={(e) => setShopInfo({...shopInfo, shop_name: e.target.value})} value={shopInfo.shop_name} placeholder="Enter the shop name" />
                    </div> 
                </div>
                <div className={styles.nextPrevBtn}>
                    <div className={styles.btn}>
                        <button onClick={() => setStep(step+1)}> Next </button>
                    </div>
                </div>
            </div>
            <div className={styles.imageContainer}>
              <img src={`/service_preview/preview${step}.png`} alt="preview"/>
            </div>
        </div>
    );
};

export default Step1;