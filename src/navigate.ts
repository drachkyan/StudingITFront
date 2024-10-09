import { startTransition } from "react"

export const navigateURL= (navigate:any, url:string)=>{
    startTransition(()=>{
        navigate(url)
    })
}