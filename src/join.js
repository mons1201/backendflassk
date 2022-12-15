import axios from "axios";
const url="http://127.0.0.1:5643"

export const onCreate=async(obj)=>
{
    //alert(JSON.stringify(obj))
    const t = await axios.post(`${url}/create`,obj)
    return t
}