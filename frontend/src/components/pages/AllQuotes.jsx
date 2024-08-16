import React, { Fragment, useEffect, useState } from 'react'
import Quote from '../Quote/Quote';

function AllQuotes() {
    let [quotes, setQuotes] = useState([])
    async function getQuotes() {
        let resp = await fetch('http://localhost:8080/allQuotes');
        let data = await resp.json();
        // console.log(data, "data from allQuote api");
        setQuotes(data)
    }
    useEffect(() => {
        getQuotes();
    }, [])
    return (
        <Fragment>

            {
                quotes.map((quote, index) => {
                    return (<Quote key={quote._id} author={quote.author} text={quote.text} id={quote._id} />)
                })
            }
        </Fragment>
    )
}

export default AllQuotes