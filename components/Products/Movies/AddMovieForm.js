import React, { useState } from "react"
import classes from './AddMovieForm.module.css'
const AddMovieForm = () => {
    const [movieTitle, setMovieTitle] = useState('')
    const [movieDescription, setMovieDescription] = useState('')
    const [enteredDate, setEntereddate] = useState('')

    const titleChangeHandler = (event) => {
        setMovieTitle(event.target.value)
    }

    const descriptionChangeHandler = (event) => {
        setMovieDescription(event.target.value)
    }

    const changeDateHandler = (event) => {
        setEntereddate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        const inputData = {
            title: movieTitle,
            opening_crawl: movieDescription,
            release_date: new Date(enteredDate),
        }
        console.log(inputData)
        setEntereddate('')
        setMovieDescription('')
        setMovieTitle('')
    }
    return (
        <div className={classes.div}>
            <form className={classes.form} onSubmit={submitHandler}>
                <span>
                    <label>Title</label>
                    <input
                        id="movietitle"
                        value={movieTitle}
                        onChange={titleChangeHandler}
                        type='text'></input>
                </span>
                <span>
                    <label>Opening Text</label>
                    <textarea
                        id="moviediscription"
                        value={movieDescription}
                        className={classes.longtext}
                        name="message"
                        onChange={descriptionChangeHandler}
                        rows="10"
                        cols="30"
                    ></textarea>
                </span>
                <span>
                    <label>Release_date</label>
                    <input
                        id="moviedate"
                        value={enteredDate}
                        onChange={changeDateHandler}
                        type='date'
                    ></input>
                </span>
                <span>
                    <button className={classes.button}>Submit</button>
                </span>
            </form>
        </div>
    )
}

export default AddMovieForm