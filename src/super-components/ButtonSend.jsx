import React, { Component } from "react";
class ButtonSend extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { onClick, title } = this.props;
    return (
      <button
        className="btn btn-lg btn-success"
        type="submit"
        onClick={onClick}
      >
        {title}
      </button>
    );
  }
}

export default ButtonSend;
