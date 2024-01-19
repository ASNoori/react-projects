import React,{useEffect} from 'react'
import './Grocery.css'
function Alert({type,msg,removeAlert,list}) {
    useEffect(()=>{
        const timeout = setTimeout(() => {
            removeAlert();
        }, 3000);
    return(()=>clearTimeout(timeout))
},[list])
  return (
   <p className={`alert alert-${type}`}>{msg}</p>

  )
}

export default Alert