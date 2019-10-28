import React from 'react'
import LangContext from "../../LangContext";

export default (props) => {
    return (
        <LangContext.Consumer>
            {
                ({chat}) => (
                    <div>
                        <h5>{chat["onlineClients"]}</h5>
                        {props.clients.map((client, index) => <h6 key={`${client}${index}`}>{client}</h6>)}
                    </div>)
            }
        </LangContext.Consumer>
    );
}
