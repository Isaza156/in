import React, { Component } from "react";
import Input from "../super-components/Input";
import Title from "../super-components/Title";
import Grid from "../super-components/Grid";
import { form } from "../assets/forms/SportTraining";
import axios from "axios";
import Select from "../super-components/Select";
import Option from "../super-components/Option.jsx";
import ButtonSend from "../super-components/ButtonSend";
import ButtonBack from "../super-components/ButtonBack";
import CheckBox from "../super-components/CheckBox";
import Radio from "../super-components/Radio";

class CreateNewAthlete extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.forms = {
      form
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick = () => {
    console.log(this.state);
  };

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = () => {
    console.log("entrando al submit con " + this.state);
    axios.post("http://localhost:3000/athletes", this.state);
  };

  render() {
    return (
      <>
        <form className="my-5 container" onSubmit={this.handleSubmit}>
          <Title titleSection="Formulario de Inscripción" />
          <div className="form-row">
            {this.forms.form.map(label => {
              return (
                <Grid key={label.id} paramsSize="col-12 col-md-4">
                  {label.type !== "select" ? (
                    <Input
                      type={label.type}
                      id={label.id}
                      placeholder={label.placeholder}
                      name={label.name}
                      onChange={this.handleChange}
                      value={label.value}
                      required
                    />
                  ) : (
                    <Select
                      id={label.id}
                      name={label.name}
                      onChange={this.handleChange}
                      option={label.options[0].name}
                      required
                    >
                      {label.options.map(obj => {
                        if (obj.id !== "0") {
                          return (
                            <Option
                              valueOption={obj.name}
                              key={obj.id}
                              idOption={obj.id}
                              dataOption={obj.name}
                            />
                          );
                        } else {
                          return (
                            <Option
                              valueOption=""
                              key={obj.id}
                              idOption={obj.id}
                              dataOption={obj.name}
                            />
                          );
                        }
                      })}
                    </Select>
                  )}
                </Grid>
              );
            })}
          </div>
          <CheckBox title="Vive Solo" id="1" />
          <CheckBox title="Trabaja" id="2" />
          <Radio title="Soltero" id="3" />
          <Radio title="Casado" id="4" />
          <div className="d-flex justify-content-between">
            <ButtonBack onClick={this.handleClick} title="Cancelar" />
            <ButtonSend onClick={this.handleClick} title="Enviar" />
          </div>
        </form>
      </>
    );
  }
}

export default CreateNewAthlete;
