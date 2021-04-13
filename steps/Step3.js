import React, { Component } from 'react';
import styles from '../styles/App.module.scss';


const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/coco-cloud-new"

class Step3 extends Component {
    constructor() {
        super()
        this.state = {
            image:""
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

        
        console.log(res2.url)
        return res2
    }

    

    async handleChange(event) {
        console.log(event.target.files[0])
        const file = event.target.files[0]
        const imgURL = await this.imageUpload(file)
        this.props.handleImageUpload("imageURL", imgURL.url)
    }
    render() {
        if (this.props.currentStep !== 3) {
            return null
        }


        return (
            <form onSubmit={this.props.goNext}  className={`${styles.formGroup}`}>
                <label>Add an image of your products</label>
                <br/>
                <input
                    className={`${styles.formControl}`}
                    id="image"
                    name="image"
                    type="file"
                    onChange={this.handleChange} 
                />

            </form>
        )

    }
}

export default Step3