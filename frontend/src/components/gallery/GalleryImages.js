import React from 'react'
import Image from "./Image";
import './Gallery.css'



class GalleryImages extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render(props) {
        return (
            <div className="gallery-images">
                {
                    !!this.props.images &&
                    this.props.images.map((img,index) =>
                        <Image image={img.small} key={index}/>
                    )
                }
            </div>
        );
    }
}

export default GalleryImages;
