import React , { useEffect}from 'react'
import Image from "./Image";
import './Gallery.css'
import useScrolledBottom from "../../hooks/useScrolledBottom";


export default ({images}) => {

    return (
        <div className="gallery-images">
            {images.map((img, index) =>
                    <Image image={img} key={index}/>)}
        </div>
    );
}