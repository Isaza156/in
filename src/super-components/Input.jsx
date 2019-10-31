import React, {Component} from 'react'
class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }
  render() {
    const { label, type, placeholder, name, onChange, required } = this.props;
    return (
      <div className="form-group">
        <label className="sr-only">{label}</label>
        <input
          type={type}
          className="form-control"
          placeholder={placeholder}
          name={name}
          onChange={onChange}
          required={required}
     />
      </div>
    );
  }
}

export default Input;
