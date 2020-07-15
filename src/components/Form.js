import React, { useState } from 'react'
import { navigate } from '@reach/router'

const Form = () => {

    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/${e.target.category.value}/${e.target.id.value}`);
    }

    // const changeHandler = (e) => {
    //     setThing({
    //         ...thing,
    //         [e.target.name]: e.target.value
    //     })
    // }

    return (
        <div>
            <form onSubmit={ submitHandler }>
                <label htmlFor="category">Search for: </label>
                <select name="category">
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                    <option value="starships">Starships</option>
                    <option value="vehicles">Vehicles</option>
                    <option value="species">Species</option>
                </select>
                <label htmlFor="id">ID:</label>
                <input type="number" name="id"/>
                <input type="submit" value="Search"/>
            </form>
        </div>
    )
}

export default Form
