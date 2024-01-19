import React from 'react'
import {Link} from 'react-router-dom';

const Links = () => {
  const gridItemStyle = {
    width: '60%',
    height: '40px',
    margin: '10px',
    backgroundColor: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    textDecoration: 'none',
    color: '#fff',
    border: '1px solid #999',
    borderRadius: '5px',
  };
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr)', gap: '10px', padding: '20px' }}>
        <Link to='/accordion' style={gridItemStyle}>Accordion</Link>
    <Link to='/slider' style={gridItemStyle}>Slider</Link>
    <Link to='/tours' style={gridItemStyle}>Tours</Link>
    <Link to='/reviews' style={gridItemStyle}>Reviews</Link>
       <Link to='/task' style={gridItemStyle}>Task</Link>
    <Link to='/grocery' style={gridItemStyle}>Grocery</Link>
    {/* <Link to='/nav' style={gridItemStyle}>Nav</Link> */}
    <Link to='/navbar' style={gridItemStyle}>Navbar</Link>
    {/* <Link to='/sidebar' style={gridItemStyle}>Sidebar</Link> */}
      {/* <Link to='/cart' style={gridItemStyle}>Cart</Link> */}
    </div>
  )
}

export default Links