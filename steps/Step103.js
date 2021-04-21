import React, { Component } from 'react'
import styles from '../styles/App.module.scss';

const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/coco-cloud-new"

class Step103 extends Component {
    constructor() {
        super()
        this.state = {
            imageURL: ""
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
        this.props.handleImageUpload("imageURL", imgURL.url)
        this.setState({
            [name]: file
        })
    }


    render() {
        if (this.props.data.currentStep !== 103) {
            return null
        }


        return (
            <form className={`${styles.formGroup}`} onSubmit={this.props.goNext}>
                <label>Add a cover photo for your link</label>
                <br />
                <label className={styles.inputOptionImgWrapper}>
                    <input
                        className={styles.inputOptionImg}
                        name="imageURL"
                        type="file"
                        onChange={this.handleChange}
                    />
                    {<img className={styles.uploadImgBig} src={this.state.imageURL ? URL.createObjectURL(this.state.imageURL) : '/upload.png'} />}


                </label>
            </form>
        )

    }
}

export default Step103