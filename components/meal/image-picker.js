'use client' ;
import { useRef, useState } from 'react';
import classes from './image-picker.module.css' ;
import Image from 'next/image';

export default function ImagePicker({label,name}) {
    const imageInputRef = useRef() ;
    const [imagePicked, setImagePicked] = useState() ;

    const handlePickClick = ()=> {
        imageInputRef.current.click() ;
    }

    const handleImagePicked = (event)=> {
        const file = event.target.files[0] ;
        if(!file) {
            setImagePicked(null) ;
            return ;
        }

        //not understood
        const fileReader = new FileReader();
        fileReader.onload = ()=> {
            setImagePicked(fileReader.result) ;
        }
        fileReader.readAsDataURL(file);
    }

    return (
        <div className={classes.picker}>
            <label htmlFor={name} >{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!imagePicked && <p>No image picked yet.</p>}
                    {imagePicked && (<Image 
                        src={imagePicked} 
                        alt='Image selected by the user'
                        fill
                    />)}
                </div>
                <input 
                    className={classes.input}
                    id={name} 
                    type='file' 
                    accept="image/png, image/jpeg" 
                    name={name} 
                    ref={imageInputRef}
                    onChange={handleImagePicked}
                    required
                />
                <button className={classes.button} type='button' onClick={()=> handlePickClick()}>Pick an Image</button>
            </div>
        </div>
    )
}