import alertify from "alertifyjs";
import React, { Component } from "react";
import { Button, FormGroup, Label, Form, Input } from "reactstrap";

export default class FormDemo2 extends Component {
  state = {
    username: "",
    email: "",
    pass: "",
    city: "",
  };

  changeHandler = (event)=> {
    let name = event.target.name;
    let value = event.target.value;

    this.setState({[name]:value})
  }

  submitHandler=(event)=>{
    event.preventDefault();
    alertify.success(this.state.email + " Okey");
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.submitHandler}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input onChange={this.changeHandler} type="text" name="email" placeholder="Enter Email"></Input>
          </FormGroup>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input onChange={this.changeHandler}
              type="text"
              name="username"
              placeholder="Enter Username"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="password">Email</Label>
            <Input onChange={this.changeHandler}
              type="password"
              name="password"
              placeholder="Enter password"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="city">City</Label>
            <Input onChange={this.changeHandler} type="select" name="city">
                <option>Balıkesir</option>
                <option>İzmir</option>
                <option>Bursa</option>
            </Input>
          </FormGroup>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}
