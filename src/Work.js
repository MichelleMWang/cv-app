import React from "react";
/*   work
      company
      position
      tasks
      date */ 
class Work extends React.Component {
    constructor(props){
        super(props); 
    }
    addedWork(){
        return (
            <form className="work-form">
                <label htmlFor="company">Company: </label>
                <input type="text" id="company-input" name="company" />
                <label htmlFor="position">Position: </label>
                <input type="text" id="position-label" name="position" />
                <label htmlFor="repsonsibilities">Repsonsibilities: </label>
                <input type="text" id="repsonsibilities-label" name="repsonsibilities" />
                <label htmlFor="start-date">Start Date: </label>
                <input type="date" id="start-date-label" name="start-date" />
                <label htmlFor="end-date">End Date: </label>
                <input type="date" id="end-date-label" name="end-date" />
            </form>
        ); 
    }

    render(){
        return(
            <div> 
                <button onClick={() => this.addedWork()}> +Add Work Experience </button> 
                <div>{this.addedWork()}</div> 
            </div> 
        ); 
    }
}
export default Work; 