import { useState } from "react"
import { onFilterBrand, onFilterBudget, onFilterYear} from "./join"
import { Traverse } from "./traverse"


export const Filter=()=>
{
    const[grp,setGrp]=useState({
        "brand":"",
        "year":0,
        "price":0
    })
    const[store,setStore]=useState([])

    const observe=(eve)=>{
        const{name,value}=eve.target
        setGrp((old)=>{
            if(name==="price"||name==="year"){
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

    const onFilter=async()=>
    {
        if(grp.brand==="" && grp.price===0){
            const h = await onFilterYear(grp.year)
            setStore(h.data)
        }
        else if(grp.brand===""){
            const h = await onFilterBudget(grp.price)
            setStore(h.data)
        }
        else{
            const h = await onFilterBrand(grp.brand)
            setGrp(h.data)
        }
    }

    const res=()=>
    {
        setGrp(()=>{
            return{
                "brand":"",
                "year":0,
                "price":0
            }
            
        })
    }
    
    return(
        <>{
            (store.length>0)?
            <>
            <Traverse myown={store} />
            </>
            :
            <>
            <div className="mt-4 row justify-content-center">
                <div className="col-lg-6 col-md-8 col-sm-12 p-5 shadow">
                    <div className="form group">
                        <label>Filter by year</label>
                        <input type="text" name="year" onChange={observe} value={grp.year} className="form-control" placeholder="Enter the year to search" />

                    </div>
                    <p className="text-center display-4">OR</p>
                    <div className="form group">
                        <label>Filter by budget</label>
                        <input type="text" name="price" onChange={observe} value={grp.price} className="form-control" placeholder="Enter the price to search" />

                    </div>
                    <p className="text-center display-4">OR</p>
                    <div className="form group">
                        <label>Filter by brand</label>
                        <input type="text" name="brand" onChange={observe} value={grp.brand} className="form-control" placeholder="Enter the brand to search" />
                        
                    </div>
                    <div className="mt-2 row justify-content-around">
                        <button className="col-2 btn btn-outline-info" onClick={onFilter}>
                            <i class="bi bi-funnel"></i>
                        </button>
                        <button className="col-2 btn btn-outline-dark"onClick={res}>
                            <i class="bi bi-x-circle-fill"></i>

                        </button>
                    </div>
                </div>
            </div>
            </>
        }</>
      

    )
}

