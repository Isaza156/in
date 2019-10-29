import React, {Component} from 'react'
class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { paramsSize } = this.props;
    return (
        <div className={"form-group "+paramsSize}>
            {this.props.children}
        </div>
    );
  }
}

export default Grid;