import React, { Component } from "react";

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {label, name, onChange,option } = this.props;
    return (
      <div className="form-group">
        <label className="sr-only">{label}</label>
        <select
          className="form-control"
          name={name}
          defaultValue=""
          onChange={onChange}
          option={option}
          required
        >
            {this.props.children}
        </select>
      </div>
    );
  }
}

export default Select;
