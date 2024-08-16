import React, { Fragment, useRef } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import styles from './Page.module.css'

function NewQuote() {
    const usernameInpRef = useRef()
    const quoteInpRef = useRef()
    let navigate = useNavigate()
    const addQuoteHandler = (e) => {
        e.preventDefault();
        let author = usernameInpRef.current.value;
        let text = quoteInpRef.current.value;
        try {
            let resp = axios.post('http://localhost:8080/addQuotes', { author, text });
            console.log(resp, "axios resp");
            navigate('/')
        } catch (error) {
            console.log("cannot post at this moment ", error);
        }
    }
    return (
        <Fragment>

            <form className={styles.forms} onSubmit={addQuoteHandler}>
                <h1>New Quote Form</h1>
                <div>
                    <label htmlFor="author">Author</label>
                    <input ref={usernameInpRef} type="text" placeholder='Author Name' id="author" />
                </div>
                <div>
                    <label htmlFor="quote">Quote</label>
                    <textarea ref={quoteInpRef} rows={4} cols={10} id="quote" placeholder='Quote'></textarea>
                </div>
                <button>Add Quote</button>
            </form>


        </Fragment>
    )
}

export default NewQuote