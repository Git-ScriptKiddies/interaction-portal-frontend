import React from 'react'

const CheckItem = (props) => {
    return (
        <div className='checkItem'>
            <input type="checkbox" id={props.name} name={props.name} value={props.name} className="checkbox" />
            <label htmlFor={props.name}>{props.name}</label>
        </div>
    )
}

export default CheckItem
