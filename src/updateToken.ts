import axios from "axios";
import { REFRESH } from "../constants";

export const updateToken = async (refresh:string)=>{
    try {
        const request = await axios.post(REFRESH,{refresh:refresh})
        localStorage.setItem("accessToken",request.data.access)
    } catch (error) {
        console.log(error);
    }
}