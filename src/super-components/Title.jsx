import React, {Component} from 'react'
class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { titleSection } = this.props;
    return (
        <div className="mt-2 bg-light">
        <h5 className="text-success">{titleSection}</h5>
        <hr className="bg-success" />
      </div>
    );
  }
}

export default Title;