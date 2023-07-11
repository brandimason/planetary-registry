import React from "react"
import {v4 as uuid} from "uuid"

function NewPlanetForm({addNewPlanet}) {
    //the NewPlanetForm function is taking the addNewPlanet function 
    function handleSubmit(event){
        event.preventDefault()
        // const formElement = event.target
        
        //dynamic 
        const planetData = {
            id: uuid(),
            name: event.target["name"].value,
            climate: event.target["climate"].value,
            terrain: event.target["terrain"].value,
            population: event.target["population"].value
        }
        //POST Request
        fetch("http://localhost:8085/planets",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(planetData)
        })
        .then(response => response.json())
        .then(data => addNewPlanet(data))

        event.target.reset()
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" />
            <input type="text" name="climate" placeholder="Climate" />
            <input type="text" name="terrain" placeholder="Terrain"/>
            <input type="text" name="population" placeholder="Population" />
            <input type="submit" value="Add"/>
        </form>
    );
}

export default NewPlanetForm;