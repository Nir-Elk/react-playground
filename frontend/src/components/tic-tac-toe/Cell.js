import React from "react"
import Sign from "./Sign";

class Cell extends React.Component {

    render(props) {
        const {cell, x, y, put} = this.props;
        return (
            <>
                {cell === 0 &&
                    <div className="cell" onClick={() => put(x, y)}> </div>
                }
                {cell !== 0 &&
                    <div className="cell">
                        <Sign sign={cell}/>
                    </div>
                }
            </>
        );
    }
}

export default Cell;
