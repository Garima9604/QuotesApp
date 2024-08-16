import React, { Fragment } from 'react'
import styles from './Quote.module.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Quote(props) {
    let navigate = useNavigate();
    const showQuoteHandler = (id) => {
        navigate(`/quotes/${id}`);
    }



    return (
        <Fragment>
            <ul className={styles.uls}>

                <li className={styles.quote}>
                    <div>
                        <h1>{props.text}</h1>
                        <h3>By - {props.author}</h3>
                    </div>
                    <button className={styles.btn} onClick={() => showQuoteHandler(props.id)}>View Full Quote</button>

                </li>

            </ul>

        </Fragment>
    )
}

export default Quote