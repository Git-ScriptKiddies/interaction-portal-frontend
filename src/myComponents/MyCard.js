import React from 'react'

const MyCard = (props) => {
    return (
        <div className='my-card'>
            <h2>{props.work}</h2>
            <img src={props.photu} alt="" />
            <h5>Phone Number +91 {props.phone}</h5>
            <h5>E-mail address: {props.email}</h5>
            <h6>Lorem ipsum lore dolor sit amet consectetur adipisicing elit. Tenetur, reiciendis porro. Beatae quidem quis autem distinctio iste iusto soluta veritatis rem dicta debitis ipsam qui non, sequi magnam quaerat, aliquam alias! Ab sit eligendi, fugit modi deserunt nostrum voluptates nulla!</h6>
        </div>
    )
}

export default MyCard
