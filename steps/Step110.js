import React, { Component } from 'react'
import styles from '../styles/App.module.scss';

class Step110 extends Component {


    render() {
        if (this.props.data.currentStep !== 110) {
            return null
        }


        return (
            <form className={`${styles.formGroup}`} onSubmit={this.props.goNext}>
                <label>Connect your social</label>
                <br/>
                <div className={styles.btnOptionWrapper}>
                    <button className={styles.btnOption1} name="haveVideo" value={true} >
                    
                            Facebook
                        
                    </button>
                    <button className={styles.btnOption2} name="haveVideo" value={false} >
                    
                            Instagram
                        
                    </button>
                    <button className={styles.btnOption2} name="haveVideo" value={false} >
                    
                            Youtube
                        
                    </button>
                    <button className={styles.btnOption2} name="haveVideo" value={false} >
                    
                            Linkedin
                        
                    </button>
                    
                </div>
            </form>
        )

    }
}

export default Step110