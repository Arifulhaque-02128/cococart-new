import React, { useState } from 'react'
import styles from '../../styles/Products.module.scss'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const EditProduct = (props) => {
    const [imageURL, setImageURL] = useState(props.product.imageURL)

    let allOptions = props.product.options.filter(option => option.name)

    const [options, setOptions] = useState(allOptions)
    const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/coco-cloud-new"

    console.log("inside editproduct----------", props.product.options)

    const imageUpload = async (imgFile) => {
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

    const handleChange = async (event) => {
        console.log(event.target.files[0])
        const file = event.target.files[0]
        const name = event.target.name
        const imgURL = await imageUpload(file)
        props.handleImageUpload("imageURL", imgURL.url)
        // console.log("image url: ", imgURL.url)
        setImageURL(imgURL.url)
    }

    /* const handleOptionChange = (idx, e) => {
        const { type, value } = e.target
        props.handleOptionChange(idx, e)
        settype(e.target.value)
        const prevOptions = allOptions
        prevOptions[idx][type] = value
        setOptions(prevOptions => {
            prevOptions[idx][type] = value
            console.log("prevoptions----->", prevOptions[idx][type])
            return prevOptions
        })
        setName(prevName => {
            console.log(prevName)
            return value + "uiiii"
        })
    } */

    const addOption = () => {
        setOptions(() => {
            const newOptions = [...options]
            newOptions.push({name: "new variant", price: 0, url: "/upload.png"})
            return newOptions
        })
        console.log(options)
    }


    return (
        <div className={styles.editPageWrapper}>
            <div className={styles.firstPortion}>

                <div className={styles.pageHeader}>
                    <h1>Edit Product</h1>
                    <p>Set your product details</p>
                </div>

                <div className={styles.editor}>
                    <h4>Name</h4>
                    <TextField
                        value={props.product.productName}
                        placeholder="type here"
                        className={styles.txtfield}
                        name="productName"
                        onChange={props.handleChange}
                    />

                    <h4>Price</h4>
                    <TextField
                        placeholder="type here"
                        className={styles.txtfield}
                        name="price"
                        onChange={props.handleChange}
                        value={props.product.price}
                    />

                    <h4>Image</h4>
                    <label>
                        <input
                            className={styles.inpImg}
                            type="file"
                            name="imageURL"
                            onChange={handleChange}
                        />
                        <img
                            src={imageURL}
                            className={styles.imgProduct}
                            name="img"
                            onClick={props.handleChange} />
                    </label>



                </div>
            </div>


            <div className={styles.secondPortion}>
                <div className={styles.pageHeader}>
                    <h1>Variants</h1>
                    <p>Create product variants to show the different options that customers can choose from.</p>
                </div>

                <div className={styles.allEditors}>
                    {/* for every option */}
                    {
                        options.map((option, index) => {
                            return (
                                option.name &&
                                <div className={styles.editor} key={index}>
                                    <h4>Variant {index + 1}</h4>
                                    <TextField
                                        value={option.name}
                                        placeholder="type here"
                                        className={styles.txtfield}
                                        name="name"
                                        onChange={(e) => {
                                            const newOptions = [...options]
                                            newOptions[index].name = e.target.value
                                            setOptions(newOptions)
                                        }}
                                    />

                                    <h4>Price</h4>
                                    <TextField
                                        value={option.price}
                                        placeholder="type here"
                                        className={styles.txtfield}
                                        name="price"
                                        onChange={(e) => {
                                            const newOptions = [...options]
                                            newOptions[index].price = e.target.value
                                            setOptions(newOptions)
                                        }}
                                    />

                                    <h4>Image</h4>
                                    <label>
                                        <input
                                            className={styles.inpImg}
                                            type="file"
                                            name="url"
                                            onChange={async (event) => {
                                                const file = event.target.files[0]
                                                const imgURL = await imageUpload(file)
                                                const newOptions = [...options]
                                                newOptions[index].url = imgURL.url
                                                setOptions(newOptions)
                                            }}
                                        />
                                        <img
                                            src={option.url}
                                            className={styles.imgProduct}
                                            name="img"
                                        />
                                    </label>



                                </div>
                            )
                        })
                    }


                    <div className={styles.addMoreOption}>
                        <Button className={styles.btnAdd} onClick={addOption}>add</Button>
                    </div>
                </div>
            </div>
            <div className={styles.saveWrapper}>
                <Button className={styles.btnSave} onClick={() => props.saveEdits(options)}>Save</Button>
            </div>
        </div>
    )
}


export default EditProduct
