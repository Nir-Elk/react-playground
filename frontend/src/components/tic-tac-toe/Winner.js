import React from "react"
import Sign from "./Sign"

class Winner extends React.Component {

    render(props) {
        const text = this.props.winner===0?"No one is win :P":"The Winner is: ";
        return (
            <div style={{fontSize: '3rem'}}>
                {text}
                {this.props.winner >0 && <Sign sign={this.props.winner}/>}
                <div><button onClick={()=>this.props.init()}>Start Over</button></div>
            </div>
        );
    }
}

export default Winner;
