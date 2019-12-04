import React from 'react'


class Image extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render(props) {
        return (
            <>
                <img className="small-image" src={this.props.image.small} alt=""/>
            </>
        );
    }
}

export default Image;
