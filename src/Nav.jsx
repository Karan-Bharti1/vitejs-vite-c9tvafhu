import {NavLink} from "react-router-dom"
const Nav=()=>{
return(<>
<nav className="nav">
<div>
    <NavLink to="/">E-commerce</NavLink></div>
<div>
    <NavLink to="/products">Products</NavLink>
    <NavLink to="/home">Home</NavLink>
</div>

</nav>

</>)
}
export default Nav