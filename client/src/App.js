import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      subject: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    //console.log(`${e.target.name}:${e.target.value}`);
  };
  async handleSubmit(e) {
    e.preventDefault();
    const { name, email, subject } = this.state;
    const form = await axios.post("/api/form", {
      name,
      email,
      subject
    });
  }

  render() {
    return (
      <Form className="col-xs-12 col-md-6" onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="name">name:</Label>
          <Input type="text" name="name" onChange={this.handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email:</Label>
          <Input type="email" name="email" onChange={this.handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="subject">Subject:</Label>
          <Input type="textarea" name="subject" onChange={this.handleChange} />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default App;
