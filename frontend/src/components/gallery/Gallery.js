import React from 'react'
import './Gallery.css'
import Search from "../gallery/Search";
import axios from "axios";
import {Col, Container, Image, Row} from "react-bootstrap";

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
            prevState.images = images;
            return prevState;
        });
        this.getDataAxios();
    }

    getDataAxios(text) {
        axios.get("https://api.flickr.com/services/rest",
            {
                headers: {'Access-Control-Allow-Origin': 'https://api.flickr.com'},
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
                    res &&
                    res.photos &&
                    res.photos.photo &&
                    res.photos.photo.length > 0
                ) {
                    this.setImages(res.photos.photo);
                }
            });
    }

    render() {
        let img,source;
        if (this.state.images != null) {
            console.log(this.state.images.length);
            img = this.state.images[1];
            source = "https://live.staticflickr.com/" + img.server + "/" + img.id + "_" + img.owner + ".jpg";
        }
        return (
            <div>
                <Search setSearch={this.setSearch}/>
                {
                    this.state.images
                }
            </div>
        );
    }
}

export default Gallery;