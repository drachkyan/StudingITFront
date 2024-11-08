import axios from "axios";
import { CODE } from "../../../../../../constants";

export const axiosTask = async (hash_name:string)=>{
    const responce = await axios.get(CODE+hash_name+"/")
    return responce
}