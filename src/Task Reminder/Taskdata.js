import React,{useState} from 'react'
import AssignList from './AssignList';
import data from '../data';

function Taskdata() {
    const[tasks,setTasks] = useState(data);
    console.log(tasks);
    const handleBtn = () =>{
        setTasks([]);

    }
  return (
    <AssignList tasks={tasks} setTasks={handleBtn}/>
  )
}

export default Taskdata