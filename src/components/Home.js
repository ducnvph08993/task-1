import React from 'react'
import { Link } from 'react-router-dom'

const Home = props => {
    return (
        <div>
            <Link to="/reactjs">
                <h1>React JS Courses</h1>
            </Link>
            <Link to="/nodejs">
                <h1>Node JS Courses</h1>
            </Link>
        </div>
    )
}

Home.propTypes = {

}



export default Home
