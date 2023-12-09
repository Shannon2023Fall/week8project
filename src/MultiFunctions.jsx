import React, { useState } from "react";
import Accidents from './EScooterAccidents.json';


export default function Multifunction() {
    const [acciData, setAcciData] = useState(Accidents); // Set the initial display to full data
    console.log(acciData);

    const [filter, setFilter] = useState("All Reported"); // Default filter is All Reported accidents

    const filterGender =(driver)=>{
        const updateFilter = Accidents.filter((driverGender)=>{
            return driverGender.gender === driver;
        });
        setAcciData(updateFilter);
    }

    const sortFunc = (filter, sortOption) => {
        let filteredDrivers;
      
        if (filter === "All Reported") {
          filteredDrivers = Accidents; // Take the current displayed data
        } else {
          filteredDrivers = acciData; // Accidents.filter((driverGender) => driverGender.gender === filter); //click handler -> filterGender()
        }
      
        if (sortOption === "Sort by Age") {
          filteredDrivers.sort((a, b) => a.age > b.age ? 1 : -1); // How does it work with just minus action
        //} else if (sortOption === "Sort by Month") { // Not necessary cause ID is resigned to time order
        //  filteredDrivers.sort((a, b) => a.month.localeCompare(b.month)); // .localCompare() method of String values returns a number indicating whether this string comes before, or after, or is the same as the given string in sort order.
        } else if (sortOption === "Sort by ID"){
          filteredDrivers.sort((a, b) => a.id > b.id ? 1 : -1);
        }
      
        setAcciData(filteredDrivers);
      };
      
    return (
        <div className="container mt-3 mb-5">
            <h2>Bochum EScooter Accidents reported on news from year 2022</h2>
            <button type="button" class="btn btn-primary me-3 mb-2" onClick={()=>sortFunc(filter, "Sort by ID")}>All Reported</button>
            <button type="button" class="btn btn-secondary me-3 mb-2" onClick={()=>filterGender("male")}>Male Driver</button>
            <button type="button" class="btn btn-secondary me-3 mb-2" onClick={()=>filterGender("female")}>Female Driver</button>
            <button type="button" class="btn btn-success me-3 mb-2" onClick={()=>sortFunc(filter, "Sort by Age")}>Sort by Age</button>
            {/*<button type="button" class="btn btn-success me-3 mb-2" onClick={()=>sortFunc(filter, "Sort by Month")}>Sort by Month</button>*/}

            <div className="row">
                {/* A map is the standard JavaScript function and also a type of data collection. It offers a fast searching of data. */}
                {acciData.map((acci) => (
                    <div className = "col-md-auto" >
                    <div class="card" >
                        <div class="card-header">
                            <h6>ID {acci.id}</h6>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item" >{acci.gender}</li>
                            <li class="list-group-item" >Age {acci.age}</li>
                            <li class="list-group-item" >{acci.month}</li>
                        </ul>
                    </div>

                    </div>

                ))}
        </div>

        </div >
    )
}