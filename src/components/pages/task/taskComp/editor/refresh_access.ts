import axios from "axios";
import { REFRESH } from "../../../../../../constants";

export const refreshTokenFunction = async (token:string)=>{
    try {
        const responce = await axios.post(REFRESH,{refresh:token})
        localStorage.setItem("accessToken", responce.data.access)
        localStorage.setItem("isLogged","true")
        
    } catch (error) {
            
    }
    
}
