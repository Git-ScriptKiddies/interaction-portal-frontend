import next from '../img/next.png';
import React, { useState } from 'react';
import {
    Link
} from "react-router-dom";
const SearchPost = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank");
        }
        else {
            props.addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
        <nav id="myForm">
            <form onSubmit={submit}>
                <div className='filter'>
                    <h2>Filter</h2>
                    <button className='btn' type='submit'>clear filter</button>
                </div>
            </form>
            <div id="filterByCompanyName" className='filterAttribute'>
                <Link to="/ByCompanyName" style={{ textDecoration: 'none' }}><h2>By Company Name<img src={next} alt=">" /></h2></Link>
            </div>
            <hr />
            <div id="filterByAreaOfWork" className='filterAttribute'>
                <Link to="/ByAreaOfWork" style={{ textDecoration: 'none' }}>
                    <h2>By Area Of Work<img src={next} alt=">" /></h2>
                </Link>
            </div>
            <hr />
            <div id="filterByJobType" className='filterAttribute'>
                <Link to="/ByJobType" style={{ textDecoration: 'none' }}>
                    <h2>By Job Type<img src={next} alt=">" /></h2>
                </Link>
            </div>
            <hr />
            <div id="filterByEmploymentType">
                <h2>By Employment Type</h2>
                <div>
                    <input type="checkbox" id="full-time" name="full-time" value="full-time" onClick={submit} />
                    <label htmlFor="full-time">Full-Time</label>
                </div>
                <div>
                    <input type="checkbox" id="Internship" name="Internship" value="Internship" onClick={submit} />
                    <label htmlFor="Internship">Internship</label>
                </div>
            </div>
        </nav >
    )
}

export default SearchPost
