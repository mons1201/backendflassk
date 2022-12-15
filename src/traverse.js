import { useEffect, useState } from "react"
import { onTraverse } from "./join"

export const Traverse=()=>
{
    const[mylist,setMylist]=useState([])

    const loads=async()=>{
        const hai = await onTraverse()
        setMylist(hai.data)
    }

    useEffect(()=>{
        loads()
    },[])

    return(
        <>
        <div className="mt-4 row justify-content-center">
            <p className="text-center display-5 text-warning">Available vehicles</p>
            <div className="col-lg-7 col-md-8 col-sm-12 p-3 shadow text-nowrap">
                <div className="table-responsive">
                    <table className="table table-striped text-center" cellPadding="4px" cellSpacing="4px">
                        <thead>
                            <tr>
                                <th>Registration Number</th>
                                <th>Model of the vehicle</th>
                                <th>Brand of the vehicle</th>
                                <th>Year of the manufactured</th>
                                <th>Engine capacity in CC</th>
                                <th>Price of the Vehicle</th>
                            </tr>

                        </thead>
                        <tbody>
                            {
                                mylist.map((each)=>(
                                    <tr>
                                        <td>{each.regno}</td>
                                        <td>{each.model}</td>
                                        <td>{each.brand}</td>
                                        <td>{each.year}</td>
                                        <td>{each.cc}</td>
                                        <td>{each.price}</td>
                                    </tr>

                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>

    )


}