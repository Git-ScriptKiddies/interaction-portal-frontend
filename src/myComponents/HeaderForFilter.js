import React from 'react'

const HeaderForFilter = (props) => {
    return (
        <>
            <div className='filterHeader container'>
                <h1>Filter {props.name}</h1>
                <button className='btn'>Clear All</button>
                <button className="btn-apply">Apply</button>
            </div>
            <hr className='hr-class' />
        </>
    )
}

export default HeaderForFilter
