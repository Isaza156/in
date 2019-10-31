import React, { Component } from "react";

class Option extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    
  }
  render() {
    const { idOption, dataOption} = this.props;
    return (
       <>
       {
         idOption === "0" ?
            <option value="" disabled defaultValue>{dataOption}</option> :
            <option value={this.props.valueOption} >{dataOption}</option>
       }
        </>
    );
  }
}

export default Option;