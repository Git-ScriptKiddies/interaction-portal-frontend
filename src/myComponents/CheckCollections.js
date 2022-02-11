import React from 'react'
import CheckItem from './CheckItem'

const CheckCollections = (props) => {
    let elements = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');;
    const callMe = (val) => {
        let items = props.items.filter(function (value) {
            return value[0] === val;
        });
        return (
            <>
                {items.length === 0 ? "" :
                    <h3 className='checkContainer'>{val}</h3>}
                {items.length === 0 ? "" : <div className="checkContainer">
                    {items.length === 0 ? "" :
                        items.map((item, index) => {
                            return <CheckItem name={item} key={index} />
                        })}
                </div>}
            </>
        )
    }
    console.log(elements);
    return (
        <div className="container container-fix">
            {elements.map((value, index) => {
                return callMe(value)
            })}
        </div>
    )
}

export default CheckCollections
