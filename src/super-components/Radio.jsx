import React, { Component } from "react";
class Radio extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { title, id } = this.props;
    return (
      <div className="form-group">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="radio"
            id={id}
          />
          <label className="form-check-label" htmlFor={id}>
            {title}
          </label>
        </div>
      </div>
    );
  }
}

export default Radio;
