import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Luke = (props) => {
    const [display, setDisplay] = useState([])
    const url = "https://swapi.dev/api/" + props.type + "/" + props.id + "/";

    // console.log(url);

    useEffect(() => {
        axios.get(url)
            .then(response =>{
                setDisplay(response.data);
            })
            .catch(error => {
                setDisplay("An error occurred")
            })
    },[url])

    console.log(display);

    return (
        <div>
            {
                props.type === "people" && display !== "An error occurred" ?
                <div>
                    <h1>{display.name}</h1>
                    <h4>Birth Year: {display.birth_year}</h4>
                    <h4>Eye Color: {display.eye_color}</h4>
                    <h4>Gender: {display.gender}</h4>
                    <h4>Hair Color: {display.hair_color}</h4>
                    <h4>Height: {display.height}</h4>
                    <h4>Mass: {display.mass}</h4>
                    <h4>Skin Color: {display.skin_color}</h4>
                </div>
                :
                <h1>{props.type === "people" && display === "An error occurred" ? "A person with this ID does not exist" : ""}</h1>
            }

            {
                props.type === "planets" && display !== "An error occurred" ?
                <div>
                    <h1>{display.name}</h1>
                    <h4>Climate: {display.climate}</h4>
                    <h4>Diameter: {display.diameter}</h4>
                    <h4>Gravity: {display.gravity}</h4>
                    <h4>Orbital Period: {display.orbital_period}</h4>
                    <h4>Population: {display.population}</h4>
                    <h4>Rotation Period: {display.rotation_period}</h4>
                    <h4>Surface Water: {display.surface_water === "1" ? "Yes" : "No"}</h4>
                    <h4>Terrain: {display.terrain}</h4>
                </div>
                :
                <h1>{props.type === "planets" && display === "An error occurred" ? "A planet with this ID does not exist" : ""}</h1>
            }

            {
                props.type === "starships" && display !== "An error occurred" ?
                <div>
                    <h1>{display.name}</h1>
                    <h4>Starship Class: {display.starship_class}</h4>
                    <h4>Model: {display.model}</h4>
                    <h4>Manufacturer: {display.manufacturer}</h4>
                    <h4>Cost in Credits: {display.cost_in_credits}</h4>
                    <h4>HyperDrive Rating: {display.hyperdrive_rating}</h4>
                    <h4>Max Atmosphering Speed: {display.max_atmosphering_speed}</h4>
                    <h4>Cargo Capacity: {display.cargo_capacity}</h4>
                    <h4>Consumables: {display.consumables}</h4>
                    <h4>Crew: {display.crew}</h4>
                    <h4>Length: {display.length}</h4>
                    <h4>Passengers: {display.passengers}</h4>
                </div>
                :
                <h1>{props.type === "starships" && display === "An error occurred" ? "A starship with this ID does not exist" : ""}</h1>
            }

            {
                props.type === "vehicles" && display !== "An error occurred" ?
                <div>
                    <h1>{display.name}</h1>
                    <h4>Vehicle Class: {display.vehicle_class}</h4>
                    <h4>Model: {display.model}</h4>
                    <h4>Manufacturer: {display.manufacturer}</h4>
                    <h4>Cost in Credits: {display.cost_in_credits}</h4>
                    <h4>Max Atmosphering Speed: {display.max_atmosphering_speed}</h4>
                    <h4>Cargo Capacity: {display.cargo_capacity}</h4>
                    <h4>Consumables: {display.consumables}</h4>
                    <h4>Crew Size: {display.crew}</h4>
                    <h4>Length: {display.length}</h4>
                    
                    

                </div>
                :
                <h1>{props.type === "vehicles" && display === "An error occurred" ? "A vehicle with this ID does not exist" : ""}</h1>
            }

            {
                props.type === "species" && display !== "An error occurred" ?
                <div>
                    <h1>{display.name}</h1>
                    <h4>Classification: {display.classification}</h4>
                    <h4>Designation: {display.designation}</h4>
                    <h4>Language: {display.language}</h4>
                    <h4>Skin Colors: {display.skin_colors}</h4>
                    <h4>Hair Colors: {display.hair_colors}</h4>
                    <h4>Eye Colors: {display.eye_colors}</h4>
                    <h4>Average Height: {display.average_height}</h4>
                    <h4>Average Lifespan: {display.average_lifespan}</h4>
                </div>
                :
                <h1>{props.type === "species" && display === "An error occurred" ? "A species with this ID does not exist" : ""}</h1>
            }
        </div>
    )
}

export default Luke