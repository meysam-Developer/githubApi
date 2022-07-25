import React from "react";
import Github from "./components/Github";
import{Routes,Route} from 'react-router-dom';


const App = () => {
 return(
<Routes>
    <Route path="/" element={<Github/>} />


</Routes>
  
 )
}

export default App;