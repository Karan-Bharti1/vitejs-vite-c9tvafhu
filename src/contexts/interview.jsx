import {createContext,useState} from "react"
import {initialReviewedItems} from "../data.js"

const InterviewContext=createContext()


export const InterviewContextProvider=({children})=>{
    const [items,setItems]=useState(initialReviewedItems)
   function toggleView(url){
    const updated=items.map(item=>{
        if(item.url !==url) return item
        if(item.url === url)
        return{
    ...item,interviewed:!item.interviewed}
    })
    setItems(updated)
   }
    return(<InterviewContext.Provider value={{items,toggleView}}>
{children}
    </InterviewContext.Provider>)
}
export default InterviewContext