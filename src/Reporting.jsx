import InterviewContext from "./contexts/interview.jsx"
import {useContext} from "react"
const Reporting=()=>{
    const{ items} = useContext(InterviewContext);
   
    return(<>
  
 <h1>Reporting</h1>
<h2>Total Items: {items.length}</h2>
<h2>Pending Items: {items?.filter(i=>i.interviewed === false ).length}</h2>
<h2>Reviewed Items: {items?.filter(i=>i.interviewed).length}</h2>

    </>)
}
export default Reporting