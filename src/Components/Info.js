 import React, {Component} from 'react'

function Info (props){
    const {id, name, city, country, employer, title, favoriteMovies} = props.person
    let mappedArray = favoriteMovies.map((element, index) => {
        return <li key={index}>{element}</li>
    })
    return(
    <div className='info-card'>

        <div>
            <h1 className='names'>{name.first} {name.last}</h1>
            <h2 className='middle'>From: {city}, {country}</h2>
            <h2 className='middle'>Job Title: {title}</h2>
            <h2 className='middle'>Employer: {employer}</h2>
            <h2 className='movies'>Favorite Movies: <ol className='list'>{mappedArray}</ol></h2>
        </div>
        <div className='id-box'>
            <h2>{id}/25</h2>
        </div>
    </div>
    )
}
 
 

  export default Info