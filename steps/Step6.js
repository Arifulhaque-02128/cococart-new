import React, { Component } from 'react';
import styles from '../styles/App.module.scss';

const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/coco-cloud-new"


class Step6 extends Component {
    constructor() {
        super()
        this.state = {
            optionAurl: "",
            optionBurl: "",
            optionCurl: "",
            optionDurl: "",
        }
        this.handleChange = this.handleChange.bind(this)
    }

    imageUpload = async (imgFile) => {
        const formData = new FormData();
        formData.append('file', imgFile);
        formData.append('upload_preset', 'coco-cloud-images');
        formData.append('cloud_name', 'coco-cloud-new');
        const res = await fetch(`${CLOUDINARY_URL}/image/upload`, {
            method: 'POST',
            body: formData,
        });
        const res2 = await res.json();


        // console.log(res2.url)
        return res2
    }



    async handleChange(event) {
        console.log(event.target.files[0])
        const file = event.target.files[0]
        const name = event.target.name
        const imgURL = await this.imageUpload(file)
        this.props.handleImageUpload(name, imgURL.url)

        this.setState({
            [name]: file
        })
    }

    render() {
        if (this.props.currentStep !== 6) {
            return null
        }




        return (
            <form onSubmit={this.props.goNext} className={`${styles.formGroup}`}>
                <label>What are the different options?</label>
                <br />


                <div className={styles.option}>
                    <label className={styles.inputOptionImgWrapper}>
                        <input
                            className={styles.inputOptionImg}
                            name="optionAurl"
                            type="file"
                            onChange={this.handleChange}
                        />
                        {/* <img src='/upload.png' className={styles.uploadImg} /> */}
                        {<img className={styles.uploadImg} src={this.state.optionAurl ? URL.createObjectURL(this.state.optionAurl) : '/upload.png'} />}
                    </label>

                    <input
                        className={styles.inputOption}
                        name="optionAName"
                        type="text"
                        placeholder="option A"
                        value={this.props.data.optionAName}
                        onChange={this.props.handleChange}
                    />
                    <input
                        className={styles.inputOptionPrice}
                        name="optionAPrice"
                        type="text"
                        placeholder="price"
                        value={this.props.data.optionAPrice}
                        onChange={this.props.handleChange}
                    />
                </div>
                <div className={styles.option}>
                    <label className={styles.inputOptionImgWrapper}>
                        <input
                            className={styles.inputOptionImg}
                            name="optionBurl"
                            type="file"
                            onChange={this.handleChange}
                        />
                        {<img className={styles.uploadImg} src={this.state.optionBurl ? URL.createObjectURL(this.state.optionBurl) : '/upload.png'} />}


                    </label>
                    <input
                        className={styles.inputOption}
                        name="optionBName"
                        type="text"
                        placeholder="option B"
                        value={this.props.data.optionBName}
                        onChange={this.props.handleChange}
                    />
                    <input
                        className={styles.inputOptionPrice}
                        name="optionBPrice"
                        type="text"
                        placeholder="price"
                        value={this.props.data.optionBPrice}
                        onChange={this.props.handleChange}
                    />
                </div>
                <div className={styles.option}>
                    <label className={styles.inputOptionImgWrapper}>
                        <input
                            className={styles.inputOptionImg}
                            name="optionCurl"
                            type="file"
                            onChange={this.handleChange}
                        />
                        {<img className={styles.uploadImg} src={this.state.optionCurl ? URL.createObjectURL(this.state.optionCurl) : '/upload.png'} />}


                    </label>
                    <input
                        className={styles.inputOption}
                        name="optionCName"
                        type="text"
                        placeholder="option C"
                        value={this.props.data.optionCName}
                        onChange={this.props.handleChange}
                    />
                    <input
                        className={styles.inputOptionPrice}
                        name="optionCPrice"
                        type="text"
                        placeholder="price"
                        value={this.props.data.optionCPrice}
                        onChange={this.props.handleChange}
                    />
                </div>
                <div className={styles.option}>
                    <label className={styles.inputOptionImgWrapper}>
                        <input
                            className={styles.inputOptionImg}
                            name="optionDurl"
                            type="file"
                            onChange={this.handleChange}
                        />
                        {<img className={styles.uploadImg} src={this.state.optionDurl ? URL.createObjectURL(this.state.optionDurl) : '/upload.png'} />}

                    </label>
                    <input
                        className={styles.inputOption}
                        name="optionDName"
                        type="text"
                        placeholder="option D"
                        value={this.props.data.optionDName}
                        onChange={this.props.handleChange}
                    />
                    <input
                        className={styles.inputOptionPrice}
                        name="optionDPrice"
                        type="text"
                        placeholder="price"
                        value={this.props.data.optionDPrice}
                        onChange={this.props.handleChange}
                    />
                </div>

            </form>
        )

    }
}

export default Step6