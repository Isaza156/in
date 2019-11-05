import React, { Component } from "react";
class ButtonBack extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { onClick, title } = this.props;
    return (
      <button
        className="btn btn-lg btn-danger"
        type="button"
        onClick={onClick}
      >
        {title}
      </button>
    );
  }
}

export default ButtonBack;
