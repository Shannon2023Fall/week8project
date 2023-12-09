import React, { useState } from "react";
import Accidents from './EScooterAccidents.json';


export default function Multifunction() {
    const [acciData, setAcciData] = useState(Accidents); // Set the initial display to full data
    console.log(acciData);

// Project tasks of week 8
    const handleEdit = (id) => {
      console.log("Edit", id);
    };

    const handleDelete = (id) => {
      console.log("Delete", id);
    };

    return (
        <div className="container mt-3 mb-5">
            <h2>Bochum EScooter Accidents reported on news from year 2022</h2>

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
                        <div>
                            <button type="button" class="btn btn-outline-dark  btn-sm me-2 mt-3" onClick={()=>handleEdit(acci.id)}>Edit</button>
                            <button type="button" class="btn btn-outline-dark btn-sm me-2 mt-3" onClick={()=>handleDelete(acci.id)}>Delete</button>   
                        </div>

                    </div>

                    </div>

                ))}
        </div>

        </div >
    )
}