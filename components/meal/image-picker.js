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
        fileReader.onload = ()=> { //This function is triggered once readAsdataURl method is done .
            setImagePicked(fileReader.result) ;// fileReader.result will have the generated URL
        }
        fileReader.readAsDataURL(file);// it doesnot return any thing , can be accessed using onload .
        //In order to show it as preview we need to convert it into data URL which is value as inpit for Image element, can be used as source for Image element. 
        // can be done using builtin class in JS called fileReader class . 
        
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