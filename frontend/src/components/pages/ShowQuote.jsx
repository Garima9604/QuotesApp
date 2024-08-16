import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import styles from './Page.module.css'

function ShowQuote() {

    // show quote
    let [quote, setQuote] = useState({ author: '', text: '' })
    const params = useParams()
    async function fetchQuotes() {
        let resp = await axios.get(`http://localhost:8080/quotes/${params.id}`)
        console.log(resp, 'mil gya quote');
        let { author, text } = resp.data;
        // console.log(author, text, "frontend ");
        setQuote({ author, text })
    }

    useEffect(() => { fetchQuotes() }, [])


    // back to home
    let navigate = useNavigate();

    function backToHome() {
        navigate('/')
    }

    //delete quote
    const handleDelete = async () => {
        try {
            const resp = await axios.delete(`http://localhost:8080/quotes/${params.id}`);
            console.log("Deleted Resp :=> ", resp);
            navigate('/');
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };


    return (
        <Fragment>
            <div className={styles.singleQuote}>
                <h1>Quote of the day</h1>
                <h2>{quote.author}</h2>
                <h3>{quote.text}</h3>
                <div className={styles.btn}>
                    <button onClick={backToHome}>Back</button>
                    <button onClick={handleDelete}>Delete Quote</button>
                </div>
            </div>
        </Fragment>
    )
}

export default ShowQuote