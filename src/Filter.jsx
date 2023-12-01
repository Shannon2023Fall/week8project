import React, { useState } from "react";
import Accidents from './EScooterAccidents.json';


export default function Filter() {
    {/* Why this const[] needs to be inside of function not over it? */ }
    const [crash, setCrash] = useState(Accidents);
    console.log(crash);

    const filterCrash =(catCrash)=>{
        const updateCrash = Accidents.filter((curCrash)=>{
            return curCrash.gender === catCrash
        });
        setCrash(updateCrash);
    }

    return (
        <div className="container mt-3 mb-5">
            <h2>Bochum EScooter Accidents reported on news from year 2022</h2>
            <button type="button" class="btn btn-info me-3 mb-2" onClick={()=>setCrash(Accidents)}>All</button>
            <button type="button" class="btn btn-info me-3 mb-2" onClick={()=>filterCrash("male")}>Male Driver</button>
            <button type="button" class="btn btn-info me-3 mb-2"onClick={()=>filterCrash("female")}>Female Driver</button>

            <div className="row">
                {/* A map is the standard JavaScript function and also a type of data collection. It offers a fast searching of data. */}
                {crash.map((acci) => (
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