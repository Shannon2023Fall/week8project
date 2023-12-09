import React, { useState, useEffect } from "react";
import Accidents from './EScooterAccidents.json';


export default function Multifunction() {
    const [acciData, setAcciData] = useState(Accidents); // Set the initial display to full data
    console.log(acciData);

    const [filter, setFilter] = useState('All Reported'); // Default filter is All Reported accidents

    const filterGender =(driver)=>{
        const updateFilter = acciData.filter((driverGender)=>{
            return driverGender.gender === driver
        });
        setFilter(updateFilter);
    }

    const sortFunc = (filter, sortOption) => {
        let filteredDrivers;
      
        if (filter === "All Reported") {
          filteredDrivers = acciData;
        } else {
          filteredDrivers = acciData.filter((driverF) => driverF.gender === filter);
        }
      
        if (sortOption === "Sort by Age") {
          filteredDrivers.sort((a, b) => a.age - b.age); // How does it work with just minus action
        } else if (sortOption === "Sort by Month") {
          filteredDrivers.sort((a, b) => a.month.localeCompare(b.month)); // .localCompare() method of String values returns a number indicating whether this string comes before, or after, or is the same as the given string in sort order.
        }
      
        setAcciData(filteredDrivers);
      };
      
    return (
        <div className="container mt-3 mb-5">
            <h2>Bochum EScooter Accidents reported on news from year 2022</h2>
            <button type="button" class="btn btn-primary me-3 mb-2" onClick={()=>setFilter("All Reported")}>All Reported</button>
            <button type="button" class="btn btn-secondary me-3 mb-2" onClick={()=>filterGender("male")}>Male Driver</button>
            <button type="button" class="btn btn-secondary me-3 mb-2" onClick={()=>filterGender("female")}>Female Driver</button>
            <button type="button" class="btn btn-success me-3 mb-2" onClick={()=>sortFunc(filter,'age')}>Sort by Age</button>
            <button type="button" class="btn btn-success me-3 mb-2" onClick={()=>sortFunc(filter,'month')}>Sort by Month</button>

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