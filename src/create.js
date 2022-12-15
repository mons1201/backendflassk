import React from "react"
import { useState } from "react"
import { onCreate } from "./join"


export const Create=()=>
{
    const[bike,setBike]=useState(
        {
            "regno":"",
            "model":"",
            "brand":"",
            "cc":0,
            "price":0,
            "year":0

        }
    )
    const gather=(mohan)=>
    {
        const{name,value}=mohan.target
        setBike((old)=>{
            if (name==="cc"||name==="price"||name==="year"){

                return{
                    ...old,
                    [name]:parseInt(value)
                }
            }
            else{
                return{
                    ...old,
                    [name]:value
                }
            }
        })
    }
    const pushing=async()=>{
        const t = await onCreate(bike)
        alert(JSON.stringify(t.data))
    }
    return(
        <>
            <div className="mt-4 row justify-content-center">
                <p className="text-center text-primary text-uppercase display-5">
                    Add new bike to consultancy
                </p>
                <div className="col-lg-8 col-md-10 col-sm-12 p-5 shadow-lg">
                    <div className="form group">
                        <label>Registration number</label>
                        <input type="text" name="regno" onChange={gather} value={bike.regno} placeholder="vehicle reg number" className="form-control" />
                    </div>
                    <div className="row justify-content-between">
                        <div className="col">
                            <label>Model</label>
                            <input type="text" name="model" onChange={gather} value={bike.model} placeholder="vehicle model" className="form-control" />
                        </div>
                        <div className="col">
                            <label>Brand</label>
                            <input type="text" name="brand" onChange={gather} value={bike.brand} placeholder="vehicle brand" className="form-control" />
                        </div>
                    </div>
                    <div className="row justify-content-between">
                        <div className="col">
                            <label>CC</label>
                            <input type="text" name="cc" onChange={gather} value={bike.cc} placeholder="vehicle cc" className="form-control" />
                        </div>
                        <div className="col">
                            <label>Year</label>
                            <input type="text" name="year" onChange={gather} value={bike.year} placeholder="vehicle manufactured" className="form-control" />
                        </div>
                    </div>
                    <div className="form group">
                        <label>Cost</label>
                        <input type="text" name="price" onChange={gather} value={bike.price} placeholder="vehicle price" className="form-control" />
                    </div>
                    <div className="mt-3 row justify-content-around">
                        <button className="col-2 btn btn-outline-success" onClick={pushing}>
                            <i class="bi bi-node-plus-fill"></i>
                        </button>
                        <button className="col-2 btn btn-outline-dark" type="reset">
                            <i class="bi bi-x-square-fill"></i>
                            </button>
                    </div>
            </div>
        </div>
    </>)
}