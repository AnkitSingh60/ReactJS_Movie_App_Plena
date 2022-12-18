import React from 'react'

const Navbar = () => {
  return (
    
    <div className="navbar">
        <nav>

        {/* <h3>Movie_App</h3> */}

        <ul>
            <li> <a href="#">movie</a></li>
            <li><a href="#">movie</a></li>
            <li><a href="#">movie</a></li>
            <li><a href="#">movie</a></li>
            <li><a href="#">movie</a></li>
        </ul>
        </nav>

    <div className="search">
    <input className="search_input" type="text"  placeholder="Search movie here..." />
    </div>
        
    </div>
  )
}

export default Navbar