import axios from "axios";
const url="http://127.0.0.1:5643"


export const onUpdate=async(key,obj)=>{
    const t = await axios.put(`${url}/${key}`,obj)
    return t
}

export const onTraverse=async()=>{
    const t = await axios.get(`${url}/`)
    return t
}

export const onFetch=async(key)=>{
    const t = await axios.get(`${url}/${key}`)
    return t
}



export const onCreate=async(obj)=>
{
    //alert(JSON.stringify(obj))
    const t = await axios.post(`${url}/create`,obj)
    return t
}