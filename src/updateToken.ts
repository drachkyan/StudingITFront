import axios from "axios";

export const updateToken = async (refresh:string)=>{
    try {
        const request = await axios.post("http://45.82.153.53:8000/api/token/refresh/",{refresh:refresh})
        localStorage.setItem("accessToken",request.data.access)
    } catch (error) {
        console.log(error);
    }
}