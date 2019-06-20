import React from 'react'
export default (props)=>{
    return (
        <div>
            <h5>Online Clients:</h5>
            {props.clients.map((client,index)=><h6 key={`${client}${index}`}>{client}</h6>)}
        </div>
    );
}
