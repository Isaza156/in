import React, { Component } from "react";
import Form from "../super-components/Form.jsx";
import Title from "../super-components/Title";
import Grid from "../super-components/Grid";
import { form } from "../assets/forms/SportTraining";
import axios from "axios";

class CreateNewAthlete extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.forms = {
      form
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick = () => {
      console.log(this.state)
  }

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    axios.post("http://localhost:3000/athletes", this.state)
    };

  render() {
    return (
      <>
        <form className="mb-5 container" onSubmit={this.handleSubmit}>
          <Title titleSection="Formulario de Inscripción" />
          <div className="form-row">
            {this.forms.form.map(label => {
              return (
                <Grid key={label.id} paramsSize="col-12 col-md-6">
                  <Form
                    type={label.type}
                    id={label.id}
                    placeholder={label.placeholder}
                    name={label.name}
                    onChange={this.handleChange}
                  />
                </Grid>
              );
            })}
          </div>
          <button className="btn btn-lg btn-success" type="submit" onClick={this.handleClick}>Enviar</button>
        </form>
      </>
    );
  }
}

export default CreateNewAthlete;
