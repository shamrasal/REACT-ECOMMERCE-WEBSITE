
import React, { useState } from 'react';

import classes from './Movies.module.css';

const Movie = (props) => {
    const [retry, setrety] = useState(false)
    console.log(props.id)
    const deleteHandler = async () => {
        try {
            const response = await fetch(`https://react-http-e5b3c-default-rtdb.firebaseio.com/movies/${props.id}.json`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                }
            })
            const data = await response.text()
            console.log(data)
        } catch (error) {
            console.log(error)
        }
        setrety(true)
    }
    return (
        <li className={classes.movie}>
            <h2>{props.title}</h2>
            <h3>{props.releaseDate}</h3>
            <p>{props.openingText}</p>
            <button onClick={deleteHandler}>Remove Movie</button>
        </li>
    );
};

export default Movie;