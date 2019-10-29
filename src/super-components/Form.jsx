import React, {Component} from 'react'
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }



  render() {
    const { label, type, placeholder, name } = this.props;
    return (
      <div className="form-group">
        <label className="sr-only">{label}</label>
        <input
          type={type}
          className="form-control"
          placeholder={placeholder}
          name={name}
     />
      </div>
    );
  }
}

export default Form;
