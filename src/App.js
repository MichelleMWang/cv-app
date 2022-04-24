import React from "react";
import Work from "./Work.js"; 


/*hierarchy: 
  App 
    general
      nameS
      email
      phone
    education
      school
      degree
      date
    work
      company
      position
      tasks
      date
*/
class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Work> </Work> 
      </div>
    ); 
  }
}

export default App;
