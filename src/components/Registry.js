import React, { useEffect, useState } from "react"
import Search from "./Search"
import NewPlanetForm from "./NewPlanetForm"
import PlanetList from "./PlanetList"

function Registry() {
    const [planetArray, setPlantArray] = useState([])
        //STEP THREE now state is the planet array

    const [filterText, setFilterText] = useState("")
    //using state bc search will change

    // STEP ONE GET request to get fetch data
    useEffect(() => {
        fetch(`http://localhost:8085/planets`)
        .then(res => res.json())
        .then(data => setPlantArray(data))
        //STEP TWO setting the data to State
    }, [])

    function addNewPlanet(newPlanet){
        setPlantArray([...planetArray, newPlanet])
        //callback function that is taking the newPlanet and setting our state to the array + the new planet
    }

    function onFilterText(text){
        setFilterText(text)
    } //sets the state to whatever text is in the search bar

    const displayPlanets = planetArray.filter(planet => {
        return (
            planet.name.toLowerCase().includes(filterText.toLowerCase())
            || planet.climate.toLowerCase().includes(filterText.toLowerCase())
            || planet.terrain.toLowerCase().includes(filterText.toLowerCase())
            || planet.population.toLowerCase().includes(filterText.toLowerCase())
        )
    })
        

    return(
        <div className="registry">
            <Search onFilterText={onFilterText}/>
            <div className="content">
                <PlanetList planetArray={displayPlanets}/>
                {/* sending data down to planet list // now including displayPlanets to show the planet list but then filter once the search bar is utilized */}
                <NewPlanetForm addNewPlanet={addNewPlanet}/>
                {/* sending callback function down as a prop to newPlanetForm */}
            </div>
        </div>
    )
}

export default Registry;