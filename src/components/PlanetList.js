import React from "react"
import Planet from "./Planet"

function PlanetList({planetArray}) {
    //console.log(planetArray) 
    //sending the planetArray as a prop to the planet list
    const planetList = planetArray.map((planet) => {
        return < Planet key={planet.id} planet={planet}/>
        //using the .map() method to go through the array planet and take a single planet and sending it to the Planet Component
    })

    return(
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Climate</th>
                    <th>Terrain</th>
                    <th>Population</th>
                </tr>
                {planetList}
                {/* sending the planetList variable down to show each planet */}
            </tbody>
        </table>
    );
}

export default PlanetList;