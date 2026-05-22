
import { useContext } from "react";
import InterviewContext from "./contexts/interview.jsx";

const Pending = () => {
  const{ items,toggleView} = useContext(InterviewContext);


  return (
    <>
      <h1>Pending</h1>
      <ul>
      {items.map(i=>(<li key={i.url} onClick= {()=>toggleView(i.url)} style={{
        textDecoration:i.interviewed?"line-through":"none"
      }}>
        {i.url}
      </li>))}
      </ul>
    </>
  );
};

export default Pending;