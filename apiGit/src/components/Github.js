
import { useState, useEffect } from "react";
 import Repo from "./Repo";
 import './github.css'

const Github=()=>{

    const [githubData, setGithubData] = useState([])
    const [githubUser, setGithubUser] = useState("meysam-Developer")
    const fetchData = () => {
        return fetch(`https://api.github.com/users/${githubUser}`)
        .then((response) => response.json())
          .then((data) => setGithubData( data));
        
        
      }

      useEffect(() => {
        fetchData()
      }, [])

    return(
        <>
       <input type="text" placeholder="Search for User" onChange={(e) => setGithubUser(e.target.value)} className="searchBar" />
      <button onClick={fetchData} >Search Github</button>
        <div className="info">
          <label>the name:</label>
          <p className="name">{githubData.name}</p>
        </div>
        
        <img src={githubData.avatar_url}  /><br/>
        <span>number of repos : </span>
        <span>{githubData.public_repos}</span>
        <h3>list all of repos :</h3>
        <Repo repo={githubData.repos_url}/>

        </>
    )
}

export default Github


