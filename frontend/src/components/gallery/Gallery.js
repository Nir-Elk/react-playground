import React from 'react'
import './Gallery.css'
import Search from "../gallery/Search";
import axios from "axios";
import {Image} from "react-bootstrap";

class Gallery extends React.Component {
    constructor(props, context) {
        super(props, context);
        if (props.initialState) {
            this.state = props.initialState;
        } else
            this.state = {search: null, images: null};
        this.setSearch = this.setSearch.bind(this);
    }

    setSearch(text) {
        this.setState(prevState => {
            prevState.search = text;
            return prevState;
        });
        this.getDataAxios(text);
    }

    setImages(images) {
        this.setState(prevState => {
            const newImages = images.map(img => {
                let newImg = {
                    small: `https://live.staticflickr.com/${img.server}/${img.id}_${img.secret}_q.jpg`,
                    big: `https://live.staticflickr.com/${img.server}/${img.id}_${img.secret}_l.jpg`
                };
                return newImg;
            });
            prevState.images = [...newImages];
            return prevState;
        });
    }

    getDataAxios(text) {
        axios.get("https://api.flickr.com/services/rest",
            {
                params: {
                    method: 'flickr.photos.search',
                    api_key: '11e6b6f56a3ea670933e10ccc5f10388',
                    text: text,
                    page: '1',
                    per_page: '25',
                    sort: 'relevance',
                    format: 'json',
                    nojsoncallback: '1'
                }
            }
        ).then(res => res.data)
            .then(res => {
                if (
                    !!res &&
                    !!res.photos &&
                    Array.isArray(res.photos.photo) &&
                    res.photos.photo.length > 0
                ) {
                    this.setImages(res.photos.photo);
                }
            });
    }

    render() {
        return (
            <div>
                <Search setSearch={this.setSearch}/>
                {
                    !!this.state.images &&
                    this.state.images.map(img => <Image
                        src={img.small} rounded />)
                }
            </div>
        );
    }
}

export default Gallery;