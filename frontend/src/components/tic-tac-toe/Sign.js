import React from "react"

class Sign extends React.Component {

    render(props) {
        const sign = this.props.sign === 1?"X":"O";
        return (
            <div className={'sign'} style={{fontSize: '5rem'}}>
                {sign}
            </div>
        );
    }
}

export default Sign;