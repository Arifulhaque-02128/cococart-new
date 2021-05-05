import React, { Component, useState } from 'react'
import styles from '../styles/App.module.scss';
// import TextField from '@material-ui/core/TextField';

class Step110 extends Component {
    state = {isFb: false, isYt: false, isLinkedIn : false, isInstagram: false};

    render() {

        const {state} = this
        const setState = (state, e) => {
            e.preventDefault()
            this.setState(state)
        };

        if (this.props.data.currentStep !== 110) {
            return null
        }
        return (
            <form className={`${styles.formGroup}`}>
                <label>Connect your social</label>
                <br/>
                <div className={styles.btnOptionWrapper}>
                    <button className={styles.btnOption1} onClick={(e) => setState({...state, isFb: !(this.state.isFb)}, e)} > Facebook </button>
                    {
                        this.state.isFb && 
                        <div> 
                            <input name="fbLink" value={this.props.data.fbLink} onChange={this.props.handleChange} type="text" className={styles.textFiled} placeholder="Fb Profile Link" /> 
                        </div>
                    }
                    <button className={styles.btnOption2} onClick={(e) => setState({...state, isInstagram: !(this.state.isInstagram)}, e)} > Instagram </button>
                    {
                        this.state.isInstagram && 
                        <div> 
                            <input name="instagramLink" value={this.props.data.instagramLink} onChange={this.props.handleChange} type="text" className={styles.textFiled} placeholder="Instagram Profile Link" /> 
                        </div>
                    }
                    <button className={styles.btnOption2} onClick={(e) => setState({...state, isYt: !(this.state.isYt)}, e)} > Youtube </button>
                    {
                        this.state.isYt && 
                        <div> 
                            <input name="youTubeLink" value={this.props.data.youTubeLink} onChange={this.props.handleChange} type="text" className={styles.textFiled} placeholder="YouTube Link" /> 
                        </div>
                    }
                    <button className={styles.btnOption2} onClick={(e) => setState({...state, isLinkedIn: !(this.state.isLinkedIn)}, e)} > Linkedin </button>
                    {
                        this.state.isLinkedIn && 
                        <div> 
                            <input name="linkedInLink" value={this.props.data.linkedInLink} onChange={this.props.handleChange}  type="text" className={styles.textFiled} placeholder="LinkedIn Profile Link" /> 
                        </div>
                    }
                </div>
            </form>
        )

    }
}

export default Step110