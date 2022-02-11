import React from 'react'
import '../css/contact.css'
import MyCard from './MyCard'
import vegeta from '../img/vegeta.jpg'
const ContactUs = () => {
    return (
        <div className='contact-container'>
            <h1>Our teams are here to help</h1>
            <hr />
            <div className="cards container-fix">
                <MyCard work="Technical Team" photu={vegeta} phone="23456784567" email="emailid@gmail.com" />
                <MyCard work="Technical Team" photu={vegeta} phone="23456784567" email="emailid@gmail.com" />
                <MyCard work="Technical Team" photu={vegeta} phone="23456784567" email="emailid@gmail.com" />
                <MyCard work="Technical Team" photu={vegeta} phone="23456784567" email="emailid@gmail.com" />
                <MyCard work="Technical Team" photu={vegeta} phone="23456784567" email="emailid@gmail.com" />
            </div>
        </div>
    )
}

export default ContactUs
