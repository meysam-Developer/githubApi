import React, { useState } from 'react'
import './repo.css'


const Repo = ({repo}) => {
    const[repository,setRepository]=useState([]);
    const fetchRepo= ()=>{
        return fetch(repo)
        .then((response) => response.json())
        .then((data) => setRepository(data));
    }

    fetchRepo();
  return (
    <div>
        {
            repository.map(item=>
              <div className='mainRepo'>
            <p key={item.id} >name : {item.name}<br/> fullName : {item.full_name}<br/><a href={item.html_url}>{item.html_url}</a><br/>stars:{item.stargazers_count}
            </p></div>)
        }
        </div>
  )
}

export default Repo