import React from 'react'
import './AssignList.css'

function AssignList({tasks,setTasks}) {
  return (
    <>
    <div className='container'>
    <h3>📅 {tasks.length} Tasks Assigned</h3>
       {tasks.map((tasks)=>
       <article className= 'theme' key={tasks.id}>
        <h1>{tasks.task.toUpperCase()}</h1>
        <p>Assigned to {tasks.name}</p>
        <hr/>
        </article>
       )}
       <button className='btn' onClick={setTasks}>Clear All</button>
    </div>
    </>
  )
}

export default AssignList