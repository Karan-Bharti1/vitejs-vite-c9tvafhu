import {NavLink} from "react-router-dom"
import {useContext} from "react"
import InterviewContext from "./contexts/interview.jsx"
const Nav=()=>{
    const {items}=useContext(InterviewContext)
return(<>
<nav className="nav">
<div>
    <NavLink to="/">Recruiter</NavLink></div>
<div>
    <NavLink to="/reporting">Reporting</NavLink>
    <NavLink to="/pending">Pending ({items?.filter(i=>i.interviewed === false ).length}/{items?.length}) </NavLink>
</div>

</nav>

</>)
}
export default Nav

// Context
// 1. Create Context
// 2.Provide
// 3.Consume