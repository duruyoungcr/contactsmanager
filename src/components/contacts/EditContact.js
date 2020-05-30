import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInput from "../layout/TextInput";
import axios from "axios";

class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {},
    success: { name: false, email: false, phone: false },
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((contact) => {
        this.setState({
          name: contact.name,
          email: contact.email,
          phone: contact.phone,
        });
      });
  }
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;
    //validation check
    if (name === "") {
      this.setState({
        errors: { name: "Name cannot be empty" },
      });
      return;
    } else {
      this.setState({
        success: { name: true },
      });
    }
    if (email === "") {
      this.setState({
        errors: { email: "Email cannot be empty" },
      });
      return;
    } else {
      this.setState({
        success: { name: true, email: true },
      });
    }
    if (phone === "") {
      this.setState({
        errors: { phone: "Phone cannot be empty" },
      });
      return;
    } else {
      this.setState({
        success: { phone: true },
      });
    }
    const { id } = this.props.match.params;
    const newContact = {
      name,
      email,
      phone,
    };
    axios
      .put(`https://jsonplaceholder.typicode.com/users/${id}`, newContact)
      .then((res) => {
        dispatch({ type: "UPDATE", payload: res.data });
      });

    //clear state
    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {},
      success: { name: false, email: false, phone: false },
    });
    this.props.history.push("/");
  };

  render() {
    const { name, email, phone, errors, success } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card mb-3" id="add-contact-form">
              <div
                className="card-header text-center"
                style={{
                  backgroundColor: "#007bff",
                  color: "white",
                  letterSpacing: "0.2rem",
                }}
              >
                Edit Contact
              </div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInput
                    label="Name"
                    name="name"
                    placeholder="Enter name"
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                    success={success.name}
                    className="mb-3"
                  />
                  <TextInput
                    label="Email"
                    name="email"
                    placeholder="Enter email"
                    type="email"
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                    success={success.email}
                  />
                  <TextInput
                    label="Phone"
                    name="phone"
                    placeholder="Enter phone"
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                    success={success.phone}
                  />
                  <input
                    type="submit"
                    value="Update"
                    className="btn btn-block btn-primary"
                    style={{ letterSpacing: "0.2rem" }}
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default EditContact;
