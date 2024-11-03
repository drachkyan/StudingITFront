import axios from "axios";

export const axiosTask = async (hash_name:string)=>{
    const responce = await axios.get("http://45.82.153.53:8000/code/"+hash_name+"/")
    return responce
}